import Life from "./life";

export default function Lifes({ lifes }: { lifes: number }) {
  return (
    <div className="flex h-[10%] min-h-8 flex-wrap items-center gap-2 sm:min-h-12">
      {[...Array(lifes)].map((_, index) => {
        return <Life key={index} />;
      })}
    </div>
  );
}
