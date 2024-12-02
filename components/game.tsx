"use client";

import React, { useEffect, useState } from "react";
import { changeFenToArray, drawQuestion } from "@/lib/functions";
import Chessboard from "@/components/chessboard";
import GameControl from "./game-control";
import { LIFES_NUMBER, QUESTIONS_NUMBER } from "@/lib/settings";
import { getRandomPositions } from "@/actions/positionAction";
import Message from "./message";
import Reviews from "./reviews";
import { TPositions, TQuestion, TReview } from "@/lib/types";
import { Button } from "./ui/button";

export default function Game() {
  // states
  const [level, setLevel] = useState(1);
  const [positions, setPositions] = useState<TPositions>(null);
  const [lifes, setLifes] = useState(LIFES_NUMBER);
  const [timeOver, setTimeOver] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [ready, setReady] = useState(false);
  const [review, setReview] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<null | TQuestion[]>(null);
  const [arrayPosition, setArrayPosition] = useState<string[]>([...Array(64)]);
  const [piecesInfo, setPiecesInfo] = useState<
    { position: number; type: string }[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [reviewCorrect, setReviewCorrect] = useState(false);
  const [reviewSelectedAnswer, setReviewSelectedAnswer] = useState("");

  // effects
  useEffect(() => {
    if (positions) {
      if (level < positions.length) {
        const { arrayPosition, piecesInfo } = changeFenToArray(
          positions[level - 1][0].fen,
        );
        setArrayPosition(arrayPosition);
        setPiecesInfo(piecesInfo);
      } else {
        const { arrayPosition, piecesInfo } = changeFenToArray(
          positions[positions.length - 1][level - positions.length].fen,
        );
        setArrayPosition(arrayPosition);
        setPiecesInfo(piecesInfo);
      }
    }
  }, [positions, level]);

  useEffect(() => {
    if (lifes <= 0 || timeOver) {
      setQuestions(null);
      setLevel(1);
      setCurrentQuestion(0);
      setReady(false);
      setStart(false);
    }
  }, [lifes, timeOver]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "r" && start && !ready) {
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

  // handlers
  const handleStart = async () => {
    setIsLoading(true);
    const newPositions = await getRandomPositions();
    setPositions(newPositions);
    setTimeOver(false);
    setLifes(LIFES_NUMBER);
    setScore(0);
    setStart(true);
    setReviews([]);
    setIsLoading(false);
  };

  const handleReady = () => {
    if (piecesInfo) {
      const questions = drawQuestion(piecesInfo);
      setQuestions(questions);
      setReady(true);
    }
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
      const newReview = {
        arrayPosition,
        ...questions[currentQuestion],
        correct,
        pickedAnswer: questions[currentQuestion].answers[pickedAnswer],
      };
      setReviews((prev) => [...prev, newReview]);
      if (currentQuestion < QUESTIONS_NUMBER - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setCurrentQuestion(0);
        setReady(false);
        setLevel((prev) => prev + 1);
      }
    }
  };

  const handleTimeOver = () => {
    setTimeOver(true);
  };

  const handleShowReview = (index: number) => {
    const { arrayPosition, answers, correct, position, type, pickedAnswer } =
      reviews[index];
    setReviewCorrect(correct);
    setArrayPosition(arrayPosition);
    setQuestions([{ answers, position, type }]);
    setReviewSelectedAnswer(pickedAnswer);
    setCurrentQuestion(0);
    if (!review) {
      setReview(true);
    }
  };

  // render
  return (
    <div className="m-auto flex flex-wrap items-stretch justify-center py-16 md:max-w-[900px]">
      <div className="relative flex h-full w-full flex-wrap items-center justify-center md:max-h-[600px] md:max-w-[600px]">
        <Chessboard
          arrayPosition={arrayPosition}
          currentQuestion={questions && questions[currentQuestion]}
          ready={ready}
          start={start}
          review={review}
          reviewCorrect={reviewCorrect}
        />
        {!start && !review && (
          <Message
            isLoading={isLoading}
            isOver={lifes <= 0 || timeOver}
            score={score}
            handleStart={handleStart}
          />
        )}
      </div>

      <div className="flex w-full max-w-[600px] justify-center md:max-w-[300px]">
        <GameControl
          lifes={lifes}
          ready={ready}
          score={score}
          start={start}
          review={review}
          currentQuestion={questions && questions[currentQuestion]}
          reviewSelectedAnswer={reviewSelectedAnswer}
          reviewCorrect={reviewCorrect}
          handleAnswer={handleAnswer}
          handleReady={handleReady}
          handleTimeOver={handleTimeOver}
        />
      </div>

      <div className="m-2 flex flex-wrap gap-2">
        <Reviews
          reviews={reviews}
          start={start}
          handleShowReview={handleShowReview}
        />
        {review && (
          <Button className="block" onClick={() => setReview(false)}>
            Exit Review
          </Button>
        )}
      </div>
    </div>
  );
}
