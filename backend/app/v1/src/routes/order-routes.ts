import { Router } from "express";
import { orderController } from "../controllers";
const router = Router();
router.get("/orders", orderController.getOrders);
router.get("/orders/:uuid", orderController.getOrder);
router.patch("/orders/:uuid", orderController.updateOrder);
export default router;