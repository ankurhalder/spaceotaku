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
	const [selectedDifficulty, setSelectedDifficulty] = useState(""); // Difficulty mode state

	useEffect(() => {
		// Set the questions with the shuffled data
		const shuffledQuestions = shuffleArray(shuffledSpaceQuizData);
		setQuestions(shuffledQuestions.slice(0, 10));
	}, []);

	// Function to start the timer
	const startTimer = (duration) => {
		setTimer(duration);
		const intervalId = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		// Clear the interval when the timer reaches 0
		setTimeout(() => {
			clearInterval(intervalId);
			// Handle the case when the timer runs out (e.g., skip to the next question)
			handleNextQuestion();
		}, duration * 1000);
	};

	// Function to start the game with the selected difficulty
	const startGame = (difficulty) => {
		setSelectedDifficulty(difficulty);
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowScore(false);
		setSelectedAnswer("");
		setHintText("");
		// Start the timer based on the selected difficulty mode
		if (difficulty === "Normal") {
			startTimer(30);
		} else if (difficulty === "Intermediate") {
			startTimer(20);
		} else if (difficulty === "Advanced") {
			startTimer(10);
		}
	};

	// Function to handle answering a question
	const handleAnswerClick = (selectedAnswer) => {
		if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
			setScore(score + 1);
		}

		handleNextQuestion();
	};

	// Function to handle moving to the next question
	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			// Start the timer based on the selected difficulty mode
			if (selectedDifficulty === "Normal") {
				startTimer(30);
			} else if (selectedDifficulty === "Intermediate") {
				startTimer(20);
			} else if (selectedDifficulty === "Advanced") {
				startTimer(10);
			}
		} else {
			setShowScore(true);
		}
	};

	// Function to handle showing a hint
	const handleHintClick = (hint) => {
		setHintText(hint);
	};

	// Calculate progress as a percentage
	const progress = (currentQuestionIndex / questions.length) * 100;

	// Difficulty selection screen
	if (!selectedDifficulty) {
		return (
			<div className="difficulty-container">
				<h2>Select Difficulty</h2>
				<button
					onClick={() => startGame("Normal")}
					className="difficulty-button"
				>
					Normal
				</button>
				<button
					onClick={() => startGame("Intermediate")}
					className="difficulty-button"
				>
					Intermediate
				</button>
				<button
					onClick={() => startGame("Advanced")}
					className="difficulty-button"
				>
					Advanced
				</button>
			</div>
		);
	}

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
					<div className="timer">Time Remaining: {timer} seconds</div>
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
									selectedAnswer === option ? "selected" : ""
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
