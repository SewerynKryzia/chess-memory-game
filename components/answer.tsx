import Piece from "./piece";

type AnswerProps = {
  symbol: string;
  handleAnswer: (pickedAnswer: string) => void;
};

export default function Answer({ symbol, handleAnswer }: AnswerProps) {
  return (
    <button
      onClick={() => handleAnswer(symbol)}
      className="m-1 block size-16 rounded bg-amber-400"
    >
      <Piece symbol={symbol} />
    </button>
  );
}
