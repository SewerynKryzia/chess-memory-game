// import GameInfo from "./game-info";
import { cn } from "@/lib/utils";
import GameInfo from "./game-info";
import LeaderboardInfo from "./leaderboard-info";
import StartBtn from "./start-btn";

type MessageProps = {
  isLoading: boolean;
  isOver: boolean;
  review: boolean;
  score: number;
  handleStart: () => void;
};

export default function Message({
  isLoading,
  isOver,
  score,
  review,
  handleStart,
}: MessageProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 z-50 flex min-h-[80%] min-w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md bg-slate-950/90 text-slate-50",
        review && "invisible",
      )}
    >
      {isOver && (
        <>
          <h2 className="my-4 text-2xl font-semibold tracking-wider">
            GAME OVER
          </h2>
          <LeaderboardInfo score={score} />
        </>
      )}
      {!isOver && <GameInfo />}
      <StartBtn handleStart={handleStart}>
        {isLoading ? "Loading..." : isOver ? "New game" : "Start"}
      </StartBtn>
    </div>
  );
}
