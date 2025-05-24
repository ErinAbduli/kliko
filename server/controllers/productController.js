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

export const addProduct = async (req, res) => {
	const { name, description, stock, price, category, brand, images } =
		req.body;

	try {
		const newProduct = new Product({
			name,
			description,
			price,
			category,
			brand,
			images,
			stock,
		});

		const product = await newProduct.save();

		res.status(201).json(product, {
			message: "Product added successfully",
		});
	} catch (error) {
		res.status(500).json({ message: "Server error" + error.message });
	}
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const { name, description, stock, price, category, brand, images } =
		req.body;

	try {
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			{
				name,
				description,
				stock,
				price,
				category,
				brand,
				images,
			},
			{ new: true }
		);

		res.status(200).json({
			message: "Product updated successfully",
			product: updatedProduct,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Server error" + error.message });
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		await Product.findByIdAndDelete(id);
		res.status(200).json({ message: "Product deleted successfully" });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Server error" + error.message });
	}
};
