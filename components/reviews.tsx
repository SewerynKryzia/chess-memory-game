import { TReview } from "@/lib/types";
import { cn } from "@/lib/utils";

type ReviewProps = {
  reviews: TReview[];
  start: boolean;
  handleShowReview: (index: number) => void;
};
export default function Reviews({
  reviews,
  start,
  handleShowReview,
}: ReviewProps) {
  return (
    <>
      {reviews.map((review, index) => {
        return (
          <button
            key={index}
            className={cn(
              "block h-8 w-8 rounded",
              review.correct ? "bg-green-600" : "bg-rose-600",
            )}
            onClick={() => handleShowReview(index)}
            disabled={start}
          ></button>
        );
      })}
    </>
  );
}
