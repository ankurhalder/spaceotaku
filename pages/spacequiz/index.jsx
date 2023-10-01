import React, { useState, useEffect } from "react";
import shuffleArray from "@/functions/shuffleArray";
import shuffledSpaceQuizData from "../../data/spaceQuizData"; // Import the shuffled data

function SpaceQuiz() {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [hintText, setHintText] = useState("");
	const [timer, setTimer] = useState(0); // Timer state
	const [difficulty, setDifficulty] = useState(""); // Initialize difficulty as empty
	const [difficultySelected, setDifficultySelected] = useState(false); // Track if difficulty has been selected

	useEffect(() => {
		if (!difficultySelected) {
			// Difficulty has not been selected, don't fetch questions
			return;
		}

		// Set the questions with the shuffled data
		const shuffledQuestions = shuffleArray(shuffledSpaceQuizData);
		setQuestions(shuffledQuestions.slice(0, 10));

		// Reset timer when new questions are loaded
		setTimer(getInitialTimerValue());
	}, [difficultySelected]);

	useEffect(() => {
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
	}, [timer]);

	const handleTimeout = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			setTimer(getInitialTimerValue()); // Reset timer for the next question
		} else {
			setShowScore(true);
		}
	};

	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			setTimer(getInitialTimerValue()); // Reset timer for the next question
		} else {
			setShowScore(true);
		}
	};

	const handleHintClick = (hint) => {
		setHintText(hint);
	};

	const handleDifficultyChange = (newDifficulty) => {
		// Update the selected difficulty and set difficultySelected to true
		setDifficulty(newDifficulty);
		setDifficultySelected(true);

		// Reset the timer when difficulty changes
		setTimer(getInitialTimerValue());
	};

	const getInitialTimerValue = () => {
		// Set initial timer value based on the selected difficulty
		if (difficulty === "Intermediate") {
			return 20;
		} else if (difficulty === "Advanced") {
			return 10;
		} else {
			return 30; // Default timer duration for Normal difficulty
		}
	};

	// Calculate progress as a percentage
	const progress = (currentQuestionIndex / questions.length) * 100;

	return (
		<div className="quiz-container">
			{!difficultySelected ? ( // Render difficulty selection
				<div className="difficulty-selection">
					<h2>Select Difficulty:</h2>
					<button
						onClick={() => handleDifficultyChange("Normal")}
						className="difficulty-button"
					>
						Normal
					</button>
					<button
						onClick={() => handleDifficultyChange("Intermediate")}
						className="difficulty-button"
					>
						Intermediate
					</button>
					<button
						onClick={() => handleDifficultyChange("Advanced")}
						className="difficulty-button"
					>
						Advanced
					</button>
				</div>
			) : (
				// Difficulty has been selected, render game elements
				<>
					{showScore ? (
						<div className="result">
							Your Score: {score} out of {questions.length}
						</div>
					) : (
						<div className="question-container">
							<h2>Question {currentQuestionIndex + 1}:</h2>
							{questions[currentQuestionIndex] && (
								<p>{questions[currentQuestionIndex].question}</p>
							)}
							<p className="timer">Time Left: {timer} seconds</p>
							{hintText && <p className="hint">{hintText}</p>}
							<div className="progress-bar">
								<div
									className="progress"
									style={{ width: `${progress}%` }}
								></div>
							</div>
							<div className="answer-options">
								{questions[currentQuestionIndex]?.options.map(
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
							<button
								className="hint-button"
								onClick={() =>
									handleHintClick(
										questions[currentQuestionIndex]?.hint ||
											"No hint available."
									)
								}
							>
								Show Hint
							</button>
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default SpaceQuiz;
