import mongoose from "mongoose";
import CartModel from "../cart/cart.model";
import { TOrder } from "./order.interface";
import OrderModel from "./order.model";
import ProductModel from "../product/product.model";

const createOrderIntoDB = async (payload: TOrder) => {
    const cartProducts = await CartModel.findById(payload?.cartId).populate("items");

    if (!cartProducts) {
        throw new Error("Cart not found");
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        for (const items of cartProducts.items) {
            const product = await ProductModel.findById(items?.productId).session(session);

            // if product not found
            if (!product) {
                throw new Error(` ${items?.productId} product not found`);
            }

            // checking product stock available with ordered quantity
            if (product.stock < items?.quantity) {
                throw new Error(` ${items?.quantity} product stock currently not available`);
            }

            // update the product quantity be decreasing after order
            await ProductModel.findOneAndUpdate(
                { _id: items.productId },
                //  $inc will decrease the quantity because of - value
                { $inc: { stock: -items.quantity } },
                { session }
            );
        };


        const result = await OrderModel.create([payload], { session });

        await session.commitTransaction();
        session.endSession();


        return result;

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw new Error("Order creation failed");
    }
};

const getAllOrderFromDB = async () => {
    const result = await OrderModel.find().populate("cartId");
    return result;
};

const getAOrderFromDB = async (id: string) => {
    const result = await OrderModel.findById({ _id: id });
    return result;
};

const updateAOrderFromDB = async (id: string, payload: Partial<TOrder>) => {
    const result = await OrderModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
    });
    return result;
};

const deleteAOrderFromDB = async (id: string) => {
    const result = await OrderModel.findOneAndDelete({ _id: id });
    return result;
};


export const OrderService = {
    createOrderIntoDB,
    getAllOrderFromDB,
    getAOrderFromDB,
    updateAOrderFromDB,
    deleteAOrderFromDB
};