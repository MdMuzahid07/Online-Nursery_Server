/* eslint-disable @typescript-eslint/no-explicit-any */
import { saveImageToCloudinary } from "../../utils/saveImageToCloudinary";
import CategoryModel from "../category/category.model";
import { TProduct } from "./product.interface";
import ProductModel from "./product.model";





const addProductIntoDB = async (file: any, payload: TProduct) => {

    // create an product object
    const product: Partial<TProduct> = { ...payload };

    // get all products available in DB
    const products = await ProductModel.find();

    // checking is exists
    const isExists = products?.find((product) => product.title === payload?.title);

    if (isExists) {
        throw new Error("this product already added");
    }

    if (file && payload) {
        const path = file?.path;

        const baseName = file.originalname.replace(/\s/g, '-');
        const uniqueSuffix = Date.now();
        const imgName = `${baseName}-${uniqueSuffix}-image`;

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

    // const productSearchableFields = ["title", "category"];

    const searchQuery = ProductModel.find(
        {
            $or: [
                { title: { $regex: searchTerm, $options: "i" } },
                { category: await CategoryModel.find({ name: { $regex: searchTerm, $options: "i" } }) }
            ]
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

    const excludeFieldsForFiltering = ["searchTerm", "sort", "limit", "page"];
    excludeFieldsForFiltering.forEach((el) => delete queryObj[el]);


    const filterQuery = searchQuery.find(queryObj);

    //! filtering ======> end here <=======



    //! sorting ======> start here <=======

    let sort = "-createdAt";

    if (query?.sort) {
        sort = query?.sort as string;
    }

    const sortingQuery = filterQuery.find().sort(sort);

    //! sorting ======> end here <=======


    //! limit, pagination ======> start here <=======

    let page = 1;
    let limit = 30;
    let skip = 0;

    if (query?.limit) {
        limit = Number(query?.limit);
    };

    if (query?.page) {
        page = Number(query?.page);
        skip = (page - 1) * limit;
    }

    const paginateQuery = sortingQuery.skip(skip);


    // last phase for resolving after all method chaining
    const result = await paginateQuery.limit(limit).populate("category").populate(["rating"]);

    //! limit, pagination ======> end here <=======

    return result;
};







const getAProductFromDB = async (id: string) => {
    const result = await ProductModel.findById({ _id: id }).populate("rating");
    return result;
};






const updateAProductFromDB = async (id: string, file: any, payload: Partial<TProduct>) => {

    // create a product object
    const product: Partial<TProduct> = { ...payload };

    if (file && file.path) {
        const path = file.path;

        const baseName = file.originalname.replace(/\s/g, '-');
        const uniqueSuffix = Date.now();
        const imgName = `${baseName}-${uniqueSuffix}-image`;

        const productImgUrl = await saveImageToCloudinary(imgName, path);
        // add the image URL link into the product object
        product.imageUrl = productImgUrl?.secure_url;
    }

    const result = await ProductModel.findOneAndUpdate({ _id: id }, product, {
        new: true,
        runValidators: true,
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