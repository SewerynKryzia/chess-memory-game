import Answer from "./answer";

export default function Answers({
  currentQuestion,
  review,
  reviewSelectedAnswer,
  reviewCorrect,
  handleAnswer,
}: {
  currentQuestion: { position: number; type: string; answers: string[] };
  review: boolean;
  reviewSelectedAnswer: string;
  reviewCorrect: boolean;
  handleAnswer: (pickedAnswer: number) => void;
}) {
  return (
    <div className="flex h-[55%] min-h-24 items-center md:min-h-64">
      {currentQuestion.answers.map((answer, index) => {
        return (
          <Answer
            key={index}
            index={index}
            symbol={answer}
            review={review}
            reviewSelectedAnswer={reviewSelectedAnswer}
            reviewCorrect={reviewCorrect}
            handleAnswer={handleAnswer}
          />
        );
      })}
    </div>
  );
}
