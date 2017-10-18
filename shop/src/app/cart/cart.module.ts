import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from '.././products/products.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component'
import { CartService } from './services/cart.service'
import { HighlightDirective } from './directives/highlight.directive'
import { ConstantsService } from './services/constants.service'
import { ConfigOptionsService } from './services/config-options.service';
import { GeneratorService } from './services/generator.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsModule
  ],

  declarations: [
    CartListComponent,
    CartItemComponent,
    HighlightDirective],

  providers: [
    CartService,
    ConfigOptionsService,
    GeneratorService,
    { provide: ConstantsService, useValue: {App: "Cart", Ver: "1.0"} }],

  exports:[CartListComponent]

})
export class CartModule { }
