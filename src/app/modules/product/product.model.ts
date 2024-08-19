import mongoose from "mongoose";
import { ProductSchema } from "./product.schema";


const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;