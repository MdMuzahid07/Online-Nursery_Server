/* eslint-disable no-console */
import httpStatus from "http-status";
import { ProductService } from "./product.service";
import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import tryCatchAsync from "../../utils/tryCatchAsync";



// tryCatchAsync , is an HOC, its take this function an return if resolved the promise, or send error to the global error handler
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


const getAllProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getProductsFromDB();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "product retrieved successfully",
            data: result
        });
    } catch (error) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: true,
            message: "product not found",
            error: error?.message
        });
    }
};


const getASingleProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await ProductService.getAProductFromDB(id);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "product retrieved successfully by id",
            data: result
        });
    } catch (error) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: true,
            message: "product not found",
            error: error?.message
        });
    }
};


const updateAProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await ProductService.updateAProductFromDB(id, payload);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "product update successfully",
            data: result
        });
    } catch (error) {
        sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: true,
            message: "product not updated",
            error: error?.message
        });
    }
};

const deleteAProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await ProductService.deleteAProductFromDB(id);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "product deleted successfully",
            data: result
        });
    } catch (error) {
        sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: true,
            message: "product not deleted",
            error: error?.message
        });
    }
};


export const ProductController = {
    getAllProducts,
    getASingleProduct,
    addProduct,
    updateAProduct,
    deleteAProduct
};