import * as mongoose from 'mongoose';

export const StarSchema = new mongoose.Schema({
    name: String,
    age: Number,
    adress: String,
    rating: Number,
    premium: Boolean
})