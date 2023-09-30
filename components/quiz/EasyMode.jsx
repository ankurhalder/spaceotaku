import { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";
import uniqueSpaceQuiz from "../../functions/uniqueQuiz";

const Timer = ({ timeLeft }) => (
	<div className="timer">Time Left: {timeLeft} seconds</div>
);

export default function EasyMode() {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [timeLeft, setTimeLeft] = useState(30); // 30 seconds for easy mode
	const [shuffledOptions, setShuffledOptions] = useState([]);

	const handleAnswerClick = (selectedAnswer) => {
		const currentQuestion = questions[currentQuestionIndex];

		if (currentQuestion && selectedAnswer === currentQuestion.correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < 9) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setTimeLeft(30);
			setShuffledOptions(
				shuffle(questions[currentQuestionIndex + 1]?.options || [])
			);
		} else {
			setShowResult(true);
		}
	};

	const restartQuiz = () => {
		const filteredQuestions = uniqueSpaceQuiz.filter(
			(question) => question.difficulty === "easy"
		);
		const shuffledQuestions = shuffle(filteredQuestions).slice(0, 10);
		setQuestions(shuffledQuestions);
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowResult(false);
		setTimeLeft(30);
		setShuffledOptions(shuffle(shuffledQuestions[0]?.options || []));
	};

	useEffect(() => {
		const filteredQuestions = uniqueSpaceQuiz.filter(
			(question) => question.difficulty === "easy"
		);
		const shuffledQuestions = shuffle(filteredQuestions).slice(0, 10);
		setQuestions(shuffledQuestions);
		setShuffledOptions(shuffle(shuffledQuestions[0]?.options || []));
	}, []);

	useEffect(() => {
		if (timeLeft > 0 && currentQuestionIndex < 10 && !showResult) {
			const timer = setInterval(() => {
				setTimeLeft((prevTime) => prevTime - 1);
			}, 1000);

			return () => clearInterval(timer);
		} else if (timeLeft === 0) {
			handleAnswerClick(""); // Automatically move to the next question
		}
	}, [timeLeft, currentQuestionIndex, showResult]);

	const currentQuestion = questions[currentQuestionIndex];

	return (
		<div className="question-container">
			{showResult ? (
				<div className="result-container">
					<h2>Your Score: {score} / 10</h2>
					<button onClick={restartQuiz}>Restart Quiz</button>
				</div>
			) : (
				<>
					{currentQuestion && (
						<div className="question-container">
							<h2>Question {currentQuestionIndex + 1}</h2>
							<p>{currentQuestion.question}</p>
							{timeLeft > 0 && <Timer timeLeft={timeLeft} />}
							<div className="answer-options">
								{shuffledOptions.map((option, index) => (
									<button key={index} onClick={() => handleAnswerClick(option)}>
										{option}
									</button>
								))}
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
}
