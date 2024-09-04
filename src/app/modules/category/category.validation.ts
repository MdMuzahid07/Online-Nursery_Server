import { z } from "zod";

const categoryValidationSchema = z.object({
    name: z.string(),
});

const updateCategoryValidationSchema = z.object({
    name: z.string().optional(),
    image: z.string().optional()
});

export const categoryValidation = {
    categoryValidationSchema,
    updateCategoryValidationSchema
};

