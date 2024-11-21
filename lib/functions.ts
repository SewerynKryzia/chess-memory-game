import { PIECES } from "@/lib/constants";
import { ANSWERS_NUMBER, QUESTIONS_NUMBER } from "@/lib/settings";

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
  // * add empty squares
  // question focus on squares where are chess pieces, but additionally there are added random empty squares and their number base on number of chess pieces
  const emptySquaresToAdd = Math.floor(piecesInfo.length / 4) + 1; // there are max 32 chess pieces on board, so there are always empty squares available
  const piecesAndEmpty = [...piecesInfo];
  for (let i = 0; i <= emptySquaresToAdd; i++) {
    function randomPosition() {
      const randomNumber = Math.floor(Math.random() * 64);
      const index = piecesAndEmpty.findIndex(
        (piece) => piece.position === randomNumber,
      );
      if (index === -1) {
        piecesAndEmpty.push({ position: randomNumber, type: "" });
      } else {
        randomPosition();
      }
    }
    randomPosition();
  }
  // * draw 3 random positions
  const shuffledArray = piecesAndEmpty.sort(() => 0.5 - Math.random());
  const questions = shuffledArray.slice(0, QUESTIONS_NUMBER);

  // TODO - pawns cannot be on positions 0-7 and 56-63
  // * draw 3 incorrect answers for each question
  const allAnswers = [
    "K",
    "Q",
    "R",
    "B",
    "N",
    "P",
    "k",
    "q",
    "r",
    "b",
    "n",
    "p",
    "",
    "",
    "",
  ];
  // add wieght to answers - more likely answers include pieces that were on board
  piecesInfo.forEach((piece) => allAnswers.push(piece.type, piece.type));
  // add answers to the questions
  const questionsWithAnswers = questions.map((question) => {
    const updatedQuestion = { ...question, answers: [question.type] };
    for (let i = 1; i < ANSWERS_NUMBER; i++) {
      function randomAnswer() {
        const randomIndex = Math.floor(Math.random() * allAnswers.length);
        const exist = updatedQuestion.answers.includes(allAnswers[randomIndex]);
        if (!exist) {
          updatedQuestion.answers.push(allAnswers[randomIndex]);
        } else {
          randomAnswer();
        }
      }
      randomAnswer();
    }
    // randomize answers
    updatedQuestion.answers.sort(() => 0.5 - Math.random());
    return updatedQuestion;
  });
  return questionsWithAnswers;
}
