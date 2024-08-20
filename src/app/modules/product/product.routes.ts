import express, { NextFunction, Request, Response } from "express";
import { ProductController } from "./product.controller";
import { upload } from "../../utils/saveImageToCloudinary";


const router = express.Router();

router.post(
    "/create-product",
    upload.single("file"),
    // this middleware for parse the text data as json, because we validation want a json data
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    ProductController.addProduct
);

router.get(
    "/",
    ProductController.getAllProducts
);

router.get(
    "/:productId",
    ProductController.getASingleProduct
);

router.patch(
    "/:productId",
    ProductController.updateAProduct
);

router.delete(
    "/:productId",
    ProductController.deleteAProduct
);


export const ProductRoutes = router;