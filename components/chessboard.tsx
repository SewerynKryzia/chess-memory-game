import { changeFenToArray } from "@/lib/functions";

export default function Chessboard() {
  const FEN_POSITION = "1b1B4/4N3/5p2/4kB1p/4bN1n/6R1/2pQ4/2K5";
  const positionArray = changeFenToArray(FEN_POSITION);
  console.log(positionArray);
  return (
    <div className="max-w-[550px] grid grid-cols-8 grid-rows-8 justify-items-center content-center gap-1">
      {positionArray.map((element, index) => {
        return (
          <div
            key={index}
            className="size-16 bg-slate-600 flex items-center justify-center"
          >
            <p className="inline-block text-7xl">{element}</p>
          </div>
        );
      })}
    </div>
  );
}
