import { Categories } from '.././models/product';

export interface IProduct {
    name: string;
    price: number;
    category: Categories;
    isAvailable: boolean;
    description?: string;
    ingredients?: string[];
    equivalents?: string[];
}
