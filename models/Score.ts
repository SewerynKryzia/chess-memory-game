import { Document, Schema, model, models } from "mongoose";

export interface IScore extends Document {
  nickname: string;
  score: number;
}

const scoreSchema: Schema = new Schema(
  {
    nickname: {
      type: String,
      trim: true,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Score = models.score || model<IScore>("score", scoreSchema);

export default Score;
