import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isEmail.js";
export default mongoose.model(
  "User",
  new Schema({
    id: { type: ObjectId },
    firstname: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 3,
        message: "Username must be at least 3 characters",
      },
    },
    lastname: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Lastname must be at least 3 characters",
      },
    },
    gender: {
      type: Number,
      required: true,
      enum: {
        values: [1, 0],
        message: "please chose gender",
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => isEmail,
        message: "Email is incorrect format",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 7,
        message: "Password must be at least 8 characters",
      },
    },
    birthday: {
      type: String,
      required: true,
    },
  })
);