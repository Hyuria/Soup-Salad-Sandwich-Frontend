import { Category } from "./category";
import { Dish } from "./dish";
import { User } from "./user";

export class Vote {
    id: number;
    dish: Dish[];
    user: User[];
    category: Category[]
}
