import Game from "@/components/game";
// import { getRandomPositions } from "@/actions/positionAction";

export default async function Home() {
  // const positions = await getRandomPositions();
  // console.log(positions);
  return (
    <main className="min-h-svh bg-slate-900">
      <Game />
    </main>
  );
}
