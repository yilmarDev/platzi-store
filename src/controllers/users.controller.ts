import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { message: 'Returning all users' };
  }

  @Get(`:id`)
  getUser(@Param(`id`) id: string) {
    return { user: `${id}` };
  }

  @Get(`filtered/:filter`)
  getFilteredUsers(@Param(`filter`) filter: string) {
    return { filteredUsers: `${filter}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Creating user`,
      payload,
    };
  }

  @Put(`:id`)
  update(@Param(`:id`) id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(`:id`)
  delete(@Param(`id`) id: number) {
    return {
      message: 'User deleted',
      id,
    };
  }
}
