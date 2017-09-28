export enum Categories {
    Sweets = 1,
    Food,
    Drinks
};

export class Product {
    name: string;
    description: string;
    price: number;
    category: Categories; 
    isAvailable: boolean;
    ingredients: string[];
    equivalents: string[];

    constructor(name: string, price: number, category: Categories, isAvailable: boolean, description: string, ingredients: string[], equivalents: string[]) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.isAvailable = isAvailable;
        this.description =  description || "";
        this.ingredients = ingredients || [];
        this.equivalents = equivalents || [];
    }
}
