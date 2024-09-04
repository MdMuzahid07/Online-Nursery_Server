import express from "express";
import { ProductController } from "./product.controller";
// import { upload } from "../../utils/saveImageToCloudinary";
import requestValidator from "../../middlewares/requestValidator";
import { productValidation } from "./product.validation";


const router = express.Router();

router.post(
    "/create-product",
    // upload.single("file"),
    // // this middleware for parse the text data as json, because we validation want a json data
    // (req: Request, res: Response, next: NextFunction) => {
    //     req.body = JSON.parse(req.body.data);
    //     next();
    // },
    requestValidator(productValidation.productValidationSchema),
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
    // upload.single("file"),
    // // this middleware for parse the text data as json, because we validation want a json data
    // (req: Request, res: Response, next: NextFunction) => {
    //     if (req.body.data) {
    //         req.body = JSON.parse(req.body.data);
    //     }
    //     next();
    // },
    requestValidator(productValidation.updateProductValidationSchema),
    ProductController.updateAProduct
);

router.delete(
    "/:productId",
    ProductController.deleteAProduct
);


export const ProductRoutes = router;