import { Injectable } from '@angular/core';
import { Cart } from '.././models/cart'
import { IProduct } from '../.././products/interfaces/iproduct'

@Injectable()
export class CartService {
  private cart : Cart[] = [];

  public buy(product : IProduct): void{
      this.cart.push(new Cart(product));
  }

  public getCart(): Cart[]{
    return this.cart;
  }
}
