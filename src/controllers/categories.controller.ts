import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(`:id`)
  getProductsCategories(@Param('id') id: string) {
    return { message: `Product category number ${id}` };
  }

  @Get(`products/:productId/categories/:categoryId`)
  getProductsByCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return {
      message: `Filtered rojects`,
      product: `${productId}`,
      filter: `${categoryId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Creating category`,
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
      message: 'Categories deleted',
      id,
    };
  }
}
