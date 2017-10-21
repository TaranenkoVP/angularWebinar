import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../../products/models/product';

@Pipe({
  name: 'orderBy',
  pure: false
})

export class OrderByPipe implements PipeTransform {
  transform(value: Array<Cart>, field: string, asc?: boolean): any {
    value.sort((a: Cart, b: Cart) => {
        let result: number;
        if (a.product[field] < b.product[field]) {
            result = -1;
        } else if (a.product[field] > b.product[field]) {
            result = 1;
        } else {
            result = 0;
        }
        return asc ? result : -result;
    });

      return value;
    }
}
