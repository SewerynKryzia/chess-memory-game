import Piece from "./piece";

type AnswerProps = {
  index: number;
  symbol: string;
  handleAnswer: (pickedAnswer: number) => void;
};

export default function Answer({ index, symbol, handleAnswer }: AnswerProps) {
  return (
    <button
      onClick={() => handleAnswer(index)}
      className="m-1 block size-16 rounded bg-amber-400"
    >
      <Piece symbol={symbol} />
    </button>
  );
}
