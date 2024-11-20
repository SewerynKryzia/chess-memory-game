import { PIECES } from "@/lib/constants";
import { QUESTIONS_NUMBER } from "./settings";

export function changeFenToArray(fenPosition: string) {
  const arrayPosition = [];
  const piecesInfo = [];
  for (let i = 0; i < fenPosition.length; i++) {
    if (Number.isInteger(+fenPosition[i])) {
      for (let j = 0; j < +fenPosition[i]; j++) {
        arrayPosition.push("");
      }
    } else if (Object.keys(PIECES).includes(fenPosition[i])) {
      arrayPosition.push(fenPosition[i]);
      piecesInfo.push({
        position: arrayPosition.length - 1,
        type: fenPosition[i],
      });
    } else if (fenPosition[i] === "?") {
      arrayPosition.push(fenPosition[i]);
    }
  }
  return { arrayPosition, piecesInfo };
}

export function drawQuestion(piecesInfo: { position: number; type: string }[]) {
  // question focus on squares where are chess pieces, but additionally there are added random empty squares and their number base on number of chess pieces
  // there are max 32 chess pieces on board, so there are always empty squares remaining
  const emptySquaresToAdd = Math.floor(piecesInfo.length / 3) + 1;
  for (let i = 0; i <= emptySquaresToAdd; i++) {
    function randomPosition() {
      const randomNumber = Math.floor(Math.random() * 64);
      const index = piecesInfo.findIndex(
        (piece) => piece.position === randomNumber,
      );
      if (index === -1) {
        piecesInfo.push({ position: randomNumber, type: "" });
      } else {
        randomPosition();
      }
    }
    randomPosition();
  }
  // draw 3 random positions
  const shuffledArray = piecesInfo.sort(() => 0.5 - Math.random());
  const questions = shuffledArray.slice(0, QUESTIONS_NUMBER);

  // draw 3 incorrect answers for each question

  return questions;
}
