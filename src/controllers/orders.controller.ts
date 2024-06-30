import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return { message: 'Returning all orders' };
  }

  @Get(`:id`)
  getOrder(@Param(`id`) id: string) {
    return { message: `This is the order ${id}` };
  }

  @Get(`filtered/:filter`)
  getFilteredOrders(@Param(`filter`) filter: string) {
    return { message: `This is the list with the filter ${filter}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Creating orders`,
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
      message: 'Brand deleted',
      id,
    };
  }
}
