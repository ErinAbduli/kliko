import express from "express";
import {
	getAllProducts,
	getProductById,
	addProduct,
	updateProduct,
} from "../controllers/productController.js";
import authenticate from "../auth/authenticate.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", authenticate, addProduct);
router.get("/:id", authenticate, getProductById);
router.put("/:id", authenticate, updateProduct);

export default router;
