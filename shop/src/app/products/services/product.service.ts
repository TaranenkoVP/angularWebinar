import { Injectable } from '@angular/core';
import { Product } from '.././models/product';
import { Categories } from '.././models/product';
import { IProduct } from '.././interfaces/iproduct';

@Injectable()
export class ProductService {
  private products(): Product[] {
    return <Product[]>[
      <Product>{name: 'pepsi', price: 123.09, category: Categories.Drinks, isAvailable: true},
      <Product>{name: 'cake', price: 71.1, category: Categories.Sweets, isAvailable: false}
    ];
  }

  constructor() { }

  getAll(): IProduct[] {
    return this.products();
  }

  addNew(){

  }
}
