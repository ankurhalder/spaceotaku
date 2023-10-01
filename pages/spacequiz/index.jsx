/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import shuffleArray from "@/functions/shuffleArray";
import shuffledSpaceQuizData from "../../data/spaceQuizData"; // Import the shuffled data

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
	const [timer, setTimer] = useState(initialTimers.normal); // Default timer for normal difficulty
	const [selectedDifficulty, setSelectedDifficulty] = useState("");
	const [difficultySelected, setDifficultySelected] = useState(false);

	useEffect(() => {
		if (!difficultySelected) {
			// Difficulty has not been selected, don't fetch questions
			return;
		}

		// Check if questions have already been loaded
		if (questions.length === 0) {
			// Set the questions with the shuffled data
			const shuffledQuestions = shuffleArray(
				shuffledSpaceQuizData.slice(0, 10) // Shuffle and slice 10 questions
			);
			setQuestions(shuffledQuestions);

			// Reset the timer based on the selected difficulty
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
	}, [difficultySelected, selectedDifficulty, timer, questions]);

	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			setTimer(initialTimers[selectedDifficulty]); // Reset timer
		} else {
			setShowScore(true);
		}
	};

	const handleHintClick = (hint) => {
		setHintText(hint);
	};

	const handleDifficultyChange = (difficulty) => {
		setSelectedDifficulty(difficulty);
		setDifficultySelected(true);
	};

	const handleTimeout = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			setTimer(initialTimers[selectedDifficulty]); // Reset timer
		} else {
			setShowScore(true);
		}
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
			) : showScore ? (
				<div className="result">
					Your Score: {score} out of {questions.length}
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
								}`}
							>
								{option}
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
		</div>
	);
}

export default SpaceQuiz;
