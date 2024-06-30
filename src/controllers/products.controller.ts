import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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
    return {
      message: `Products`,
      limit: `${limit}`,
      offset: `${offset}`,
      brand: `${brand}`,
    };
  }

  @Get(`:id`)
  getProduct(@Param() params: any) {
    return { Product: `${params.id}` };
  }

  @Get(`filter`)
  getProductFilter(@Param(`filter`) filter: string) {
    return { filterProducts: filter };
  }

  @Post()
  create(@Body() payload: Product) {
    return {
      message: 'Create action executed',
      payload,
    };
  }

  @Put(`:id`)
  update(@Param(`:id`) id: number, @Body() payload: Product) {
    return {
      id,
      payload,
    };
  }

  @Delete(`:id`)
  delete(@Param(`id`) id: number) {
    return {
      message: 'Product deleted',
      id,
    };
  }
}
