import { z } from "zod";


const reviewValidationSchema = z.object({
    name: z.string(),
    rating: z.number(),
    comment: z.string()
});



export const reviewValidation = {
    reviewValidationSchema
};