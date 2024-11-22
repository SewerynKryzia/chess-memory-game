export default function Timer({ time }: { time: number }) {
  return (
    <div className="flex h-[20%] min-h-16 items-center text-4xl text-slate-50 sm:text-5xl md:min-h-24">
      {time}
    </div>
  );
}
