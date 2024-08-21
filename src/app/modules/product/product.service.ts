/* eslint-disable @typescript-eslint/no-explicit-any */
import { saveImageToCloudinary } from "../../utils/saveImageToCloudinary";
import { TProduct } from "./product.interface";
import ProductModel from "./product.model";


const addProductIntoDB = async (file: any, payload: TProduct) => {

    // create an product object
    const product: Partial<TProduct> = { ...payload };

    // get all products available in DB
    const products = await ProductModel.find();

    // checking is exists
    const isExists = products?.find((product) => product.title === payload?.title && product?.category === payload?.category);

    if (isExists) {
        throw new Error("this product already added");
    }

    if (file && payload) {
        const imgName = `${product.title}${product.category}`;
        const path = file?.path;
        const productImgUrl = await saveImageToCloudinary(imgName, path);

        // adding the image url link into the product object;
        product.imageUrl = productImgUrl?.secure_url;
    }

    const result = await ProductModel.create(product);
    return result;
};

const getProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
};

const getAProductFromDB = async (id: string) => {
    const result = await ProductModel.findById({ _id: id });
    return result;
};

const updateAProductFromDB = async (id: string, payload: Partial<TProduct>) => {
    const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
    });
    return result;
};

const deleteAProductFromDB = async (id: string) => {
    const result = await ProductModel.findOneAndDelete({ _id: id });
    return result;
};


export const ProductService = {
    getProductsFromDB,
    getAProductFromDB,
    addProductIntoDB,
    updateAProductFromDB,
    deleteAProductFromDB
};