import { cn } from "@/lib/utils";
import Piece from "./piece";

type AnswerProps = {
  index: number;
  symbol: string;
  review: boolean;
  reviewSelectedAnswer: string;
  reviewCorrect: boolean;
  handleAnswer: (pickedAnswer: number) => void;
};

export default function Answer({
  index,
  symbol,
  review,
  reviewSelectedAnswer,
  reviewCorrect,
  handleAnswer,
}: AnswerProps) {
  return (
    <button
      onClick={() => handleAnswer(index)}
      disabled={review}
      className={cn(
        "m-1 block size-16 rounded bg-amber-400",
        reviewSelectedAnswer === symbol &&
          review &&
          (reviewCorrect ? "bg-green-500" : "bg-rose-500"),
      )}
    >
      <Piece symbol={symbol} />
    </button>
  );
}
