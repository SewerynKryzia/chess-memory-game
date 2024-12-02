import Link from "next/link";
import LeaderboardForm from "./leaderboard-form";
import { getScoreRank } from "@/actions/scoreActions";
import { LEADERBOARD_POSITIONS } from "@/lib/settings";
import { useEffect, useState } from "react";

export default function LeaderboardInfo({ score }: { score: number }) {
  const [rank, setRank] = useState<number | null>(null);
  useEffect(() => {
    const fetchRank = async () => {
      const data = await getScoreRank(score);
      if (typeof data === "number") {
        setRank(data + 1);
      }
    };
    fetchRank().catch(console.error);
  }, [rank, score]);

  return (
    <div className="my-4 flex flex-col items-center justify-center gap-y-2">
      <p className="inline-block text-center text-2xl text-slate-50">
        Your score is <span className="font-semibold">{score}</span>
      </p>
      {typeof rank === "number" &&
      rank <= LEADERBOARD_POSITIONS &&
      score > 0 ? (
        <>
          <p className="mx-4 my-1 inline-block text-center">
            Congratulation you rank{" "}
            <span className="font-semibold">{rank}</span>
          </p>
          <p className="mx-4 my-1 inline-block text-center">
            Add your nickname to join the leaderboard
          </p>
          <LeaderboardForm score={score} />
          <span className="mt-2">-OR-</span>
        </>
      ) : (
        <p className="mx-4 inline-block text-center">
          Unfortunately your score is too low to get you on the{" "}
          <Link className="text-sky-400 hover:underline" href="/leaderboard">
            leaderboard
          </Link>
          .
        </p>
      )}
    </div>
  );
}
