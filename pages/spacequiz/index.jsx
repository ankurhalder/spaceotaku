import { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";
import uniqueSpaceQuiz from "../../functions/uniqueQuiz";

export default function SpaceQuizPage() {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
	const [shuffledOptions, setShuffledOptions] = useState([]);
	const [selectedDifficulty, setSelectedDifficulty] = useState(null);

	useEffect(() => {
		if (!selectedDifficulty) {
			// Show difficulty selection if a difficulty is not selected
			return;
		}

		// Shuffle all unique questions based on the selected difficulty
		const filteredQuestions = uniqueSpaceQuiz.filter(
			(question) => question.difficulty === selectedDifficulty
		);
		const shuffledQuestions = shuffle(filteredQuestions);
		setQuestions(shuffledQuestions.slice(0, 10)); // Always select 10 questions
	}, [selectedDifficulty]);

	useEffect(() => {
		// Shuffle options only when a new question is displayed
		if (currentQuestionIndex < questions.length) {
			const currentQuestion = questions[currentQuestionIndex];
			setShuffledOptions(shuffle(currentQuestion?.options || []));
			if (selectedDifficulty === "medium") {
				// Reset timer for medium difficulty
				setTimeLeft(20);
			} else if (selectedDifficulty === "hard") {
				// Reset timer for hard difficulty
				setTimeLeft(10);
			}
		}
	}, [currentQuestionIndex, questions, selectedDifficulty]);

	useEffect(() => {
		if (timeLeft > 0 && !showResult) {
			const timer = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);

			return () => {
				clearInterval(timer);
			};
		} else if (timeLeft === 0 && selectedDifficulty !== "easy") {
			// Timer ran out for medium and hard modes
			handleAnswerClick(""); // Move to the next question
		} else if (timeLeft === 0 && selectedDifficulty === "easy") {
			// Timer ran out for easy mode, game over
			setShowResult(true);
		}
	}, [timeLeft, showResult, selectedDifficulty]);

	const handleAnswerClick = (selectedAnswer) => {
		const currentQuestion = questions[currentQuestionIndex];

		if (selectedAnswer === currentQuestion.correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < 9) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setShowResult(true);
		}
	};

	const restartQuiz = () => {
		// Shuffle all questions again to get a new set of 10 questions
		const shuffledQuestions = shuffle(uniqueSpaceQuiz);
		setQuestions(shuffledQuestions.slice(0, 10));
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowResult(false);
		if (selectedDifficulty === "easy") {
			setTimeLeft(0);
		} else if (selectedDifficulty === "medium") {
			setTimeLeft(20);
		} else if (selectedDifficulty === "hard") {
			setTimeLeft(10);
		}
		setShuffledOptions([]);
	};

	const handleDifficultySelect = (difficulty) => {
		setSelectedDifficulty(difficulty);
		if (difficulty === "easy") {
			setTimeLeft(300); // 5 minutes in seconds for easy mode
		} else if (difficulty === "medium") {
			setTimeLeft(20); // 20 seconds per question for medium mode
		} else if (difficulty === "hard") {
			setTimeLeft(10); // 10 seconds per question for hard mode
		}
	};

	const currentQuestion = questions[currentQuestionIndex];

	return (
		<div className="quiz-container">
			{!selectedDifficulty ? (
				<div className="difficulty-selection">
					<h2>Select Difficulty:</h2>
					<button onClick={() => handleDifficultySelect("easy")}>Easy</button>
					<button onClick={() => handleDifficultySelect("medium")}>
						Medium
					</button>
					<button onClick={() => handleDifficultySelect("hard")}>Hard</button>
				</div>
			) : showResult ? (
				<div className="result-container">
					<h2>Your Score: {score} / 10</h2>
					<button onClick={restartQuiz}>Restart Quiz</button>
				</div>
			) : (
				<>
					{currentQuestion ? (
						<div className="question-container">
							<h2>Question {currentQuestionIndex + 1}</h2>
							<p>{currentQuestion.question}</p>
							<div className="answer-options">
								{shuffledOptions.map((option, index) => (
									<button key={index} onClick={() => handleAnswerClick(option)}>
										{option}
									</button>
								))}
							</div>
							<div className="timer">
								Time Left: {Math.floor(timeLeft / 60)}:
								{(timeLeft % 60).toString().padStart(2, "0")}
							</div>
						</div>
					) : (
						<div className="result-container">
							<h2>Your Score: {score} / 10</h2>
							<button onClick={restartQuiz}>Restart Quiz</button>
						</div>
					)}
				</>
			)}
		</div>
	);
}
