"use server";

import dbConnect from "@/db/db-connect";
import Score from "@/models/Score";

export async function getTopScores(number: number) {
  try {
    await dbConnect();
    const data = await Score.find().sort({ score: -1 }).limit(number);
    return JSON.parse(JSON.stringify(data));
  } catch {
    return { errMsg: "Error, the leaderboard is not available." };
  }
}

export async function postScore(nickname: string, score: number) {
  try {
    await dbConnect();
    const newScore = new Score({ nickname, score });
    await newScore.save();
    return true;
  } catch {
    return { errMsg: "Error, your score is not saved, try again." };
  }
}

export async function getScoreRank(score: number) {
  try {
    await dbConnect();
    const data = await Score.find({ score: { $gte: score } }).countDocuments();
    return JSON.parse(JSON.stringify(data));
  } catch {
    return { errMsg: "Error, the rank is not available." };
  }
}
