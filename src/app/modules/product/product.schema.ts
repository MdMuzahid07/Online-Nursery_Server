import mongoose, { Schema } from "mongoose";
import { TProduct } from "./product.interface";


export const ProductSchema = new mongoose.Schema<TProduct>(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            default: " "
        },
        category: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
            ref: "category"
        }
    },
    {
        timestamps: true
    }
);

