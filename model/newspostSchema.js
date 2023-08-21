import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "authUser",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postimg: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const newspost = mongoose.model("newspost", Schema);

export default newspost;
