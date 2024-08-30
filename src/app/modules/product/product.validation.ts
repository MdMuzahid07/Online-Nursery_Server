import { z } from "zod";
import { Types } from "mongoose";

const productValidationSchema = z.object({
    title: z.string({
        invalid_type_error: "Product name/title should be a string",
        required_error: "Product name/title must be added",
    }),
    description: z.string({
        invalid_type_error: "Product description should be a string",
        required_error: "Product description must be added",
    }),
    price: z.number({
        invalid_type_error: "Product price should be a number",
        required_error: "Product price must be added",
    }),
    quantity: z.number({
        invalid_type_error: "Product quantity should be a number",
        required_error: "Product quantity must be added",
    }),
    reviews: z.array(z.string()).optional(),
    stock: z.number({
        invalid_type_error: "Product stock should be a number",
        required_error: "Product stock must be added",
    }),
    category: z.string({
        message: "Product category should be a valid ObjectId",
    }),
});

const updateProductValidationSchema = z.object({
    title: z.string({
        invalid_type_error: "Product name/title should be a string",
    }).optional(),
    description: z.string({
        invalid_type_error: "Product description should be a string",
    }).optional(),
    price: z.number({
        invalid_type_error: "Product price should be a number",
    }).optional(),
    quantity: z.number({
        invalid_type_error: "Product quantity should be a number",
    }).optional(),
    reviews: z.array(z.instanceof(Types.ObjectId)).optional(),
    stock: z.number({
        invalid_type_error: "Product stock should be a number",
    }).optional(),
    category: z.string({
        message: "Product category should be a valid ObjectId",
    }).optional(),
});

export const productValidation = {
    productValidationSchema,
    updateProductValidationSchema,
};
