import Life from "./life";

export default function Lifes({ lifes }: { lifes: number }) {
  console.log(lifes);
  return (
    <div className="flex flex-wrap gap-2">
      {[...Array(lifes)].map((_, index) => {
        return <Life key={index} />;
      })}
    </div>
  );
}
