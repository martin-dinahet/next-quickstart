import { Body, Controller, ForbiddenException, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @CurrentUser() currentUser: User) {
    if (id !== currentUser.id) throw new ForbiddenException('You can only update your own profile');
    return this.usersService.update(id, updateUserDto);
  }
}
