import Answers from "./answers";
import Lifes from "./lifes";
import Score from "./score";
import Timer from "./timer";

type GameControlProps = {
  lifes: number;
  score: number;
  time: number;
  currentQuestion: { position: number; type: string; answers: string[] };
  handleAnswer: (pickedAnswer: string) => void;
};
export default function GameControl({
  lifes,
  score,
  time,
  currentQuestion,
  handleAnswer,
}: GameControlProps) {
  return (
    <div>
      <Timer time={time} />
      <Lifes lifes={lifes} />
      <Score score={score} />
      <Answers currentQuestion={currentQuestion} handleAnswer={handleAnswer} />
    </div>
  );
}
