import { z } from "zod";

const productValidationSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    quantity: z.number(),
    rating: z.number(),
    category: z.string()
});


const updateProductValidationSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    rating: z.number().optional(),
    category: z.string().optional()
});

export const productValidation = {
    productValidationSchema,
    updateProductValidationSchema
};