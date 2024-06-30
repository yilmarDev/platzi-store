import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Product } from 'src/entities/products.entity';
import { ProductsService } from 'src/services/products.service';
// import '' from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducst(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = 'NA',
  ) {
    return this.productService.findAll();

    // return {
    //   message: `Products`,
    //   limit: `${limit}`,
    //   offset: `${offset}`,
    //   brand: `${brand}`,
    // };
  }

  @Get(`:id`)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // return { Product: `${params.id}` };

    return this.productService.findOne(id);
  }

  @Get(`filter`)
  getProductFilter(@Param(`filter`) filter: string) {
    return { filterProducts: filter };
  }

  @Post()
  create(@Body() payload: Product) {
    // return {
    //   message: 'Create action executed',
    //   payload,
    // };

    return this.productService.create(payload);
  }

  @Put(`:id`)
  update(@Param(`id`) id: number, @Body() payload: Product) {
    // return {
    //   id,
    //   payload,
    // };

    return this.productService.update(id, payload);
  }

  @Delete(`:id`)
  delete(@Param(`id`) id: number) {
    // return {
    //   message: 'Product deleted',
    //   id,
    // };

    return this.productService.delete(id);
  }
}
