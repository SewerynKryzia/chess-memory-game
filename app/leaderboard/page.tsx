import { getTopScores } from "@/actions/scoreActions";
import { cn } from "@/lib/utils";

export default async function Leaderboard() {
  const topScores = await getTopScores(100);
  console.log(topScores);
  return (
    <main className="min-h-svh bg-slate-900">
      <div className="flex items-center justify-center py-12 text-zinc-50">
        <table className="w-full rounded bg-slate-600 text-center text-sm sm:text-xl md:w-2/3 lg:w-1/2">
          <caption className="py-4 text-2xl font-semibold sm:text-3xl">
            Leaderboard
          </caption>
          <thead>
            <tr className="h-12">
              <th>Rank</th>
              <th>Nickname</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(topScores) &&
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
              })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
