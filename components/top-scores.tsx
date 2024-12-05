"use client";

import { getTopScores } from "@/actions/scoreActions";
import { LEADERBOARD_POSITIONS } from "@/lib/settings";
import { TScore } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function TopScores() {
  const [topScores, setTopScores] = useState<TScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const topScores = await getTopScores(LEADERBOARD_POSITIONS);
      if (Array.isArray(topScores)) {
        setTopScores(topScores);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <tr className="h-72 text-center">
          <td colSpan={3} className="w-full">
            Loading...
          </td>
        </tr>
      ) : (
        topScores.map((item, index) => {
          return (
            <tr
              key={item._id}
              className={cn("h-12", index % 2 === 0 && "bg-slate-700")}
            >
              <td>{index + 1}</td>
              <td>{item.nickname}</td>
              <td>{item.score}</td>
            </tr>
          );
        })
      )}
    </>
  );
}
