import Answers from "./answers";
import Lifes from "./lifes";
import ReadyBtn from "./ready-btn";
import Score from "./score";
import Timer from "./timer";

type GameControlProps = {
  lifes: number;
  ready: boolean;
  score: number;
  start: boolean;
  review: boolean;
  reviewSelectedAnswer: string;
  reviewCorrect: boolean;
  currentQuestion: null | { position: number; type: string; answers: string[] };
  handleAnswer: (pickedAnswer: number) => void;
  handleReady: () => void;
  handleTimeOver: () => void;
};
export default function GameControl({
  lifes,
  ready,
  score,
  start,
  review,
  currentQuestion,
  reviewSelectedAnswer,
  reviewCorrect,
  handleAnswer,
  handleReady,
  handleTimeOver,
}: GameControlProps) {
  return (
    <div className="flex h-full min-h-full w-full flex-col items-center justify-stretch gap-4 bg-slate-950">
      <Timer start={start} handleTimeOver={handleTimeOver} />
      <Lifes lifes={lifes} />
      <Score score={score} />
      {currentQuestion && (ready || review) && (
        <Answers
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
          review={review}
          reviewSelectedAnswer={reviewSelectedAnswer}
          reviewCorrect={reviewCorrect}
        />
      )}
      {!ready && start && <ReadyBtn handleReady={handleReady} />}
    </div>
  );
}
