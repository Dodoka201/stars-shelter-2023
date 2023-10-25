import { Document } from "mongoose";
export class Star extends Document {
    name: string;
    age: number;
    adress: string;
    rating: number;
    premium: boolean;
}