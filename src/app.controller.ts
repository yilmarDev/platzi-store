import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola Mundo de Node';
  }

  /** GETTING NRMAL PARAMS */
  @Get(`endpoint1`)
  endpoint1() {
    return `I'm new 1`;
  }

  @Get(`endpoint2`)
  endpoint2() {
    return `I'm new 2`;
  }

  @Get(`products/filter`)
  getProductFilter() {
    return `Product filter path`;
  }

  @Get(`products/:id`)
  getProduct(@Param() params: any) {
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

  /** GETTING QUERY PARAMS */

  @Get(`products`)
  getProducst(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = 'NA',
  ) {
    return `Products: Limit: ${limit} | offset ${offset} | Brand: ${brand}`;
  }
}
