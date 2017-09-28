import { Injectable } from '@angular/core';
import { Product } from './product';
import { Categories } from './product';

@Injectable()
export class ProductsService {
  private products(): Product[] {
    return <Product[]>[
      <Product>{name: 'pepsi', price: 123.09, category: Categories.Drinks, isAvailable: true, description: 'cold'},
      <Product>{name: 'cake', price: 71.1, category: Categories.Sweets, isAvailable: false, description: 'tasty'}
    ];
  }

  constructor() { }

  getAll(): Product[] {
    return this.products();
  }
}
