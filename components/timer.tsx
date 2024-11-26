export default function Timer({ time }: { time: number }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="flex h-[20%] min-h-16 items-center text-4xl text-slate-50 sm:text-5xl md:min-h-24">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
