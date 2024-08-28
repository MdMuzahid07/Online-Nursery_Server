/* eslint-disable @typescript-eslint/no-explicit-any */
import { TReview } from "./review.interface";
import ReviewModel from "./review.model";


const createReviewIntoDB = async (payload: TReview) => {
    const result = await ReviewModel.create(payload);
    return result;
};

const getAllReviewFromDB = async () => {
    const result = await ReviewModel.find();
    return result;
};

const getAReviewFromDB = async (id: string) => {
    const result = await ReviewModel.findById({ _id: id });
    return result;
};

const updateAReviewFromDB = async (id: string, payload: Partial<TReview>) => {
    const result = await ReviewModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
    });
    return result;
};

const deleteAReviewFromDB = async (id: string) => {
    const result = await ReviewModel.findOneAndDelete({ _id: id });
    return result;
};


export const ReviewService = {
    createReviewIntoDB,
    updateAReviewFromDB,
    getAReviewFromDB,
    getAllReviewFromDB,
    deleteAReviewFromDB
};