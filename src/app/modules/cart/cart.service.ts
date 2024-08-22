/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCart } from "./cart.interface";
import CartModel from "./cart.model";


const createCartIntoDB = async (payload: TCart) => {

    // get all Cart available in DB
    // const cartItems = await CartModel.find();

    // checking is exists
    // const isExists = cartItems?.find((Cart) => Cart.name === payload?.name);

    // if (isExists) {
    //     throw new Error("this Cart already added");
    // }

    const result = await CartModel.create(payload);
    return result;
};

const getAllCartFromDB = async () => {
    const result = await CartModel.find();
    return result;
};

const getACartFromDB = async (id: string) => {
    const result = await CartModel.findById({ _id: id });
    return result;
};

const updateACartFromDB = async (id: string, payload: Partial<TCart>) => {
    const result = await CartModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
    });
    return result;
};

const deleteACartFromDB = async (id: string) => {
    const result = await CartModel.findOneAndDelete({ _id: id });
    return result;
};


export const CartService = {
    createCartIntoDB,
    getACartFromDB,
    getAllCartFromDB,
    updateACartFromDB,
    deleteACartFromDB
};