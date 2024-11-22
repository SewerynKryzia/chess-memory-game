import { cn } from "@/lib/utils";
import Piece from "@/components/piece";
import Message from "./message";
const FILES = "abcdefgh";

type ChessboardProps = {
  arrayPosition: string[];
  currentQuestion: null | { position: number; type: string; answers: string[] };
  isOver: boolean;
  ready: boolean;
  start: boolean;
  handleStart: () => void;
};

export default function Chessboard({
  arrayPosition,
  currentQuestion,
  isOver,
  ready,
  start,
  handleStart,
}: ChessboardProps) {
  let array = [...arrayPosition];
  if (start && ready) {
    if (currentQuestion) {
      array = [
        ...Array(currentQuestion?.position),
        "?",
        ...Array(63 - currentQuestion?.position),
      ];
    } else {
      array = [...Array(64)];
    }
  } else if (!start) {
    array = [...Array(64)];
  }
  return (
    <div className="relative flex w-full max-w-[600px] flex-wrap items-center justify-center">
      {array.map((symbol, index) => {
        return (
          <div
            key={index}
            className={cn(
              "relative flex aspect-square w-[12.5%] items-center justify-center",
              (Math.floor(index / 8) + index) % 2
                ? "bg-amber-600"
                : "bg-amber-400",
              symbol === "?" && "bg-green-500",
            )}
          >
            <Piece symbol={symbol} />
            {index > 55 && (
              <span className="absolute -bottom-0.5 left-0 w-full text-center text-sm text-amber-500">
                {FILES[index - 56]}
              </span>
            )}
            {Number.isInteger(index / 8) && (
              <span className="absolute left-0.5 top-[50%] -translate-y-1/2 text-sm text-amber-500">
                {(64 - index) / 8}
              </span>
            )}
          </div>
        );
      })}
      <Message isOver={isOver} start={start} handleStart={handleStart} />
    </div>
  );
}
