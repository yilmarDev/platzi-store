import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'Returning all users';
  }

  @Get(`:id`)
  getUser(@Param(`id`) id: string) {
    return `This is the user ${id}`;
  }

  @Get(`filtered/:filter`)
  getFilteredUsers(@Param(`filter`) filter: string) {
    return `This is the list with the filter ${filter}`;
  }
}
