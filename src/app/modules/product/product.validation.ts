import { z } from "zod";



export const productValidationSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    quantity: z.string(),
    rating: z.string(),
    category: z.string()
});