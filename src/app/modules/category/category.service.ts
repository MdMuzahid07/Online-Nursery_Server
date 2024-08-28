/* eslint-disable @typescript-eslint/no-explicit-any */
import { saveImageToCloudinary } from "../../utils/saveImageToCloudinary";
import { TCategory } from "./category.interface";
import CategoryModel from "./category.model";


const addCategoryIntoDB = async (file: any, payload: TCategory) => {

    // create an category object
    const category: Partial<TCategory> = { ...payload };

    // get all category available in DB
    const categories = await CategoryModel.find();

    // checking is exists
    const isExists = categories?.find((category) => category.name === payload?.name);

    if (isExists) {
        throw new Error("this category already added");
    };

    if (file && payload) {
        const imgName = `${category.name}${Math.random()}categoryImg`;
        const path = file?.path;
        const categoryImgUrl = await saveImageToCloudinary(imgName, path);
        // adding the image url link into the category object;
        category.image = categoryImgUrl?.secure_url;
    };

    if (category && !category.image) {
        throw new Error("category image must be added");
    };

    const result = await CategoryModel.create(category);
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

const updateACategoryFromDB = async (id: string, file, payload) => {
    // create a category object
    const category: Partial<TCategory> = { ...payload };

    if (file && file.path) {
        const imgName = file.originalname;
        const path = file.path;
        const categoryImgUrl = await saveImageToCloudinary(imgName, path);
        // add the image URL link into the category object
        category.image = categoryImgUrl?.secure_url;
    }

    const result = await CategoryModel.findOneAndUpdate({ _id: id }, category, {
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