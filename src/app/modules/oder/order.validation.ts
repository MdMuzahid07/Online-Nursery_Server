import { z } from "zod";

const OrderItemValidationSchema = z.object({
    productId: z.string(),
    title: z.string(),
    quantity: z.number(),
    price: z.number(),
    totalPrice: z.number(),
    image: z.string(),
    category: z.string(),
});

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
    userId: z.string(),
    customerDetails: CustomerDetailsValidationSchema,
    items: z.array(OrderItemValidationSchema),
    subtotal: z.number(),
    tax: z.number(),
    shippingCost: z.number(),
    total: z.number(),
    currency: z.string(),
    paymentMethod: PaymentMethodsValidationSchema,
    paymentStatus: PaymentStatusValidationSchema,
    orderStatus: OrderStatusValidationSchema,
});


export const OrderValidation = {
    OrderValidationSchema,
};
