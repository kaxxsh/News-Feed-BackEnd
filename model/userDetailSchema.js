import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "authUser",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10,
    },
    address: {
      type: String,
      required: true,
      maxlength: 100,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    state: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    zip: {
      type: String,
      required: true,
      trim: true,
      maxlength: 6,
    },
    country: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    dob: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userDetail = mongoose.model("userDetail", schema);

export default userDetail;
