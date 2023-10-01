import React, { useState, useEffect } from "react";
import spaceQuizData from "../../data/spaceQuizData";

function SpaceQuiz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [hintText, setHintText] = useState("");
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
			setHintText(""); // Clear the hint text
			setTimer(30); // Reset the timer for the next question
		} else {
			setShowScore(true);
		}
	};

	const handleHintClick = (hint) => {
		setHintText(hint);
	};

	const handleSkipClick = () => {
		// Move to the next question without answering the current one.
		if (currentQuestionIndex < spaceQuizData.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer(""); // Clear the selected answer
			setHintText(""); // Clear the hint text
			setTimer(30); // Reset the timer for the next question
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

	// Calculate progress as a percentage
	const progress = (currentQuestionIndex / spaceQuizData.length) * 100;

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
					{hintText && <p className="hint">{hintText}</p>}
					<div className="progress-bar">
						<div className="progress" style={{ width: `${progress}%` }}></div>
					</div>
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
					<button
						className="hint-button"
						onClick={() =>
							handleHintClick(spaceQuizData[currentQuestionIndex].hint)
						}
					>
						Hint
					</button>
					<button className="skip-button" onClick={handleSkipClick}>
						Skip
					</button>
					<div className="timer">Time Left: {timer} seconds</div>
				</div>
			)}
		</div>
	);
}

export default SpaceQuiz;
