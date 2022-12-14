import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import validator from "validator";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide name"],
		minlength: 3,
		maxlength: 20,
		trim: 20,
	},
	email: {
		type: String,
		required: [true, "Please provide email"],
		validate: {
			validator: validator.isEmail,
			message: "Please provide a valid email",
		},
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	lastName: {
		type: String,
		minlength: 3,
		maxlength: 20,
		trim: true,
		default: "lastName",
	},
	location: { type: String, trim: true, maxlength: 20, default: "Denver, CO" },
});

UserSchema.pre("save", async function () {
	console.log(this.password);
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", UserSchema);
