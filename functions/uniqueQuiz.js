const spaceQuiz = require("../data/spaceQuiz");

function removeDuplicateQuestions(questions) {
	const uniqueQuestions = [];
	const seenQuestions = new Set();
	const duplicateQuestions = [];

	for (const question of questions) {
		const questionText = question.question;
		const correctAnswer = question.correctAnswer;

		const questionKey = `${questionText}-${correctAnswer}`;

		if (!seenQuestions.has(questionKey)) {
			uniqueQuestions.push(question);
			seenQuestions.add(questionKey);
		} else {
			duplicateQuestions.push(question);
		}
	}

	if (duplicateQuestions.length > 0) {
		console.log("Duplicate Questions:", duplicateQuestions);
	}

	return uniqueQuestions;
}

const uniqueSpaceQuiz = removeDuplicateQuestions(spaceQuiz);

module.exports = uniqueSpaceQuiz;
