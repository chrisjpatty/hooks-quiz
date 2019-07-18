import React from "react";

const Question = ({ text, answers, correctIndex, onNextButtonClicked }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const hasAnswered = selectedIndex !== null;
  const pickedCorrectAnswer = hasAnswered
    ? selectedIndex === correctIndex
    : null;

  return (
    <div className="question-wrapper">
      <p>{text}</p>
      {answers.map((answer, i) => {
        const isCorrectAnswer = i === correctIndex;
        const isSelectedAnswer = i === selectedIndex;
        return (
          <button
            disabled={hasAnswered}
            onClick={() => setSelectedIndex(i)}
            style={{
              opacity: !hasAnswered || isCorrectAnswer ? 1 : 0.5,
              background:
                hasAnswered && isCorrectAnswer
                  ? "#8bff78"
                  : isSelectedAnswer
                  ? "#ff6363"
                  : ""
            }}
          >
            {answer}
          </button>
        );
      })}
      <p className="feedback" aria-live="polite">
        {hasAnswered
          ? pickedCorrectAnswer
            ? "Nice! You really know your stuff!"
            : "That's not quite right. Sorry."
          : ""}
      </p>
      {hasAnswered && (
        <button onClick={onNextButtonClicked} className="next-button">
          Next Question{" "}
          <span role="img" aria-label="">
            👉
          </span>
        </button>
      )}
    </div>
  );
};

export default Question;
