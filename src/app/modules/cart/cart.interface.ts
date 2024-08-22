
export interface TCartItem {
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
    image: string;
    category: string;
    description: string;
    stock: string;
    rating: number;
};


export interface TCartDetails {
    userId: string;
    items: TCartItem[];
    subtotal: number;
    tax: number;
    shippingCost: number;
    total: number;
    currency: string;
};


export interface TCart {
    cart: TCartDetails;
};
