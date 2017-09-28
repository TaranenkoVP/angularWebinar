import { Product } from './product';

export class Purchase {
    product: Product;
    count: number;

    constructor(product: Product, count: number = 1) {
        this.product = product;
        this.count = count;
    }
}