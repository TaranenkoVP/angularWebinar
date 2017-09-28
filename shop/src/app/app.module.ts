import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { PurchasesService } from './purchases.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ProductsService, PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
