import { Router } from "express";
import productRouter from "./product/index.js";

const router = Router();

router.use("/api/product", productRouter);

export default router;
