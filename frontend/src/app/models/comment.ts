import { Dish } from "./dish";
import { User } from "./user";

// rename Comment to >Comment? (Ben)
export class Comment {
    id: number;
    dish: Dish;
    user: User;
    date: Date;
    like: number;
    message: string
}
