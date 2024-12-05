import TopScores from "@/components/top-scores";

export default async function Leaderboard() {
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
            <TopScores />
          </tbody>
        </table>
      </div>
    </main>
  );
}
