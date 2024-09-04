import requestValidator from "../../middlewares/requestValidator";
// import { upload } from "../../utils/saveImageToCloudinary";
import { CategoryController } from "./category.controller";
import { categoryValidation } from "./category.validation";
import express from "express";



const router = express.Router();

router.post(
    "/create-category",
    // upload.single("categoryImg"),
    // // this middleware for parse the text data as json, because we validation want a json data
    // (req: Request, res: Response, next: NextFunction) => {
    //     req.body = JSON.parse(req.body.data);
    //     next();
    // },
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
    // upload.single("categoryImg"),
    // // this middleware for parse the text data as json, because we validation want a json data
    // (req: Request, res: Response, next: NextFunction) => {
    //     if (req.body.data) {
    //         req.body = JSON.parse(req.body.data);
    //     }
    //     next();
    // },
    requestValidator(categoryValidation.updateCategoryValidationSchema),
    CategoryController.updateACategory
);

router.delete(
    "/:categoryId",
    CategoryController.deleteACategory

);


export const CategoryRoutes = router;