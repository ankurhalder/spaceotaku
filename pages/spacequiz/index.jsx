import React, { useState } from "react";
import spaceQuizData from "../../data/spaceQuizData";

function SpaceQuiz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === spaceQuizData[currentQuestionIndex].correctAnswer) {
			// If the selected answer is correct, increment the score.
			setScore(score + 1);
		}

		// Move to the next question or show the final score.
		if (currentQuestionIndex < spaceQuizData.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className="quiz-container">
			{showScore ? (
				<div className="result">
					Your Score: {score} out of {spaceQuizData.length}
				</div>
			) : (
				<div className="question-container">
					<h2>Question {currentQuestionIndex + 1}:</h2>
					<p>{spaceQuizData[currentQuestionIndex].question}</p>
					<div className="answer-options">
						{spaceQuizData[currentQuestionIndex].options.map(
							(option, index) => (
								<button
									key={index}
									onClick={() => handleAnswerClick(option)}
									className="answer-option"
								>
									{option}
								</button>
							)
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default SpaceQuiz;
