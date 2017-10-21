import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/services/cart.service';
import { LocalStorageService } from './helper-services/local-storage.service';
import { ConfigOptionsService } from './helper-services/config-options.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    CartModule
  ],
  providers: [
    CartService,
    LocalStorageService,
    ConfigOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
