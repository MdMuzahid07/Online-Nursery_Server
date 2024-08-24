import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { OrderController } from "./order.controller";
import { OrderValidation } from "./order.validation";


const router = express.Router();

router.post(
    "/add-order",
    requestValidator(OrderValidation.OrderValidationSchema),
    OrderController.createOrder
);

router.get(
    "/",
    OrderController.getAllOrder
);

router.get(
    "/:orderId",
    OrderController.getASingleOrder
);

router.patch(
    "/:orderId",
    OrderController.updateAOrder

);

router.delete(
    "/:orderId",
    OrderController.deleteAOrder

);


export const OrderRoutes = router;