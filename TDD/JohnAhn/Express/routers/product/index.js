import { Router } from "express";
import { getProduct } from "./product.controller.js";
const productRouter = Router();

productRouter.get("/", getProduct);

export default productRouter;
