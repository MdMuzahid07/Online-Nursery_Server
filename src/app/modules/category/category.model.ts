import mongoose from "mongoose";
import { CategorySchema } from "./category.schema";
import { TCategory } from "./category.interface";


const CategoryModel = mongoose.model<TCategory>("category", CategorySchema);


export default CategoryModel;