import { Router } from "express";
import OrderDetailsController from "../controllers/order_details.controller";

const ordersDetailsRoute: Router = Router();

ordersDetailsRoute.get("/order-details", OrderDetailsController.getAllOrders);

ordersDetailsRoute.post("/create-order", OrderDetailsController.createNewOrder);

ordersDetailsRoute.put("/:id", OrderDetailsController.updateOrder);

ordersDetailsRoute.delete("/:id", OrderDetailsController.deleteOrder);

export default ordersDetailsRoute;
