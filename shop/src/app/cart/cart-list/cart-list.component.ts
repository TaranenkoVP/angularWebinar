import { Component, OnInit, Output, EventEmitter,ViewChild  } from '@angular/core';
import { CartItemComponent} from './cart-item/cart-item.component';
import { Cart } from './../models/cart';

import { CartService } from '.././services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @ViewChild(CartItemComponent)
  private childComponent: CartItemComponent;

  @Output() onRemove: EventEmitter<Cart> = new EventEmitter<Cart>();
  cart: Array<Cart>;

  constructor(private cartService:  CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  setGreen() {
     this.childComponent.setGreen();
  }

  setRed() {
     this.childComponent.setRed();
  }

  removeCartItem(item: Cart): void {
    const pos = this.cart.indexOf(item);
    this.cart.splice(pos, 1);
  }
}
