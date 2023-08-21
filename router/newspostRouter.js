import express from "express";
import authVerify from "../Middleware/auth-verify.js";
import verifyUser from "../Middleware/Verify-User.js";
import {
  getallNewsPosts,
  getNewsPost,
  createNewsPost,
  updateNewsPost,
  deleteNewsPost,
} from "../controllers/newspostController.js";

const Router = express.Router();

Router.route("/").get(getallNewsPosts);
Router.route("/:id")
  .get(authVerify, verifyUser("admin"), getNewsPost)
  .post(authVerify, verifyUser("admin"), createNewsPost);
Router.route("/:id/:post")
  .patch(authVerify, verifyUser("admin"), updateNewsPost)
  .delete(authVerify, verifyUser("admin"), deleteNewsPost);

export default Router;
