import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserInput } from 'src/types';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get() //localhost:3002/user
  getAllUser() {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() inp: IUserInput) {
    return this.userService.addUser(inp);
  }

  @Delete()
  deleteUser(@Body() deleteId: any) {
    console.log('id', deleteId);
    return this.userService.delete(deleteId.userId);
  }
}
