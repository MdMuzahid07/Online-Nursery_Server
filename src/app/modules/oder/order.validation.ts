import { z } from "zod";

const AddressValidationSchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
});

const CustomerDetailsValidationSchema = z.object({
    name: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    address: AddressValidationSchema
});


// enum

const PaymentMethodsValidationSchema = z.enum(["Stripe", "COD"]);
const PaymentStatusValidationSchema = z.enum(["Paid", "Pending", "Failed"]);
const OrderStatusValidationSchema = z.enum(["Pending", "Processing", "Completed", "Cancelled"]);


const OrderValidationSchema = z.object({
    orderId: z.string(),
    customerDetails: CustomerDetailsValidationSchema,
    paymentMethod: PaymentMethodsValidationSchema,
    paymentStatus: PaymentStatusValidationSchema,
    orderStatus: OrderStatusValidationSchema,
});


export const OrderValidation = {
    OrderValidationSchema,
};
