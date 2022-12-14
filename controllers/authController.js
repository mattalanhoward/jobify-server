import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

//Don't need try / catch because we are using express-async-errors to catch errors
const register = async (req, res, next) => {
	const user = await User.create(req.body);
	res.status(StatusCode.OK).json({ user });
};

const login = async (req, res) => {
	res.send("login user");
};

const updateUser = async (req, res) => {
	res.send("updateUser");
};

export { register, login, updateUser };
