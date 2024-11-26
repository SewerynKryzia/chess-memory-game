import Game from "@/components/game";
import { getPositions } from "@/actions/positionAction";

export default async function Home() {
  const positions = await getPositions();
  console.log(Array.isArray(positions) && positions.length);
  return (
    <main className="min-h-svh bg-slate-900">
      <Game />
    </main>
  );
}
