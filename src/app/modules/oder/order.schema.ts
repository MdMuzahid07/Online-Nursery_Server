import mongoose, { Schema } from "mongoose";
import { TAddress, TCustomerDetails, TOrder, TOrderItem } from "./order.interface";


const OrderItemSchema: Schema = new mongoose.Schema<TOrderItem>({
    productId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
});



const CustomerAddressSchema: Schema = new mongoose.Schema<TAddress>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});


const CustomerDetailsSchema: Schema = new mongoose.Schema<TCustomerDetails>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: CustomerAddressSchema,
        required: true
    }
});

export const OrderSchema: Schema = new mongoose.Schema<TOrder>({
    orderId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    customerDetails: {
        type: CustomerDetailsSchema,
        required: true
    },
    items: {
        type: [OrderItemSchema],
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
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ["Stripe", "COD"],
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["Paid", "Pending", "Failed"],
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["Pending", "Processing", "Completed", "Cancelled"],
        required: true
    },
});