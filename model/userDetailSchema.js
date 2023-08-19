import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
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
      type: Date,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userDetailSchema = mongoose.model("userDetail", schema);

export default userDetailSchema;
