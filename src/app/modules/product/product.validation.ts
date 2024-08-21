import { z } from "zod";



export const productValidationSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    quantity: z.number(),
    rating: z.number(),
    category: z.string()
});