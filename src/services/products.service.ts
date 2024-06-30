import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 4586,
      name: 'Product 1',
      description: 'Description 1',
      price: 58000,
      stock: 25,
      image: '',
    },
    {
      id: 4587,
      name: 'Product 2',
      description: 'Description 2',
      price: 37000,
      stock: 12,
      image: '',
    },
    {
      id: 4588,
      name: 'Product 3',
      description: 'Description 3',
      price: 69000,
      stock: 14,
      image: '',
    },
    {
      id: 4589,
      name: 'Product 4',
      description: 'Description 4',
      price: 32900,
      stock: 25,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);

    if (!product) throw new NotFoundException(`Product #${id} not found`);
    else return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    // const product = this.products.find((index) => index.id == id);

    if (product) {
      const pIndex = this.products.findIndex((index) => index.id === id);

      this.products[pIndex] = {
        ...product,
        ...payload,
      };

      return this.products[pIndex];
    } else return { data: `Data ${product}`, id: `${id}`, error: 'ERROR' };
  }

  delete(id: number) {
    // const product = this.products.find((index) => index.id === id);
    const product = this.findOne(id);

    if (product) {
      const tempProducts: Product[] = this.products.filter(
        (index) => index.id != id,
      );
      this.products = tempProducts;

      return product;
    }
  }
}
