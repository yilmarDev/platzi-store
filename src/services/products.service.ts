import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: '4586',
      name: 'Product 1',
      description: 'Description 1',
      price: 58000,
      stock: 25,
      image: '',
    },
    {
      id: '7852',
      name: 'Product 2',
      description: 'Description 2',
      price: 37000,
      stock: 12,
      image: '',
    },
    {
      id: '3987',
      name: 'Product 3',
      description: 'Description 3',
      price: 69000,
      stock: 14,
      image: '',
    },
    {
      id: '4587',
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

  findOne(id: string) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }
}
