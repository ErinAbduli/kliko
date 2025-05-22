import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import generateToken from "../auth/generateToken.js";

export const registerUser = async (req, res) => {
	const { name, email, password, phone } = req.body;

	if (!name || !email || !password || !phone) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const userExists = await User.findOne({ email });

	if (userExists) {
		return res.status(400).json({ message: "User already exists" });
	}

	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({
			name,
			email,
			password: hashedPassword,
			phone,
		});
		await user.save();
		return res
			.status(201)
			.json({ message: "User registered successfully" });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Server error" + error.message });
	}
};

export const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		if (!email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const user = await User.findOne({ email });
		const isMatch = await bcrypt.compare(password, user.password);

		if (!user || !isMatch) {
			return res
				.status(400)
				.json({ message: "Incorrect email or password" });
		}

		const token = generateToken(user);

		return res.status(200).json({
			message: "Login successful",
			_id: user._id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			token,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Server error" + error.message });
	}
};
