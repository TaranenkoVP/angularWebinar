import { Categories } from '.././models/categories';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: Categories;
    isAvailable: boolean;
    description?: string;
    ingredients?: string[];
    equivalents?: string[];
}
