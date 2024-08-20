/* eslint-disable no-console */
import httpStatus from "http-status";
import { ProductService } from "./product.service";
import { Request, RequestHandler, Response } from "express";




const addProduct: RequestHandler = async (req: Request, res: Response) => {
    try {

        const result = await ProductService.addProductIntoDB(req.file, req.body);

        res.status(400).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "product created successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
};


const getAllProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getProductsFromDB();

        res.status(400).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "products retrieved successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
};


const getASingleProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await ProductService.getAProductFromDB(id);

        res.status(400).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "products retrieved successfully by id",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
};


const updateAProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await ProductService.updateAProductFromDB(id, payload);

        res.status(400).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "product updated successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteAProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await ProductService.deleteAProductFromDB(id);

        res.status(400).json({
            success: true,
            statusCode: httpStatus.OK,
            message: "product deleted successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
};


export const ProductController = {
    getAllProducts,
    getASingleProduct,
    addProduct,
    updateAProduct,
    deleteAProduct
};