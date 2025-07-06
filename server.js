import express from "express";
import { router } from "./routes/post.routes.js";
import { connectDB } from "./config/db.js";

const PORT = 8000;

// connect to DB
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", router);

// lauch the server
app.listen(PORT, () => console.log("Server running on part : ", PORT));
