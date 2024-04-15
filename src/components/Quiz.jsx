import React, { useState } from "react";
import { questions } from "./questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const mystyle = {
    margin: "20px",
  };
  const handleAnswerOptionClick = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      alert(`Quiz finished! Your score is ${score}/${questions.length}`);
    }
  };

  return (
    <div style={mystyle}>
      <h1>Quiz</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>
            {currentQuestion + 1 + ". " + questions[currentQuestion].question}
          </h2>
          {questions[currentQuestion].choices.map((choice, index) => (
            <>
              <input
                type="radio"
                value={choice}
                name="answer"
                key={index}
                checked={selectedAnswer === choice}
                onChange={handleAnswerOptionClick}
              />
              {choice}
              <br />
            </>
          ))}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz finished!</h2>
          <p>
            Your score is {score}/{questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
