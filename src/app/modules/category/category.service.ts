/* eslint-disable @typescript-eslint/no-explicit-any */
// import { saveImageToCloudinary } from "../../utils/saveImageToCloudinary";
import { TCategory } from "./category.interface";
import CategoryModel from "./category.model";


const addCategoryIntoDB = async (payload: TCategory) => {

    // create an category object
    // const category: Partial<TCategory> = { ...payload };

    // get all category available in DB
    const categories = await CategoryModel.find();

    // checking is exists
    const isExists = categories?.find((category) => category.name === payload?.name);

    if (isExists) {
        throw new Error("this category already added");
    };

    // if (file && payload) {
    //     const path = file?.path;

    //     const baseName = file.originalname.replace(/\s/g, '-');
    //     const uniqueSuffix = Date.now();
    //     const imgName = `${baseName}-${uniqueSuffix}-image`;

    //     const categoryImgUrl = await saveImageToCloudinary(imgName, path);
    //     // adding the image url link into the category object;
    //     category.image = categoryImgUrl?.secure_url;
    // };

    // if (category && !category.image) {
    //     throw new Error("category image must be added");
    // };

    const result = await CategoryModel.create(payload);
    return result;
};

const getCategoriesFromDB = async () => {
    const result = await CategoryModel.find();
    return result;
};

const getACategoryFromDB = async (id: string) => {
    const result = await CategoryModel.findById({ _id: id });
    return result;
};

const updateACategoryFromDB = async (id: string, payload: any) => {
    // create a category object
    // const category: Partial<TCategory> = { ...payload };

    // if (file && file.path) {
    //     const path = file.path;
    //     // replacing special characters with -
    //     const baseName = file.originalname.replace(/\s/g, '-');
    //     const uniqueSuffix = Math.random() * 10;

    //     const imgName = `${baseName}-${uniqueSuffix}-image`;


    //     const categoryImgUrl = await saveImageToCloudinary(imgName, path);
    //     // add the image URL link into the category object
    //     category.image = categoryImgUrl?.secure_url;
    // }

    const result = await CategoryModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};

const deleteACategoryFromDB = async (id: string) => {
    const result = await CategoryModel.findOneAndDelete({ _id: id });
    return result;
};


export const CategoryService = {
    addCategoryIntoDB,
    getCategoriesFromDB,
    getACategoryFromDB,
    updateACategoryFromDB,
    deleteACategoryFromDB
};