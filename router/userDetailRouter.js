import express from "express";
import authVerify from "../Middleware/auth-verify.js";
import verifyUser from "../Middleware/Verify-User.js";
import {
  getUserDetail,
  postUserDetail,
  patchUserDetail,
  deleteUserDetail,
} from "../Controllers/userDetailController.js";
const Router = express.Router();

Router.route("/:id")
  .get(authVerify, verifyUser("admin"), getUserDetail)
  .post(authVerify, verifyUser("admin"), postUserDetail)
  .patch(authVerify, verifyUser("admin"), patchUserDetail)
  .delete(authVerify, verifyUser("admin"), deleteUserDetail);

export default Router;
