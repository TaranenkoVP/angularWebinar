import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { CartModule } from '.././cart/cart.module';
import { CartService } from '.././cart/services/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ProductService, CartService],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductsModule { }
