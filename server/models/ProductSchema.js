import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	description: {
		type: String,
		required: true,
	},

	images: [
		{
			url: String,
			alt: String,
		},
	],

	price: {
		type: Number,
		required: true,
		min: 0,
	},

	discount: {
		type: Number, // Percentage (e.g. 10 for 10%)
		default: 0,
	},

	stock: {
		type: Number,
		required: true,
		min: 0,
	},

	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
	},

	brand: {
		type: String,
	},

	tags: [String],

	variants: [
		{
			color: String,
			size: String,
			stock: Number,
			images: [String],
			sku: String,
		},
	],

	ratings: {
		average: { type: Number, default: 0 },
		count: { type: Number, default: 0 },
	},

	isFeatured: {
		type: Boolean,
		default: false,
	},

	isActive: {
		type: Boolean,
		default: true,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},

	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

productSchema.pre("save", function (next) {
	this.updatedAt = new Date();
	next();
});

const Product = mongoose.model("Product", productSchema);
export default Product;
