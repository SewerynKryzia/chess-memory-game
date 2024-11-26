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
  time: number;
  currentQuestion: null | { position: number; type: string; answers: string[] };
  handleAnswer: (pickedAnswer: number) => void;
  handleReady: () => void;
};
export default function GameControl({
  lifes,
  ready,
  score,
  start,
  time,
  currentQuestion,
  handleAnswer,
  handleReady,
}: GameControlProps) {
  return (
    <div className="flex h-72 min-h-full w-full flex-col items-center justify-stretch gap-4 bg-slate-950">
      <Timer time={time} />
      <Lifes lifes={lifes} />
      <Score score={score} />
      {currentQuestion && ready && (
        <Answers
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
        />
      )}
      {!ready && start && <ReadyBtn handleReady={handleReady} />}
    </div>
  );
}
