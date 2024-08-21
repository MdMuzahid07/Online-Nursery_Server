/* eslint-disable no-console */
import httpStatus from "http-status";
import { ProductService } from "./product.service";
import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import tryCatchAsync from "../../utils/tryCatchAsync";



//* tryCatchAsync , is an HOC, its take this function an return if resolved the promise, or send error to the global error handler

const addProduct: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await ProductService.addProductIntoDB(req.file, req.body);

    // sendResponse is a util function
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "product created successfully",
        data: result
    });
});


const getAllProducts: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const result = await ProductService.getProductsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "product retrieved successfully",
        data: result
    });
});


const getASingleProduct: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await ProductService.getAProductFromDB(productId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "product retrieved successfully by id",
        data: result
    });
});


const updateAProduct: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const payload = req.body;

    const result = await ProductService.updateAProductFromDB(productId, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "product update successfully",
        data: result
    });
});

const deleteAProduct: RequestHandler = tryCatchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await ProductService.deleteAProductFromDB(productId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "product deleted successfully",
        data: result
    });
});


export const ProductController = {
    getAllProducts,
    getASingleProduct,
    addProduct,
    updateAProduct,
    deleteAProduct
};