import { Injectable } from '@angular/core';
import { Product } from '.././models/product';
import { Categories } from '.././models/product';
import { IProduct } from '.././interfaces/iproduct';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product('pepsi', 123.09, Categories.Drinks, true),
    new Product('cake', 71.1, Categories.Sweets, false)
  ];
  
  constructor() { }

  getAll(): IProduct[] {
    return this.products;
  }
}
