import { cn } from "@/lib/utils";

type StartBtnProps = {
  children?: React.ReactNode;
  className?: string;
  handleStart: () => void;
};

export default function StartBtn({
  children,
  className,
  handleStart,
}: StartBtnProps) {
  return (
    <button
      onClick={handleStart}
      className={cn(
        "m-4 w-36 rounded bg-green-800 px-4 py-2 text-slate-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
