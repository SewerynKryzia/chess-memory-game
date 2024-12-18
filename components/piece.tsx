import {
  FaChessBishop,
  FaChessKnight,
  FaChessRook,
  FaChessQueen,
  FaChessKing,
  FaChessPawn,
  FaQuestion,
} from "react-icons/fa6";

export default function Piece({ symbol }: { symbol: string }) {
  let icon = null;

  switch (symbol) {
    case "K":
      icon = <FaChessKing className="text-white" />;
      break;
    case "Q":
      icon = <FaChessQueen className="text-white" />;
      break;
    case "R":
      icon = <FaChessRook className="text-white" />;
      break;
    case "B":
      icon = <FaChessBishop className="text-white" />;
      break;
    case "N":
      icon = <FaChessKnight className="text-white" />;
      break;
    case "P":
      icon = <FaChessPawn className="text-white" />;
      break;
    case "k":
      icon = <FaChessKing className="text-black" />;
      break;
    case "q":
      icon = <FaChessQueen className="text-black" />;
      break;
    case "r":
      icon = <FaChessRook className="text-black" />;
      break;
    case "b":
      icon = <FaChessBishop className="text-black" />;
      break;
    case "n":
      icon = <FaChessKnight className="text-black" />;
      break;
    case "p":
      icon = <FaChessPawn className="text-black" />;
      break;
    case "?":
      icon = <FaQuestion className="text-green-900" />;
      break;
    default:
      icon = null;
  }

  return (
    <span className="inline-block font-mono text-2xl min-[320px]:text-3xl min-[480px]:text-4xl sm:text-5xl">
      {icon}
    </span>
  );
}
