"use client";

import React, { useEffect, useState } from "react";
import { changeFenToArray, drawQuestion } from "@/lib/functions";
import Chessboard from "@/components/chessboard";
import GameControl from "./game-control";
import { LIFES_NUMBER, QUESTIONS_NUMBER, TIME } from "@/lib/settings";
import { SAMPLE_FEN_POSITIONS_ARRAY } from "@/lib/constants";

type TQuestions =
  | null
  | {
      answers: string[];
      position: number;
      type: string;
    }[];

export default function Game() {
  // states
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

  // effects
  useEffect(() => {
    if (lifes <= 0 || time <= 0) {
      setQuestions(null);
      setLevel(1);
      setCurrentQuestion(0);
      setReady(false);
      setStart(false);
    }
  }, [lifes, time]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === " " && start && !ready) {
        handleReady();
      } else if (start && ready) {
        switch (event.key) {
          case "1":
            handleAnswer(0);
            break;
          case "2":
            handleAnswer(1);
            break;
          case "3":
            handleAnswer(2);
            break;
          case "4":
            handleAnswer(3);
            break;
          default:
          // do nothing
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    if (start) {
      const myInterval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [start, time]);

  // handlers
  const handleStart = () => {
    setTime(TIME);
    setLifes(LIFES_NUMBER);
    setScore(0);
    setStart(true);
  };

  const handleReady = () => {
    const questions = drawQuestion(piecesInfo);
    setQuestions(questions);
    setReady(true);
  };

  const handleAnswer = (pickedAnswer: number) => {
    if (questions) {
      const correct =
        questions[currentQuestion].answers[pickedAnswer] ===
        questions[currentQuestion].type;
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

  // render
  return (
    <div className="m-auto flex flex-wrap items-stretch justify-center py-16 md:max-w-[900px]">
      <div className="flex w-full items-center justify-center md:max-w-[600px]">
        <Chessboard
          arrayPosition={arrayPosition}
          currentQuestion={questions && questions[currentQuestion]}
          ready={ready}
          start={start}
          isOver={lifes <= 0 || time <= 0}
          handleStart={handleStart}
        />
      </div>

      <div className="flex w-full max-w-[600px] justify-center md:max-w-[300px]">
        <GameControl
          lifes={lifes}
          ready={ready}
          score={score}
          start={start}
          time={time}
          currentQuestion={questions && questions[currentQuestion]}
          handleAnswer={handleAnswer}
          handleReady={handleReady}
        />
      </div>
    </div>
  );
}
