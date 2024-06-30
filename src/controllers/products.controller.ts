import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  /** GETTING QUERY PARAMS */

  @Get()
  getProducst(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = 'NA',
  ) {
    return `Products: Limit: ${limit} | offset ${offset} | Brand: ${brand}`;
  }

  @Get(`filter`)
  getProductFilter() {
    return `Product filter path`;
  }

  @Get(`:id`)
  getProduct(@Param() params: any) {
    return `Product number ${params.id}`;
  }
}
