/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import shuffleArray from "@/functions/shuffleArray";
import shuffledSpaceQuizData from "../../data/spaceQuizData";
import Head from "next/head";
import { CommonMusic } from "@/components";
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
	const [isQuizDisabled, setIsQuizDisabled] = useState(false);

	useEffect(() => {
		if (!difficultySelected) {
			return;
		}
		if (questions.length === 0) {
			const shuffledQuestions = shuffleArray(
				shuffledSpaceQuizData.slice(0, 10)
			);
			setQuestions(shuffledQuestions);
			setCurrentQuestionIndex(0);
			setTimer(initialTimers[selectedDifficulty]);
		}
		const timerInterval = setInterval(() => {
			if (timer > 0) {
				setTimer(timer - 1);
			} else {
				handleTimeout();
			}
		}, 2000);

		return () => {
			clearInterval(timerInterval);
		};
	}, [difficultySelected, selectedDifficulty, timer, questions, quizEnded]);

	const handleAnswerClick = (selectedAnswer) => {
		const correctAnswer = questions[currentQuestionIndex].correctAnswer;
		setIsQuizDisabled(true);

		if (selectedAnswer === correctAnswer) {
			setScore(score + 1);
			setFeedback("Correct!");
		} else {
			setFeedback("Incorrect!");
		}
		const updatedSelectedAnswers = [...selectedAnswers];

		updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
		setSelectedAnswers(updatedSelectedAnswers);

		setTimeout(() => {
			setFeedback("");
			setIsQuizDisabled(false);
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
				setSelectedAnswer("");
				setHintText("");
				setTimer(initialTimers[selectedDifficulty]);
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
		setFeedback("");
		setIsQuizDisabled(false);
	};

	const handleTimeout = () => {
		setIsQuizDisabled(true);

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setHintText("");
			setTimer(initialTimers[selectedDifficulty]);
		} else {
			setQuizEnded(true);
		}
		setTimeout(() => {
			setIsQuizDisabled(false);
		}, 1000);
	};

	const progress = (currentQuestionIndex / questions.length) * 100;

	return (
		<Fragment>
			<Head>
				<title>Test Your Space Knowledge | Space Otaku</title>
				<meta
					name="description"
					content="Test your space knowledge. Choose difficulty, answer questions, and check your score!"
				/>
				<meta
					name="keywords"
					content="space quiz, space trivia, quiz game, Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,"
				/>
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/spacequiz"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/spacequiz"
				/>
			</Head>
			<CommonMusic></CommonMusic>
			<div className="quiz-container">
				<h1 className="Space-quiz-heading">Space Quiz By Space Otaku</h1>
				{!difficultySelected ? (
					<div className="difficulty-selection">
						<h3>Select Difficulty:</h3>
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
						<span>
							Your Score: {score} out of {questions.length}
						</span>
						<br />
						{quizEnded && (
							<button className="restart-button" onClick={handleRestartQuiz}>
								Restart Quiz
							</button>
						)}
						<button
							className="review-button"
							onClick={() => setReviewMode(true)}
						>
							Review Answers
						</button>
					</div>
				) : (
					<div className="question-container">
						<h4>Question {currentQuestionIndex + 1} :</h4>
						<div className="progress-bar">
							<div className="progress" style={{ width: `${progress}%` }}></div>
						</div>
						{questions[currentQuestionIndex] && (
							<p>{questions[currentQuestionIndex].question}</p>
						)}
						<div className="timer">Time Left: {timer} seconds</div>
						{hintText && <p className="hint">{hintText}</p>}
						<div className="answer-options">
							{questions[currentQuestionIndex]?.options.map((option, index) => (
								<button
									key={index}
									onClick={() => handleAnswerClick(option)}
									className={`answer-option ${
										option === selectedAnswer ? "selected" : ""
									} ${feedback && isQuizDisabled ? "disabled" : ""}
							${
								feedback &&
								option === questions[currentQuestionIndex].correctAnswer
									? "correct"
									: ""
							}`}
									disabled={isQuizDisabled}
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
				{reviewMode && (
					<div className="review-container">
						<h5>Review Answers:</h5>
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
		</Fragment>
	);
}
export default SpaceQuiz;
