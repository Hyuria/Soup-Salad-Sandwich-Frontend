import { Category } from "./category";
import { Status } from "./status";

export class Dish {
    id: number;
    name: string;
    status: Status; 
    category: Category;
    photo_url: string
}
