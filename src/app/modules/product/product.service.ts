import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const getProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
};

const getAProductFromDB = async (id: string) => {
    const result = await ProductModel.findById(id);
    return result;
};

const addProductIntoDB = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
};

const updateAProductFromDB = async (id: string, payload: TProduct) => {
    const result = await ProductModel.findOneAndUpdate({ id }, { payload });
    return result;
};

const deleteAProductFromDB = async (id: string) => {
    const result = await ProductModel.findOneAndDelete({ id });
    return result;
};


export const ProductService = {
    getProductsFromDB,
    getAProductFromDB,
    addProductIntoDB,
    updateAProductFromDB,
    deleteAProductFromDB
};