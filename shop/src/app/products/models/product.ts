import { Categories } from './categories';

export class Product implements Product {
    static lastId: number;
    id: number;
    name: string;
    description: string;
    price: number;
    category: Categories;
    isAvailable: boolean;
    ingredients: string[];
    equivalents: string[];

    constructor(
        name: string,
        price: number,
        category: Categories,
        isAvailable: boolean,
        description?: string, ingredients?: string[],
        equivalents?: string[]) {
            Product.lastId = ++Product.lastId || 0;
            this.id = Product.lastId;
            this.name = name;
            this.price = price;
            this.category = category;
            this.isAvailable = isAvailable;
            this.description =  description || '';
            this.ingredients = ingredients || [];
            this.equivalents = equivalents || [];
    }
}
