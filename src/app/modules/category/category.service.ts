/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCategory } from "./category.interface";
import CategoryModel from "./category.model";


const addCategoryIntoDB = async (payload: TCategory) => {

    // get all category available in DB
    const categories = await CategoryModel.find();

    // checking is exists
    const isExists = categories?.find((category) => category.name === payload?.name);

    if (isExists) {
        throw new Error("this category already added");
    }

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

const updateACategoryFromDB = async (id: string, payload: Partial<TCategory>) => {
    const result = await CategoryModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
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