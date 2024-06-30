import {
  Controller,
  Param,
  Get,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return { message: 'Returning all customers' };
  }

  @Get(`:id`)
  getCustomer(@Param(`id`) id: string) {
    return { message: `This is the customer ${id}` };
  }

  @Get(`filtered/:filter`)
  getFilteredCustomer(@Param(`filter`) filter: string) {
    return { message: `This is the list with the filter ${filter}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Creating categories`,
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
      message: 'Customers deleted',
      id,
    };
  }
}
