import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

enum Categories {
    Sweets = 1,
    Food,
    Drinks
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = "product 1";
	description: string = "descr 1";
	price: number = 10;
	category: Categories = Categories.Drinks; 
  isAvailable: boolean = true;
  
  ingredients = ["sugar","water"];
  equivalents = ["cola","fanta"];

  products: Product[];

  constructor(private productsService: ProductsService){}

  ngOnInit() {
    this.products = this.productsService.getAll();
  }

  onBuy(){
    console.log("You bought: " + this.name);
  }
}
