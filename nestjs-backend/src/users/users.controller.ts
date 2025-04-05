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
}
