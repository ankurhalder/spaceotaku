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
				<title>Test Your Quiz Knowledge | Space Otaku</title>
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
			<div className="seo">
				<span className="section-header">Detailed Description:</span>
				<p>Test Your Quiz Knowledge | Space Otaku</p>
				<p>Space Quiz By Space Otaku</p>
				<p>
					Prepare for an exhilarating cosmic journey as you explore the universe
					with Space Otaku&apos;s Space Quiz. This interactive quiz is designed
					to test your cosmic knowledge, challenge your space wisdom, and
					provide an opportunity for space enthusiasts and learners to expand
					their understanding of the cosmos.
				</p>

				<span className="section-header">Space Quiz:</span>

				<span className="subsection-header">Select Your Cosmic Challenge:</span>
				<p>
					Kick off your cosmic adventure by choosing the difficulty level that
					matches your space knowledge. Will you opt for &quot;Normal,&quot;
					&quot;Intermediate,&quot; or &quot;Advanced&quot;? Your choice will
					determine the level of challenge you&apos;ll face.
				</p>

				<span className="subsection-header">Engaging Space Questions:</span>
				<p>
					Dive into a captivating array of space questions that cover diverse
					aspects of the universe. From celestial bodies to space exploration,
					each question presents an opportunity to enhance your cosmic wisdom.
				</p>

				<span className="subsection-header">Time-Limited Puzzles:</span>
				<p>
					Feel the excitement as you confront time-limited questions. With the
					clock ticking, you&apos;ll need to rely on your space knowledge and
					quick thinking to provide the correct answers.
				</p>

				<span className="subsection-header">Hint Feature:</span>
				<p>
					Don&apos;t let challenging questions leave you puzzled. Utilize the
					hint feature to gain valuable clues that will guide you towards the
					right answers.
				</p>

				<span className="subsection-header">Review Your Cosmic Journey:</span>
				<p>
					After completing the quiz, step into review mode to revisit the
					questions, your answers, and the correct solutions. Reflect on your
					performance and identify areas for improvement.
				</p>

				<span className="subsection-header">
					Score and Space Trivia Mastery:
				</span>
				<p>
					Keep track of your score as you progress through the quiz. Challenge
					yourself to achieve a high score and aim to become a space quiz
					champion.
				</p>

				<span className="section-header">
					For Space Enthusiasts and Cosmic Learners:
				</span>
				<p>
					Whether you&apos;re a dedicated space enthusiast or someone eager to
					expand your cosmic knowledge, Space Otaku&apos;s Space Quiz welcomes
					all. This quiz provides a platform for both casual learners and cosmic
					experts to test their understanding of space and embark on a journey
					of cosmic discovery.
				</p>

				<span className="section-header">How to Play:</span>
				<p>
					Select Your Cosmic Challenge: Begin by choosing the difficulty level
					that aligns with your space knowledge and expertise. Answer the Cosmic
					Questions: Confront a series of space questions, each with its unique
					challenges. Time is of the essence, so answer promptly. Unlock Hints:
					If you encounter challenging questions, hints are at your disposal to
					provide guidance. Reflect and Review: After completing the quiz, enter
					review mode to revisit your performance and gain insights into your
					cosmic knowledge.
				</p>

				<span className="section-header">Challenge Your Space Wisdom:</span>
				<p>
					Are you ready to accept the challenge of the Space Quiz? Put your
					cosmic knowledge to the test, strive for a high score, and aim to
					become a space quiz champion. Whether you&apos;re a space enthusiast
					or a cosmic learner, this quiz offers an exciting cosmic journey
					filled with knowledge and discovery.
				</p>

				<span className="section-header">
					Initiate your cosmic journey now and discover the depths of your
					cosmic wisdom. Are you prepared to ascend as a space quiz champion?
				</span>
			</div>
		</Fragment>
	);
}
export default SpaceQuiz;
