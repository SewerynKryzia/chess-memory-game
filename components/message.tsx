import StartBtn from "./start-btn";

type MessageProps = {
  start: boolean;
  isOver: boolean;
  handleStart: () => void;
};

export default function Message({ start, isOver, handleStart }: MessageProps) {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
      {!start && (
        <StartBtn handleStart={handleStart}>
          {isOver ? "Try again" : "Start"}
        </StartBtn>
      )}
    </div>
  );
}
