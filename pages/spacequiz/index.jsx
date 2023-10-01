import React, { useState, useEffect } from "react";
import spaceQuizData from "../../data/spaceQuizData";

function SpaceQuiz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [secondsRemaining, setSecondsRemaining] = useState(30); // Timer
	const [reviewMode, setReviewMode] = useState(false); // Review mode to show correct answers

	const totalQuestions = spaceQuizData.length;

	// Timer effect
	useEffect(() => {
		const timer = setInterval(() => {
			if (secondsRemaining > 0 && !showScore) {
				setSecondsRemaining(secondsRemaining - 1);
			} else {
				clearInterval(timer);
				setShowScore(true);
			}
		}, 1000);

		// Cleanup the timer when the component unmounts
		return () => clearInterval(timer);
	}, [secondsRemaining, showScore]);

	const handleAnswerClick = (selectedAnswer) => {
		if (!showScore) {
			if (
				selectedAnswer === spaceQuizData[currentQuestionIndex].correctAnswer
			) {
				// If the selected answer is correct, increment the score.
				setScore(score + 1);
			}
			// Move to the next question.
			if (currentQuestionIndex < totalQuestions - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			} else {
				setShowScore(true);
			}
		}
	};

	const handleReviewClick = () => {
		setReviewMode(true);
	};

	return (
		<div className="quiz-container">
			{showScore ? (
				<div className="result">
					<h1>Quiz Result</h1>
					<p>
						Your Score: {score} out of {totalQuestions}
					</p>
					<p>Time Remaining: {secondsRemaining} seconds</p>
					{reviewMode && (
						<div className="review-questions">
							<h2>Review Questions:</h2>
							<ul>
								{spaceQuizData.map((questionData, index) => (
									<li key={index}>
										<strong>Question {index + 1}:</strong>{" "}
										{questionData.question} - {questionData.correctAnswer}
									</li>
								))}
							</ul>
						</div>
					)}
					<button onClick={handleReviewClick} className="review-button">
						Review Questions
					</button>
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
					<div className="timer">
						Time Remaining: {secondsRemaining} seconds
					</div>
					<div className="progress-bar">
						Progress: {currentQuestionIndex + 1} / {totalQuestions}
					</div>
				</div>
			)}
		</div>
	);
}

export default SpaceQuiz;
