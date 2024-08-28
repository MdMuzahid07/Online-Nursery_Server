import mongoose from "mongoose";
import { TReview } from "./review.interface";



export const ReviewSchema = new mongoose.Schema<TReview>({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
});

