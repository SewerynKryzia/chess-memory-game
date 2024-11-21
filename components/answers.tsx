import Answer from "./answer";

export default function Answers({
  currentQuestion,
  handleAnswer,
}: {
  currentQuestion: { position: number; type: string; answers: string[] };
  handleAnswer: (pickedAnswer: string) => void;
}) {
  console.log(currentQuestion);
  return (
    <div className="flex">
      {currentQuestion.answers.map((answer, index) => {
        return (
          <Answer key={index} symbol={answer} handleAnswer={handleAnswer} />
        );
      })}
    </div>
  );
}
