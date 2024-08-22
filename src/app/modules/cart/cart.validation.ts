import { z } from "zod";


const CartItemValidationSchema = z.object({
    title: z.string(),
    quantity: z.number(),
    price: z.number(),
    totalPrice: z.number(),
    image: z.string(),
    category: z.string(),
    description: z.string(),
    stock: z.number(),
    rating: z.number(),
});


const CartDetailsValidationSchema = z.object({
    userId: z.string(),
    items: z.array(CartItemValidationSchema),
    subtotal: z.number(),
    tax: z.number(),
    shippingCost: z.number(),
    total: z.number(),
    currency: z.string(),
});

const CartValidationSchema = z.object({
    cart: CartDetailsValidationSchema
});





export const CartValidation = {
    CartValidationSchema
};