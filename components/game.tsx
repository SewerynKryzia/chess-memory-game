"use client";

import React, { useState } from "react";
import { changeFenToArray, drawQuestion } from "@/lib/functions";
import Chessboard from "@/components/chessboard";
import GameControl from "./game-control";
import { LIFES_NUMBER, QUESTIONS_NUMBER, TIME } from "@/lib/settings";
import { SAMPLE_FEN_POSITIONS_ARRAY } from "@/lib/constants";
// const FEN_POSITION = "2k1K3/8/2N5/8/8/8/8/2B5";

type TQuestions =
  | null
  | {
      answers: string[];
      position: number;
      type: string;
    }[];

export default function Game() {
  const [level, setLevel] = useState(1);
  const { arrayPosition, piecesInfo } = changeFenToArray(
    SAMPLE_FEN_POSITIONS_ARRAY[level - 1][0],
  );

  const [lifes, setLifes] = useState(LIFES_NUMBER);
  const [time, setTime] = useState(TIME);
  const [score, setScore] = useState(0);

  const [start, setStart] = useState(false);
  const [ready, setReady] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<TQuestions>(null);

  const handleStart = () => {
    const questions = drawQuestion(piecesInfo);
    setQuestions(questions);
    setStart(true);
  };

  const handleReady = () => {
    setReady(true);
  };

  const handleAnswer = (pickedAnswer: string) => {
    if (questions) {
      const correct = pickedAnswer === questions[currentQuestion].type;
      if (correct) {
        setScore((prev) => prev + 1);
      } else {
        setLifes((prev) => prev - 1);
      }
      if (currentQuestion < QUESTIONS_NUMBER - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setCurrentQuestion(0);
        setReady(false);
        setLevel((prev) => prev + 1);
      }
    }
  };
  console.log("score", score);
  console.log("lifes", lifes);
  console.log("level", level);
  console.log("question", currentQuestion);
  return (
    <div>
      <div className="flex items-center justify-center">
        <Chessboard
          arrayPosition={arrayPosition}
          currentQuestion={questions && questions[currentQuestion]}
          ready={ready}
          start={start}
        />
      </div>
      <div className="flex items-center justify-center">
        <GameControl
          lifes={lifes}
          ready={ready}
          score={score}
          start={start}
          time={time}
          currentQuestion={questions && questions[currentQuestion]}
          handleAnswer={handleAnswer}
          handleReady={handleReady}
          handleStart={handleStart}
        />
      </div>
    </div>
  );
}
