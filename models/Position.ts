import mongoose, { Document, Schema } from "mongoose";

export interface IPosition extends Document {
  fen: string;
  pieces: number;
}

const positionSchema: Schema = new Schema(
  {
    fen: {
      type: String,
      required: true,
    },
    pieces: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Position =
  mongoose.models.position ||
  mongoose.model<IPosition>("position", positionSchema);

export default Position;
