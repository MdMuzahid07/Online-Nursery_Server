import express from "express";
import { ProductRoutes } from "../modules/product/product.routes";
import { CategoryRoutes } from "../modules/category/category.routes";

const router = express.Router();


const moduleRoutes = [
    {
        path: "/products",
        route: ProductRoutes
    },
    {
        path: "/categories",
        route: CategoryRoutes
    },
];


moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;