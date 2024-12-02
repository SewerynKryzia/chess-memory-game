import { TIME } from "@/lib/settings";
import { useEffect, useState } from "react";

export default function Timer({
  start,
  handleTimeOver,
}: {
  start: boolean;
  handleTimeOver: () => void;
}) {
  const [time, setTime] = useState(TIME);

  useEffect(() => {
    if (start) {
      const myInterval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [start, time]);

  useEffect(() => {
    if (start) {
      setTime(TIME);
    }
  }, [start]);

  useEffect(() => {
    if (time <= 0) {
      handleTimeOver();
    }
  }, [time, handleTimeOver]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="flex h-[20%] min-h-16 items-center text-4xl text-slate-50 sm:text-5xl md:min-h-24">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
