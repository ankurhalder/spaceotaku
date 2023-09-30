import { useState } from "react";
import uniqueSpaceQuiz from "../../functions/uniqueQuiz";

// Do not need to import scss file here because it is already imported in _app.jsx

export default function SpaceQuizPage() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	const handleAnswerClick = (selectedAnswer) => {
		const currentQuestion = uniqueSpaceQuiz[currentQuestionIndex];

		if (selectedAnswer === currentQuestion.correctAnswer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < uniqueSpaceQuiz.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setShowResult(true);
		}
	};

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowResult(false);
	};

	const currentQuestion = uniqueSpaceQuiz[currentQuestionIndex];

	return (
		<div className="quiz-container">
			{showResult ? (
				<div className="result-container">
					<h2>
						Your Score: {score} / {uniqueSpaceQuiz.length}
					</h2>
					<button onClick={restartQuiz}>Restart Quiz</button>
				</div>
			) : (
				<div className="question-container">
					<h2>Question {currentQuestionIndex + 1}</h2>
					<p>{currentQuestion.question}</p>
					<div className="answer-options">
						{currentQuestion.options.map((option, index) => (
							<button key={index} onClick={() => handleAnswerClick(option)}>
								{option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
