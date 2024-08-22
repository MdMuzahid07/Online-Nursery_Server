/* eslint-disable @typescript-eslint/no-explicit-any */
import { saveImageToCloudinary } from "../../utils/saveImageToCloudinary";
import { TProduct } from "./product.interface";
import ProductModel from "./product.model";





const addProductIntoDB = async (file: any, payload: TProduct) => {

    // create an product object
    const product: Partial<TProduct> = { ...payload };

    // get all products available in DB
    const products = await ProductModel.find();

    // checking is exists
    const isExists = products?.find((product) => product.title === payload?.title && product?.category === payload?.category);

    if (isExists) {
        throw new Error("this product already added");
    }

    if (file && payload) {
        const imgName = `${product.title}${product.category}`;
        const path = file?.path;
        const productImgUrl = await saveImageToCloudinary(imgName, path);

        // adding the image url link into the product object;
        product.imageUrl = productImgUrl?.secure_url;
    }

    const result = await ProductModel.create(product);
    return result;
};







const getProductsFromDB = async (query: Record<string, unknown>) => {

    //! searching ======> starts here <=======
    // search will operate in title, or category,
    // and to make it partial searchable, using $regex here
    // and for DRY code , using map() here, instead of two time of $regex operation
    // { "title": { $reges: searchTerm, $options: "i" } }

    let searchTerm = " ";
    if (query?.searchTerm) {
        searchTerm = query?.searchTerm as string;
    };
    // product searchable fields
    const productSearchableFields = ["title", "category"];

    const searchQuery = ProductModel.find(
        {
            $or: productSearchableFields.map((field) => (
                { [field]: { $regex: searchTerm, $options: "i" } }
            ))
        }
    );

    //! searching ======> end here <=======




    //! filtering ======> starts here <=======

    // exclude fields from query those we don't want for filtering
    //  main query includes with searchTerm, which for partial match search only
    //  when we trying to filter using main query its include searchTerm as an exact match
    //  thats why, making an copy of main query, and excluding those fields which not for exact match
    //  and using the copy version of query for filtering

    const queryObj = { ...query };

    const excludeFieldsForFiltering = ["searchTerm"];
    excludeFieldsForFiltering.forEach((el) => delete queryObj[el]);

    //! filtering ======> end here <=======


    const result = await searchQuery.find(queryObj);

    return result;
};







const getAProductFromDB = async (id: string) => {
    const result = await ProductModel.findById({ _id: id });
    return result;
};







const updateAProductFromDB = async (id: string, payload: Partial<TProduct>) => {
    const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidation: true
    });
    return result;
};






const deleteAProductFromDB = async (id: string) => {
    const result = await ProductModel.findOneAndDelete({ _id: id });
    return result;
};








export const ProductService = {
    getProductsFromDB,
    getAProductFromDB,
    addProductIntoDB,
    updateAProductFromDB,
    deleteAProductFromDB
};