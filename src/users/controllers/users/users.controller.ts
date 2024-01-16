import { CreateUserDto } from './../../dtos/CreateUser.dto';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'maxtar', email: 'bmaxtar@gmail.com' }];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Req() request: Request, @Res() response: Response) {
    console.log(request.params);
    response.send('');
  }
}
