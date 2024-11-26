import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { PIECES } from "@/lib/constants";
import { positionArray } from "./fen-positions";
import mongoose, { Schema } from "mongoose";

// conect db
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connection Success");
} catch (error) {
  console.log("Connection Failed", error);
}

async function main() {
  const positions = [];
  console.log(`Start seeding ...`);
  // position model
  const positionSchema = new Schema(
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
    mongoose.models.position || mongoose.model("position", positionSchema);

  // fen basic validation and pieces calculation
  positionArray.forEach(async (fen) => {
    const fenArray = fen.split("/");
    let emptySquares = 0;
    let piecesNumber = 0;
    if (fenArray.length === 8) {
      fenArray.forEach((fenFragment) => {
        for (let i = 0; i < fenFragment.length; i++) {
          if (Number.isInteger(+fenFragment[i])) {
            emptySquares += +fenFragment[i];
          } else if (Object.keys(PIECES).includes(fenFragment[i])) {
            piecesNumber += 1;
          }
        }
      });
    }

    if (emptySquares + piecesNumber === 64 && piecesNumber >= 4) {
      positions.push({
        fen,
        pieces: piecesNumber,
      });
    }
  });

  // post positions
  await Position.insertMany(positions);
  console.log(`End seeding ...`);
}

main()
  .then(async () => {
    mongoose.connection.close();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    mongoose.connection.close();
    process.exit(1);
  });
