import mongoose from "mongoose";
import { TReview } from "./review.interface";
import { ReviewSchema } from "./review.schema";


const ReviewModel = mongoose.model<TReview>("review", ReviewSchema);
export default ReviewModel;