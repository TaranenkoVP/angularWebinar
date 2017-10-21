import { Injectable } from '@angular/core';
import { Product } from '.././models/product';
import { Categories } from '.././models/categories';
import { IProduct } from '.././interfaces/iproduct';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product('pepsi', 123.0965565156515, Categories.drinks, true),
    new Product('cake', 71.09222222222222, Categories.sweets, false)
  ];

  constructor() { }

  getAll(): IProduct[] {
    return this.products;
  }
}
