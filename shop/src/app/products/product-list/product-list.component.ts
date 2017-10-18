import { Component, OnInit } from '@angular/core';
import { Product } from '.././models/product';
import { IProduct } from '.././interfaces/iproduct';
import { ProductService } from '.././services/product.service';
import { CartService } from '../.././cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: IProduct[];
  
  constructor(private productService:  ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  buy(product: IProduct): void{
    this.cartService.buy(product);
  }
}
