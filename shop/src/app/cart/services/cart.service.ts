import { Injectable } from '@angular/core';
import { Cart } from '.././models/cart'
import { IProduct } from '../.././products/interfaces/iproduct'

@Injectable()
export class CartService {
  private cart : Cart[] = [];

  public buy(product: IProduct, amount: number ): void{

    let existingProduct = this.cart.find(x => x.product.id == product.id);
    if (existingProduct){
      existingProduct.amount += amount;
    }
    else{
      this.cart.push(new Cart(product, amount));
    }
  }

  public delete(item: Cart): void{
    const pos = this.cart.indexOf(item);
    this.cart.splice(pos, 1);
  }

  public deleteAll(): void{
    this.cart = [];
  }

  public getCart(): Cart[]{
    return this.cart;
  }

  public getTotalAmount(): number{
    let total: number = 0;

    this.cart.forEach(element => {
      total += element.amount;
    });

    return total;
  }

  public getTotalSum(): number{
    let total: number = 0;
    
    this.cart.forEach(element => {
      total += element.amount * element.product.price;
    });

    return total;
  }

  public getTotalSumByProductId(productId: number): number{
    let total: number = 0;

    this.cart.forEach(element => {
      if (element.product.id == productId){
        total += element.amount * element.product.price;
      }
    });

    return total;
  }

}
