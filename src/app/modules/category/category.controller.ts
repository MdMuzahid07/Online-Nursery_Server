/* eslint-disable no-console */
import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import tryCatchAsync from "../../utils/tryCatchAsync";
import { CategoryService } from "./category.service";



//* tryCatchAsync , is an HOC, its take this function an return if resolved the promise, or send error to the global error handler

const addCategory: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.addCategoryIntoDB(req.file, req.body);

    // sendResponse is a util function
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "new category added successfully",
        data: result
    });
});


const getAllCategories: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.getCategoriesFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "categories retrieved successfully",
        data: result
    });
});


const getASingleCategory: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const result = await CategoryService.getACategoryFromDB(categoryId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "category retrieved successfully by id",
        data: result
    });
});


const updateACategory: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    console.log(req)
    const result = await CategoryService.updateACategoryFromDB(categoryId, req.file, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "category update successfully",
        data: result
    });
});

const deleteACategory: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const result = await CategoryService.deleteACategoryFromDB(categoryId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "category deleted successfully",
        data: result
    });
});


export const CategoryController = {
    addCategory,
    getAllCategories,
    getASingleCategory,
    updateACategory,
    deleteACategory
};