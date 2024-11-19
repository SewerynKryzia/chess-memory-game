import { changeFenToArray } from "@/lib/functions";

import { cn } from "@/lib/utils";
import Piece from "@/components/piece";
const FILES = "abcdefgh";

export default function Chessboard() {
  const FEN_POSITION = "1b1B4/4N3/5p2/4kB1p/4bN1n/6R1/2pQ4/2K5";
  const positionArray = changeFenToArray(FEN_POSITION);
  console.log(positionArray);
  return (
    <div className="grid max-w-[600px] grid-cols-8 grid-rows-8 content-center justify-items-center">
      {positionArray.map((symbol, index) => {
        return (
          <div
            key={index}
            className={cn(
              "relative flex size-20 items-center justify-center",
              (Math.floor(index / 8) + index) % 2
                ? "bg-amber-600"
                : "bg-amber-400",
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
    </div>
  );
}
