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
	const [timer, setTimer] = useState(30);
	const [difficulty, setDifficulty] = useState(""); // Initialize difficulty as empty

	const [difficultySelected, setDifficultySelected] = useState(false); // Track if difficulty has been selected

	useEffect(() => {
		if (difficulty === "") {
			// If difficulty has not been selected, don't fetch questions
			return;
		}

		// Set the questions with the shuffled data
		const shuffledQuestions = shuffleArray(shuffledSpaceQuizData);
		setQuestions(shuffledQuestions.slice(0, 10));
	}, [difficulty]);

	useEffect(() => {
		// Reset the timer based on the selected difficulty
		let timerDuration = 30; // Default timer duration

		if (difficulty === "Intermediate") {
			timerDuration = 20;
		} else if (difficulty === "Advanced") {
			timerDuration = 10;
		}

		setTimer(timerDuration);
	}, [difficulty]);

	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
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
		let timerDuration = 30; // Default timer duration

		if (newDifficulty === "Intermediate") {
			timerDuration = 20;
		} else if (newDifficulty === "Advanced") {
			timerDuration = 10;
		}

		setTimer(timerDuration);
	};

	// Calculate progress as a percentage
	const progress = (currentQuestionIndex / questions.length) * 100;

	return (
		<div className="quiz-container">
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
					{hintText && <p className="hint">{hintText}</p>}
					<div className="progress-bar">
						<div className="progress" style={{ width: `${progress}%` }}></div>
					</div>
					<div className="answer-options">
						{questions[currentQuestionIndex]?.options.map((option, index) => (
							<button
								key={index}
								onClick={() => handleAnswerClick(option)}
								className="answer-option"
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

			{/* Difficulty selection UI */}
			{!difficultySelected && (
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
			)}
		</div>
	);
}

export default SpaceQuiz;
