import { Category } from "./category";

export class Dish {
    id: number;
    name: string;
    // is [] the right data type for category? (Ben)
    category: Category[];
    photo_url: string
}
