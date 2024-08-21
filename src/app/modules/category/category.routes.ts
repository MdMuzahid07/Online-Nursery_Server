import requestValidator from "../../middlewares/requestValidator";
import { CategoryController } from "./category.controller";
import { categoryValidation } from "./category.validation";
import express from "express";



const router = express.Router();

router.post(
    "/create-category",
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