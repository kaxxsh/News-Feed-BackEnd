import Express from "express";
import dbConnection from "./db/dbConnection.js";
import {} from "dotenv/config.js";
import errorHandler from "./Middleware/error-handler.js";
import cors from "cors";
import authrouter from "./router/authRouter.js";
import UserDetailrouter from "./router/userDetailRouter.js";
import newspostrouter from "./router/newspostRouter.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/user", UserDetailrouter);
app.use("/api/v1/News", newspostrouter);
app.use(errorHandler);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const connection = () => {
  try {
    dbConnection(process.env.MONGO_URL);
    app.listen(3001, (req, res) => {
      console.log("Server is running at port 3001");
    });
  } catch (error) {
    console.log("Error in connecting to DB", error);
  }
};

connection();
