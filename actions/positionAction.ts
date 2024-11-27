"use server";

import dbConnect from "@/db/db-connect";
import Position from "@/models/Position";

export async function getRandomPositions() {
  try {
    await dbConnect();
    const data = [];
    for (let i = 4; i < 28; i++) {
      if (i < 27) {
        data.push(
          await Position.aggregate([
            { $match: { pieces: i } },
            { $sample: { size: 1 } },
          ]),
        );
      } else {
        data.push(
          await Position.find({
            $and: [{ pieces: { $gte: 28 } }, { pieces: { $lte: 30 } }],
          }),
        );
      }
    }

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return { errMsg: "error", error };
  }
}
