import { Router } from "express";
import { createProduct } from "./product.controller.js";
const productRouter = Router();

productRouter.post("/", createProduct);

export default productRouter;
