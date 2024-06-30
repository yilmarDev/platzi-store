import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

interface Product {
  name: string;
  price: number;
  amount: number;
}
@Controller('products')
export class ProductsController {
  @Get()
  getProducst(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = 'NA',
  ) {
    return `Products: Limit: ${limit} | offset ${offset} | Brand: ${brand}`;
  }

  @Get(`:id`)
  getProduct(@Param() params: any) {
    return `Product number ${params.id}`;
  }

  @Get(`filter`)
  getProductFilter() {
    return `Product filter path`;
  }

  @Post()
  create(@Body() payload: Product) {
    return {
      message: 'Create action executed',
      payload,
    };
  }
}
