import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, require: true },
    description: { type: String, require: true },
    duration: { type: Number, require: true, min: 0 },
    date: { type: Date, require: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
