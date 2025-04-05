import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_REPOSITORY') private usersRepository: Repository<User>) {}

  findAll = async (): Promise<Array<User>> => {
    return this.usersRepository.find();
  };

  findOneByEmail = async (email: string): Promise<User | null> => {
    return this.usersRepository.findOne({ where: { email } });
  };

  create = async (username: string, email: string, password: string): Promise<User> => {
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    return await this.usersRepository.save(newUser);
  };
}
