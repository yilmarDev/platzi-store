import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandController {
  @Get()
  getBrands() {
    return {
      message: 'Returning all brands',
    };
  }

  @Get(`:id`)
  getBrand(@Param(`id`) id: string) {
    return { message: `This is the brand ${id}` };
  }

  @Get(`filtered/:filter`)
  getFilteredBrand(@Param(`filter`) filter: string) {
    return { message: `This is the list with the filter ${filter}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Creating brand`,
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
      message: 'Brand deleted',
      id,
    };
  }
}
