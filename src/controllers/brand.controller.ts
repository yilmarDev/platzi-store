import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandController {
  @Get()
  getBrands() {
    return 'Returning all brands';
  }

  @Get(`:id`)
  getBrand(@Param(`id`) id: string) {
    return `This is the brand ${id}`;
  }

  @Get(`filtered/:filter`)
  getFilteredBrand(@Param(`filter`) filter: string) {
    return `This is the list with the filter ${filter}`;
  }
}
