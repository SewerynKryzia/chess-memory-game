// import GameInfo from "./game-info";
import LeaderboardInfo from "./leaderboard-info";
import StartBtn from "./start-btn";

type MessageProps = {
  score: number;
  isLoading: boolean;
  isOver: boolean;
  handleStart: () => void;
};

export default function Message({
  score,
  isLoading,
  isOver,
  handleStart,
}: MessageProps) {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 flex min-h-[80%] min-w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md bg-slate-950/90 text-slate-50">
      {isOver && (
        <>
          <h2 className="my-4 text-2xl font-semibold tracking-wider">
            GAME OVER
          </h2>
          <LeaderboardInfo score={score} />
        </>
      )}
      {/* <GameInfo /> */}
      <StartBtn handleStart={handleStart}>
        {isLoading ? "Loading..." : isOver ? "Try again" : "Start"}
      </StartBtn>
    </div>
  );
}
