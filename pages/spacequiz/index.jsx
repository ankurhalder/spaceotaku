import React, { useState, useEffect } from "react";
import spaceQuizData from "../../data/spaceQuizData";

function SpaceQuiz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [timer, setTimer] = useState(30); // Set an initial timer value (in seconds)

	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === spaceQuizData[currentQuestionIndex].correctAnswer) {
			// If the selected answer is correct, increment the score.
			setScore(score + 1);
		}

		// Move to the next question or show the final score.
		if (currentQuestionIndex < spaceQuizData.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer(""); // Clear the selected answer
		} else {
			setShowScore(true);
		}
	};

	useEffect(() => {
		// Timer logic
		if (timer > 0 && !showScore) {
			const countdown = setInterval(() => {
				setTimer(timer - 1);
			}, 1000);

			return () => clearInterval(countdown);
		}
	}, [timer, showScore]);

	return (
		<div className="quiz-container">
			{showScore ? (
				<div className="result">
					<h2>Quiz Completed</h2>
					<p>
						Your Score: {score} out of {spaceQuizData.length}
					</p>
				</div>
			) : (
				<div className="question-container">
					<h2>Question {currentQuestionIndex + 1}</h2>
					<p>{spaceQuizData[currentQuestionIndex].question}</p>
					<div className="answer-options">
						{spaceQuizData[currentQuestionIndex].options.map(
							(option, index) => (
								<button
									key={index}
									onClick={() => {
										handleAnswerClick(option);
										setSelectedAnswer(option);
									}}
									className={`answer-option ${
										option === selectedAnswer ? "selected" : ""
									}`}
								>
									{option}
								</button>
							)
						)}
					</div>
					<div className="timer">Time Left: {timer} seconds</div>
				</div>
			)}
		</div>
	);
}

export default SpaceQuiz;
