import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola Mundo de Node';
  }

  @Get(`endpoint1`)
  endpoint1() {
    return `I'm new 1`;
  }

  @Get(`endpoint2`)
  endpoint2() {
    return `I'm new 2`;
  }

  @Get(`products/:id`)
  getProducts(@Param() params: any) {
    return `Product number ${params.id}`;
  }

  @Get(`product-categories/:id`)
  getProductsCategories(@Param('id') id: string) {
    return `Product category number ${id}`;
  }

  @Get(`products/:productId/categories/:categoryId`)
  getProductsByCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return `Product ${productId} filter by category number ${categoryId}`;
  }

  @Get(`clients/:id`)
  getClients(@Param('id') id: string) {
    return `Client number ${id}`;
  }
}
