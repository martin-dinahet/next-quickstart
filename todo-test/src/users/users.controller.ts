import { Body, Controller, Delete, ForbiddenException, Param, UseGuards } from '@nestjs/common';
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
  async findAll() {
    return await this.usersService.findAllPublic();
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @CurrentUser() currentUser: User) {
    if (id !== currentUser.id) throw new ForbiddenException('You can only update your own profile');
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: string, @CurrentUser() currentUser: User) {
    if (id !== currentUser.id) throw new ForbiddenException('You can only delete yourself');
    return this.usersService.delete(id);
  }
}
