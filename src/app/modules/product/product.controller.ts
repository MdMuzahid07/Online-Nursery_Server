import httpStatus from "http-status";
import { ProductService } from "./product.service";
import { NextFunction, Request, Response } from "express";


const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProductService.getProductsFromDB();

        res.status(httpStatus.OK).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "products retrieved successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};


const getASingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await ProductService.getAProductFromDB(id);

        res.status(httpStatus.OK).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "products retrieved successfully by id",
            data: result
        });
    } catch (error) {
        next(error);
    }
};


const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const result = await ProductService.getAProductFromDB(payload);

        res.status(httpStatus.OK).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "product created successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const updateAProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await ProductService.updateAProductFromDB(id, payload);

        res.status(httpStatus.OK).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "product updated successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const deleteAProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await ProductService.deleteAProductFromDB(id);

        res.status(httpStatus.OK).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "product deleted successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};


export const ProductController = {
    getAllProducts,
    getASingleProduct,
    addProduct,
    updateAProduct,
    deleteAProduct
};