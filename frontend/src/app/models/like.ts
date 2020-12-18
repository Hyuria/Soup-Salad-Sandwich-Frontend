import { User } from "./user";

export class Like {
    id: number;
    // is this the right data type for comment? (Ben)
    comment: Comment[];
    user: User[];
    thoughts: number
}
