import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(`:id`)
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
}
