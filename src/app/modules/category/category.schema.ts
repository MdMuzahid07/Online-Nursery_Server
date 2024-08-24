import mongoose from "mongoose";



export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: " ",
        required: true
    }
});

