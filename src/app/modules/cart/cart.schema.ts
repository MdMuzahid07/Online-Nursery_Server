import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
});


const CartDetailsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: [CartItemSchema],
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    shippingCost: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    currency: {
        type: Number,
        required: true
    },
});


export const CartSchema = new mongoose.Schema({
    cart: {
        type: CartDetailsSchema,
        required: true
    }
});