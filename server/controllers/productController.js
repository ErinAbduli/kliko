import Product from "../models/ProductSchema.js";

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({})
			.populate("category", "name")
			.populate("brand", "name")
			.sort({ createdAt: -1 });

		if (!products || products.length === 0) {
			return res.status(404).json({ message: "No products found" });
		}

		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: "Server error" + error.message });
	}
};

export const getProductById = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id)
			.populate("category", "name")
			.populate("brand", "name");

		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: "Server error" + error.message });
	}
};
