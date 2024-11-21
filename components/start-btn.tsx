export default function StartBtn({ handleStart }: { handleStart: () => void }) {
  return (
    <button
      onClick={handleStart}
      className="m-4 rounded bg-slate-600 px-4 py-2 text-slate-50"
    >
      Start
    </button>
  );
}
