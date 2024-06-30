import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return 'Returning all orders';
  }

  @Get(`:id`)
  getOrder(@Param(`id`) id: string) {
    return `This is the order ${id}`;
  }

  @Get(`filtered/:filter`)
  getFilteredOrders(@Param(`filter`) filter: string) {
    return `This is the list with the filter ${filter}`;
  }
}
