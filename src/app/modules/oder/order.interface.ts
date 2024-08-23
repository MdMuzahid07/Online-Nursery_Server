import { TOrderStatus, TPaymentMethods, TPaymentStatus } from "./order.constants";

interface TOrderItem {
    productId: string;
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
    image: string;
    category: string;
};

interface TAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
};

interface TCustomerDetails {
    name: string;
    email: string;
    phoneNumber: string;
    address: TAddress
};


export interface TOrder {
    order: {
        orderId: string;
        userId: string;
        customerDetails: TCustomerDetails;
        items: TOrderItem[];
        subtotal: number;
        tax: number;
        shippingCost: number;
        total: number;
        currency: string;
        paymentMethod: TPaymentMethods;
        paymentStatus: TPaymentStatus;
        orderStatus: TOrderStatus;
    }
};
