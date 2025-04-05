import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  signIn = async (email: string, password: string): Promise<{ access_token: string }> => {
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== password) throw new UnauthorizedException();
    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
      }),
    };
  };

  signUp = async (username: string, email: string, password: string): Promise<{ access_token: string }> => {
    const existingUser = await this.usersService.findOneByEmail(email);
    if (existingUser) throw new UnauthorizedException('User with this email already exists');
    const newUser = await this.usersService.create({ username, email, password });
    return {
      access_token: await this.jwtService.signAsync({
        sub: newUser.id,
        email: newUser.email,
      }),
    };
  };
}
