import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, Optional   } from '@angular/core';
import { CartItemComponent} from './cart-item/cart-item.component';
import { Cart } from './../models/cart';

import { CartService } from '.././services/cart.service';
import { LocalStorageService } from '.././services/local-storage.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { ConstantsService } from '../services/constants.service';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [GeneratorService
  ]
})
export class CartListComponent implements OnInit {
  @ViewChildren(CartItemComponent) childComponents : QueryList<CartItemComponent>;
  @Output() onRemove: EventEmitter<Cart> = new EventEmitter<Cart>();

  cart: Array<Cart>;
  savedNumber: number;
  
  constructor(
    private cartService: CartService,
    @Optional() private configService: ConfigOptionsService,
    @Optional() constantsService: ConstantsService,
    @Optional() generatorService: GeneratorService ) { }

  ngOnInit() {
    this.getCart();
    this.getConfig();
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }

  setGreen() {
     this.childComponents.forEach(child => {child.setGreen()});
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

  getConfig(): void{
    this.savedNumber = this.configService ? this.configService.getConfig("savedNumber") : "100500";
  }

  saveValue(value: number): void{
    if (this.configService){
      this.configService.addConfig("savedNumber", value);
      this.getConfig();
    }
  }

  // generate(): string{
  //   return this.generatorService ? this.generatorService.getString(10) : "0";
  // }
}
