import { IProduct } from '../.././products/interfaces/iproduct';

export class Cart{
    static lastId: number;
    product: IProduct;
    amount: number;
    constructor(product: IProduct, amount: number = 1) {
        Cart.lastId = ++Cart.lastId || 0;
        this.product = product;
        this.amount = amount;
    }
}