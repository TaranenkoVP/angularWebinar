import { Injectable } from '@angular/core';
import { Cart } from '.././models/cart';
import { IProduct } from '../.././products/interfaces/iproduct';

@Injectable()
export class CartService {
  private cart: Cart[] = [];
  public lastUpdateDate: Date;

  public buy(product: IProduct, amount: number ): void {

    const existingProduct = this.cart.find(x => x.product.id === product.id);

    if (existingProduct) {
      existingProduct.amount += amount;
    } else {
      this.cart.push(new Cart(product, amount));
    }
    this.toggleUpdateDate();
  }

  public delete(item: Cart): void {
    const pos = this.cart.indexOf(item);
    this.cart.splice(pos, 1);
    this.toggleUpdateDate();
  }

  public deleteAll(): void {
    this.cart = [];
    this.toggleUpdateDate();
  }

  public getCart(): Cart[] {
    return this.cart;
  }

  public getTotalAmount(): number {
    let total = 0;

    this.cart.forEach(element => {
      total += element.amount;
    });

    return total;
  }

  public getTotalSum(): number {
    let total = 0;

    this.cart.forEach(element => {
      total += element.amount * element.product.price;
    });

    return total;
  }

  public getTotalSumByProductId(productId: number): number{
    let total = 0;

    this.cart.forEach(element => {
      if (element.product.id === productId) {
        total += element.amount * element.product.price;
      }
    });

    return total;
  }

  private toggleUpdateDate(): void {
    this.lastUpdateDate = new Date();
  }
}
