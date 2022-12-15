import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
notFoundMiddleware;
errorHandlerMiddleware;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("welcome");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`server is listening on Port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
