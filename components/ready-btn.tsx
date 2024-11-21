export default function ReadyBtn({ handleReady }: { handleReady: () => void }) {
  return (
    <button
      onClick={handleReady}
      className="m-4 rounded bg-slate-600 px-4 py-2 text-slate-50"
    >
      Ready To Answer
    </button>
  );
}
