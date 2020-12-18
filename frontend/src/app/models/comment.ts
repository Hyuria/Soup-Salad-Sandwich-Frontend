import { Dish } from "./dish";
import { User } from "./user";

// rename Comment to >Comment? (Ben)
export class Comment {
    id: number;
    dish: Dish[];
    user: User[];
    date: Date;
    // is the datatype for like correct? (Ben)
    like: number;
    message: string
}
