/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import shuffleArray from "@/functions/shuffleArray";
import shuffledSpaceQuizData from "../../data/spaceQuizData";

const initialTimers = {
	normal: 30,
	intermediate: 20,
	advanced: 10,
};

function SpaceQuiz() {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [hintText, setHintText] = useState("");
	const [timer, setTimer] = useState(initialTimers.normal);
	const [selectedDifficulty, setSelectedDifficulty] = useState("");
	const [difficultySelected, setDifficultySelected] = useState(false);
	const [quizEnded, setQuizEnded] = useState(false);
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [feedback, setFeedback] = useState("");
	const [reviewMode, setReviewMode] = useState(false);
	const [isQuizDisabled, setIsQuizDisabled] = useState(false); // State to disable quiz interaction

	useEffect(() => {
		if (!difficultySelected) {
			return;
		}

		// Check if questions have already been loaded
		if (questions.length === 0) {
			// Set the questions with the shuffled data
			const shuffledQuestions = shuffleArray(
				shuffledSpaceQuizData.slice(0, 10) // Shuffle and slice 10 questions
			);
			setQuestions(shuffledQuestions);

			// Reset the question index to 0 and the timer based on the selected difficulty
			setCurrentQuestionIndex(0);
			setTimer(initialTimers[selectedDifficulty]);
		}

		// Start the timer interval
		const timerInterval = setInterval(() => {
			if (timer > 0) {
				setTimer(timer - 1);
			} else {
				// Timer reached 0, handle next question or end game
				handleTimeout();
			}
		}, 1000);

		return () => {
			clearInterval(timerInterval);
		};
	}, [difficultySelected, selectedDifficulty, timer, questions, quizEnded]);

	const handleAnswerClick = (selectedAnswer) => {
		const correctAnswer = questions[currentQuestionIndex].correctAnswer;

		// Disable quiz interaction during feedback display
		setIsQuizDisabled(true);

		if (selectedAnswer === correctAnswer) {
			setScore(score + 1);
			setFeedback("Correct!"); // Set feedback to "Correct!"
		} else {
			setFeedback("Incorrect!"); // Set feedback to "Incorrect!"
		}

		// Store the selected answer
		const updatedSelectedAnswers = [...selectedAnswers];
		updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
		setSelectedAnswers(updatedSelectedAnswers);

		// Delay clearing the feedback message and enabling quiz interaction
		setTimeout(() => {
			setFeedback("");
			setIsQuizDisabled(false);
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
				setSelectedAnswer("");
				setHintText("");
				setTimer(initialTimers[selectedDifficulty]); // Reset timer
			} else {
				setQuizEnded(true);
			}
		}, 1000);
	};

	const handleHintClick = (hint) => {
		setHintText(hint);
	};

	const handleDifficultyChange = (difficulty) => {
		setSelectedDifficulty(difficulty);
		setDifficultySelected(true);
	};

	const handleRestartQuiz = () => {
		setQuestions([]);
		setSelectedDifficulty("");
		setDifficultySelected(false);
		setScore(0);
		setQuizEnded(false);
		setSelectedAnswers([]);
		setReviewMode(false);
		setFeedback(""); // Clear feedback when restarting quiz
		setIsQuizDisabled(false); // Enable quiz interaction
	};

	const handleTimeout = () => {
		// Disable quiz interaction during feedback display
		setIsQuizDisabled(true);

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			setTimer(initialTimers[selectedDifficulty]); // Reset timer
		} else {
			setQuizEnded(true);
		}

		// Delay enabling quiz interaction
		setTimeout(() => {
			setIsQuizDisabled(false);
		}, 1000);
	};

	// Calculate progress as a percentage
	const progress = (currentQuestionIndex / questions.length) * 100;

	return (
		<div className="quiz-container">
			{!difficultySelected ? (
				<div className="difficulty-selection">
					<h2>Select Difficulty:</h2>
					<button
						className="difficulty-button"
						onClick={() => handleDifficultyChange("normal")}
					>
						Normal
					</button>
					<button
						className="difficulty-button"
						onClick={() => handleDifficultyChange("intermediate")}
					>
						Intermediate
					</button>
					<button
						className="difficulty-button"
						onClick={() => handleDifficultyChange("advanced")}
					>
						Advanced
					</button>
				</div>
			) : showScore || quizEnded ? (
				<div className="result">
					Your Score: {score} out of {questions.length}
					<br />
					{quizEnded && (
						<button className="restart-button" onClick={handleRestartQuiz}>
							Restart Quiz
						</button>
					)}
					<button className="review-button" onClick={() => setReviewMode(true)}>
						Review Answers
					</button>
				</div>
			) : (
				<div className="question-container">
					<h2>Question {currentQuestionIndex + 1}:</h2>
					{questions[currentQuestionIndex] && (
						<p>{questions[currentQuestionIndex].question}</p>
					)}
					<div className="timer">Time Left: {timer} seconds</div>
					{hintText && <p className="hint">{hintText}</p>}
					<div className="progress-bar">
						<div className="progress" style={{ width: `${progress}%` }}></div>
					</div>
					<div className="answer-options">
						{questions[currentQuestionIndex]?.options.map((option, index) => (
							<button
								key={index}
								onClick={() => handleAnswerClick(option)}
								className={`answer-option ${
									option === selectedAnswer ? "selected" : ""
								} ${feedback && isQuizDisabled ? "disabled" : ""}`}
								disabled={isQuizDisabled}
							>
								{option}
								{/* Display feedback for 1 second */}
								{feedback && (
									<div
										className={`answer-feedback ${
											feedback === "Correct!" ? "correct" : "incorrect"
										}`}
									>
										{feedback}
									</div>
								)}
							</button>
						))}
					</div>
					<button
						className="hint-button"
						onClick={() =>
							handleHintClick(
								questions[currentQuestionIndex]?.hint || "No hint available."
							)
						}
					>
						Show Hint
					</button>
				</div>
			)}
			{reviewMode && (
				<div className="review-container">
					<h2>Review Answers:</h2>
					{questions.map((question, index) => (
						<div key={index} className="review-item">
							<p>
								<strong>Question {index + 1}:</strong> {question.question}
							</p>
							<p>
								<strong>Your Answer:</strong>{" "}
								{selectedAnswers[index] || "Not attempted"}
							</p>
							<p>
								<strong>Correct Answer:</strong> {question.correctAnswer}
							</p>
							<div
								className={`answer-feedback ${
									selectedAnswers[index] === question.correctAnswer
										? "correct"
										: "incorrect"
								}`}
							>
								{selectedAnswers[index] === question.correctAnswer
									? "Correct!"
									: "Incorrect!"}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SpaceQuiz;
