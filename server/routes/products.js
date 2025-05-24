import express from "express";
import {
	getAllProducts,
	getProductById,
	addProduct,
	updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);

export default router;
