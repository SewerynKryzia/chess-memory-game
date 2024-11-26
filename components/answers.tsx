import Answer from "./answer";

export default function Answers({
  currentQuestion,
  handleAnswer,
}: {
  currentQuestion: { position: number; type: string; answers: string[] };
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
            handleAnswer={handleAnswer}
          />
        );
      })}
    </div>
  );
}
