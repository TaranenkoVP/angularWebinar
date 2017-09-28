import { Component, OnInit } from '@angular/core';
import { Purchase } from '.././purchase';
import { PurchasesService } from '.././purchases.service';

@Component({
  selector: 'app-cart',
  // templateUrl: '.././app.component.html',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
debugger;
  purchases: Purchase[] = this.purchasesService.getAll();
  constructor(private purchasesService:  PurchasesService) { }

  ngOnInit() {
    this.purchases = this.purchasesService.getAll();
  }
  
}
