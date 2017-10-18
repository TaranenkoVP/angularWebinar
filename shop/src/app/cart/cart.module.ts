import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from '.././products/products.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component'
import { CartService } from './services/cart.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsModule
  ],
  declarations: [CartListComponent, CartItemComponent],
  providers: [CartService],
  exports:[CartListComponent]

})
export class CartModule { }
