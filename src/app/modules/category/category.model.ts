import mongoose from "mongoose";
import { CategorySchema } from "./category.schema";


const CategoryModel = mongoose.model("category", CategorySchema);


export default CategoryModel;