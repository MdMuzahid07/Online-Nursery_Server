import express from "express";
import { ProductRoutes } from "../modules/product/product.routes";
import { CategoryRoutes } from "../modules/category/category.routes";
import { CartRoutes } from "../modules/cart/cart.routes";
import { OrderRoutes } from "../modules/oder/order.routes";
import { ReviewRoutes } from "../modules/review/review.routes";

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
    {
        path: "/cart",
        route: CartRoutes
    },
    {
        path: "/orders",
        route: OrderRoutes
    },
    {
        path: "/reviews",
        route: ReviewRoutes
    },
];


moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;