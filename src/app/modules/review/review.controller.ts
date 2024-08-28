//* tryCatchAsync , is an HOC, its take this function an return if resolved the promise, or send error to the global error handler

import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { ReviewService } from "./review.service";
import tryCatchAsync from "../../utils/tryCatchAsync";
import { Request, RequestHandler, Response } from "express";

const createReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.createReviewIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "new Review added successfully",
        data: result
    });
});


const getAllReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReviewFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reviews retrieved successfully",
        data: result
    });
});


const getASingleReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { ReviewId } = req.params;
    const result = await ReviewService.getAReviewFromDB(ReviewId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Review retrieved successfully by id",
        data: result
    });
});


const updateAReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { ReviewId } = req.params;
    const payload = req.body;

    const result = await ReviewService.updateAReviewFromDB(ReviewId, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Review update successfully",
        data: result
    });
});

const deleteAReview: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { ReviewId } = req.params;
    const result = await ReviewService.deleteAReviewFromDB(ReviewId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Review deleted successfully",
        data: result
    });
});


export const ReviewController = {
    createReview,
    getAllReview,
    getASingleReview,
    updateAReview,
    deleteAReview
};