import express from "express";
import {
  getallNewsPosts,
  getNewsPost,
  createNewsPost,
  updateNewsPost,
  deleteNewsPost,
} from "";

const Router = express.Router();

Router.route("/").get(getallNewsPosts);
Router.route("/:id").get(getNewsPost).post(createNewsPost);
Router.route("/:id/:post").put(updateNewsPost).delete(deleteNewsPost);

export default Router;
