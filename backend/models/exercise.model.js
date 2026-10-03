import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
