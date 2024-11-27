"use server";

import dbConnect from "@/db/db-connect";
import Score from "@/models/Score";

export async function getTopScores(number: number) {
  try {
    await dbConnect();
    const data = await Score.find().sort({ score: -1 }).limit(number);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return { errMsg: "error", error };
  }
}
export async function postScore(nickname: string, score: number) {
  try {
    await dbConnect();
    const newScore = new Score({ nickname, score });
    await newScore.save();
    return true;
  } catch (error) {
    return { errMsg: "error", error };
  }
}
