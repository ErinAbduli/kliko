import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./routes/users.js";

dotenv.config();

const app = express();

const corsOption = {
	origin: true,
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

//DB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Database connected");
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

//middleware
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/users", users);

app.listen(3000, () => {
	connectDB();
	console.log("Server is running on port 3000");
});
