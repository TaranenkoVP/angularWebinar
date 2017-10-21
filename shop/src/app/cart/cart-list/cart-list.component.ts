import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, Optional } from '@angular/core';
import { CartItemComponent} from './cart-item/cart-item.component';
import { Cart } from './../models/cart';
import { CartService } from '.././services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnInit {
  @ViewChildren(CartItemComponent) childComponents: QueryList<CartItemComponent>;
  @Output() onRemove: EventEmitter<Cart> = new EventEmitter<Cart>();

  cart: Array<Cart>;
  lastUpdateDate: Date;
  constructor( private cartService: CartService) {}

  ngOnInit() {
    this.getCart();
    this.lastUpdateDate = this.cartService.lastUpdateDate || new Date();
  }

  setGreen() {
     this.childComponents.forEach(child => {child.setGreen(); });
  }

  removeCartItem(item: Cart): void {
    this.cartService.delete(item);
  }

  deleteAll(): void {
    this.cartService.deleteAll();
    this.getCart();
  }

  getTotalAmount(): number {
    return this.cartService.getTotalAmount();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  getTotalSumByProductId(productid: number): number {
    return this.cartService.getTotalSumByProductId(productid);
  }

  private getCart(){
    this.cart = this.cartService.getCart();
  }
}
