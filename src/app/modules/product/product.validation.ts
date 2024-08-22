import { z } from "zod";

const productValidationSchema = z.object({
    title: z.string({
        invalid_type_error: "product name/title should be string",
        required_error: "product name/title must be added",
    }),
    description: z.string({
        invalid_type_error: "product description should be string",
        required_error: "product description must be added",
    }),
    price: z.number({
        invalid_type_error: "product price should be number",
        required_error: "product price must be added",
    }),
    quantity: z.number({
        invalid_type_error: "product quantity should be number",
        required_error: "product quantity must be added",
    }),
    rating: z.number({
        invalid_type_error: "product rating should be number",
        required_error: "product rating must be added",
    }),
    stock: z.number({
        invalid_type_error: "product stock should be number",
        required_error: "product stock must be added",
    }),
    category: z.string({
        invalid_type_error: "product category should be string",
        required_error: "product category must be added",
    }),
});

const updateProductValidationSchema = z.object({
    title: z
        .string({
            invalid_type_error: "product name/title should be string",
            required_error: "product name/title must be added",
        })
        .optional(),
    description: z
        .string({
            invalid_type_error: "product description should be string",
            required_error: "product description must be added",
        })
        .optional(),
    price: z
        .number({
            invalid_type_error: "product price should be number",
            required_error: "product price must be added",
        })
        .optional(),
    quantity: z
        .number({
            invalid_type_error: "product quantity should be number",
            required_error: "product quantity must be added",
        })
        .optional(),
    rating: z
        .number({
            invalid_type_error: "product rating should be number",
            required_error: "product rating must be added",
        })
        .optional(),
    stock: z
        .number({
            invalid_type_error: "product stock should be number",
            required_error: "product stock must be added",
        })
        .optional(),
    category: z
        .string({
            invalid_type_error: "product category should be string",
            required_error: "product category must be added",
        })
        .optional(),
});

export const productValidation = {
    productValidationSchema,
    updateProductValidationSchema,
};
