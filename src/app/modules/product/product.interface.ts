import { Types } from "mongoose";


export interface TProduct {
    title: string;
    description: string;
    price: number;
    quantity: number;
    rating?: Types.ObjectId[];
    imageUrl: string;
    stock: number;
    category?: Types.ObjectId;
};