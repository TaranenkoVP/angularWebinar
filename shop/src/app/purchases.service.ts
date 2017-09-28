import { Injectable } from '@angular/core';
import { Product } from './product';
import { Purchase } from './purchase';
import { ProductsService } from './products.service';

@Injectable()
export class PurchasesService {
  purchases(): Purchase[] {
    return <Purchase[]>[
      <Purchase>{product: this.productsService.getAll()[0]},
      <Purchase>{product: this.productsService.getAll()[1]}
    ];
  }
  constructor(private productsService: ProductsService) { }

  getAll(): Purchase[] {
    return this.purchases();
  }
}
