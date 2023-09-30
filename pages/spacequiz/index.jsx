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

	useEffect(() => {
		// Shuffle all unique questions initially
		const shuffledQuestions = shuffle(uniqueSpaceQuiz);
		setQuestions(shuffledQuestions.slice(0, 10)); // Select any 10 questions initially
	}, []);

	useEffect(() => {
		// Shuffle options only when a new question is displayed
		if (currentQuestionIndex < questions.length) {
			const currentQuestion = questions[currentQuestionIndex];
			setShuffledOptions(shuffle(currentQuestion?.options || []));
		}
	}, [currentQuestionIndex, questions]);

	useEffect(() => {
		if (timeLeft > 0 && !showResult) {
			const timer = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);

			return () => {
				clearInterval(timer);
			};
		} else if (timeLeft === 0) {
			setShowResult(true);
		}
	}, [timeLeft, showResult]);

	const handleAnswerClick = (selectedAnswer) => {
		const currentQuestion = questions[currentQuestionIndex];

		if (selectedAnswer === currentQuestion.correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
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
		setTimeLeft(600);
		setShuffledOptions([]);
	};

	const currentQuestion = questions[currentQuestionIndex];

	return (
		<div className="quiz-container">
			{showResult ? (
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
