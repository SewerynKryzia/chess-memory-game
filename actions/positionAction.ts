"use server";

import dbConnect from "@/db/db-connect";
import Position from "@/models/Position";

export async function getPositions() {
  try {
    await dbConnect();
    const data = await Position.find();
    return data;
  } catch (error) {
    return { errMsg: "error", error };
  }
}
