import requestValidator from "../../middlewares/requestValidator";
import { upload } from "../../utils/saveImageToCloudinary";
import { CategoryController } from "./category.controller";
import { categoryValidation } from "./category.validation";
import express, { NextFunction, Request, Response } from "express";



const router = express.Router();

router.post(
    "/create-category",
    upload.single("file"),
    // this middleware for parse the text data as json, because we validation want a json data
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(categoryValidation.categoryValidationSchema),
    CategoryController.addCategory
);

router.get(
    "/",
    CategoryController.getAllCategories
);

router.get(
    "/:categoryId",
    CategoryController.getASingleCategory
);

router.patch(
    "/:categoryId",
    CategoryController.updateACategory

);

router.delete(
    "/:categoryId",
    CategoryController.deleteACategory

);


export const CategoryRoutes = router;