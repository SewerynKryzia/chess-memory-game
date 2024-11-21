"use client";

import React, { useState } from "react";
import { changeFenToArray, drawQuestion } from "@/lib/functions";
import Chessboard from "@/components/chessboard";
import GameControl from "./game-control";
import { LIFES_NUMBER, TIME } from "@/lib/settings";
const FEN_POSITION = "1b6/b1p3N1/rpppP3/rpqp2RP/1QbB1N1N/N1KP1R2/kn3P1R/b2B3N";

export default function Game() {
  const { arrayPosition, piecesInfo } = changeFenToArray(FEN_POSITION);
  // const questions = [
  //   {
  //     position: 8,
  //     type: "b",
  //     answers: ["q", "", "b", "n"],
  //   },
  // ];
  const questions = drawQuestion(piecesInfo); // hydration issue
  const [lifes, setLifes] = useState(LIFES_NUMBER);
  const [time, setTime] = useState(TIME);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameRun, setGameRun] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const handleAnswer = (pickedAnswer: string) => {
    const correct = pickedAnswer === currentQuestion.type;
    console.log(correct);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <Chessboard arrayPosition={arrayPosition} />
      </div>
      <div className="flex items-center justify-center">
        <GameControl
          lifes={lifes}
          score={score}
          time={time}
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
