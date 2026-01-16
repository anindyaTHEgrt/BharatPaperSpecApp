import express from "express";
import { productData } from "../controllers/dataControllers.js";

const router = express.Router();

router.get("/products", productData);

export default router;
