import Job from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

const createJob = async (req, res) => {
	const { position, company } = req.body;

	console.log(`req body`, req.body);
	if (!position || !company) {
		throw new BadRequestError("Please provide all values");
	}
	req.body.createdBy = req.user.userId;
	const job = await Job.create(req.body);
	res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
	res.send("getAllJobs");
};

const updateJob = async (req, res) => {
	res.send("updateJob");
};

const deleteJob = async (req, res) => {
	res.send("deleteJob");
};

const showStats = async (req, res) => {
	res.send("showStats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
