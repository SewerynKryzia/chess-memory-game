export default function Score({ score }: { score: number }) {
  return (
    <div className="flex h-[15%] min-h-16 items-center text-4xl text-slate-50 sm:text-5xl">
      {score}
    </div>
  );
}
