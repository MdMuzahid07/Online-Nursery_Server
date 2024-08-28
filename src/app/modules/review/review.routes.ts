import requestValidator from "../../middlewares/requestValidator";
import { ReviewController } from "./review.controller";
import { reviewValidation } from "./review.validation";
import express from "express";

const router = express.Router();

router.post(
    "/add-review",
    requestValidator(reviewValidation.reviewValidationSchema),
    ReviewController.createReview
);

router.get(
    "/",
    ReviewController.getAllReview
);

router.get(
    "/:reviewId",
    ReviewController.getASingleReview
);

router.patch(
    "/:reviewId",
    ReviewController.updateAReview

);

router.delete(
    "/:reviewId",
    ReviewController.deleteAReview

);


export const ReviewRoutes = router;