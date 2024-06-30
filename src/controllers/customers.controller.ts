import { Controller, Param, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return 'Returning all customers';
  }

  @Get(`:id`)
  getCustomer(@Param(`id`) id: string) {
    return `This is the customer ${id}`;
  }

  @Get(`filtered/:filter`)
  getFilteredCustomer(@Param(`filter`) filter: string) {
    return `This is the list with the filter ${filter}`;
  }
}
