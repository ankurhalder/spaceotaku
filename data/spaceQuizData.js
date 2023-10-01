const spaceQuizData = [
	{
		question: "What is the closest planet to the Sun?",
		options: ["Earth", "Venus", "Mars", "Mercury"],
		correctAnswer: "Mercury",
	},
	{
		question: "Who was the first person to walk on the Moon?",
		options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
		correctAnswer: "Neil Armstrong",
	},
	{
		question: "Which space agency launched the Hubble Space Telescope?",
		options: ["NASA", "ESA", "Roscosmos", "ISRO"],
		correctAnswer: "NASA",
	},
	{
		question: "How many moons does Earth have?",
		options: ["1", "2", "0", "3"],
		correctAnswer: "1",
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Mars", "Venus", "Jupiter", "Saturn"],
		correctAnswer: "Jupiter",
	},
	{
		question: "Which spacecraft was the first to orbit Jupiter?",
		options: ["Voyager 1", "Galileo", "New Horizons", "Cassini"],
		correctAnswer: "Galileo",
	},
	{
		question: "What is the largest moon in our solar system?",
		options: ["Titan", "Ganymede", "Callisto", "Io"],
		correctAnswer: "Ganymede",
	},
	{
		question: "Which planet is known as the 'Red Planet'?",
		options: ["Mars", "Venus", "Jupiter", "Saturn"],
		correctAnswer: "Mars",
	},
	{
		question:
			"What is the name of the farthest known dwarf planet in the solar system?",
		options: ["Pluto", "Eris", "Haumea", "Makemake"],
		correctAnswer: "Eris",
	},
	{
		question:
			"What is the largest asteroid in the asteroid belt between Mars and Jupiter?",
		options: ["Ceres", "Pallas", "Vesta", "Hygiea"],
		correctAnswer: "Ceres",
	},
	{
		question: "Which spacecraft was the first to successfully land on Mars?",
		options: ["Viking 1", "Spirit", "Curiosity", "Opportunity"],
		correctAnswer: "Viking 1",
	},
	{
		question:
			"How many stars are there in the Milky Way galaxy (approximately)?",
		options: ["100 million", "1 billion", "100 billion", "1 trillion"],
		correctAnswer: "100 billion",
	},
	{
		question:
			"What is the name of the largest volcano in the solar system, located on Mars?",
		options: ["Mount Everest", "Mauna Kea", "Olympus Mons", "Kilimanjaro"],
		correctAnswer: "Olympus Mons",
	},
	{
		question: "Which moon of Saturn is known for its geysers of water ice?",
		options: ["Titan", "Enceladus", "Mimas", "Rhea"],
		correctAnswer: "Enceladus",
	},
	{
		question:
			"What is the name of the first artificial satellite launched into space?",
		options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"],
		correctAnswer: "Sputnik 1",
	},
	{
		question:
			"Which space telescope has provided stunning images of distant galaxies and nebulae?",
		options: [
			"Hubble Space Telescope",
			"James Webb Space Telescope",
			"Kepler Space Telescope",
			"Spitzer Space Telescope",
		],
		correctAnswer: "Hubble Space Telescope",
	},
	{
		question:
			"What is the name of the phenomenon when a massive star collapses and explodes?",
		options: [
			"Black hole formation",
			"Supernova",
			"Nova",
			"Red giant expansion",
		],
		correctAnswer: "Supernova",
	},
	{
		question: "Which planet has the Great Red Spot, a massive storm system?",
		options: ["Jupiter", "Mars", "Saturn", "Neptune"],
		correctAnswer: "Jupiter",
	},
];
function findDuplicateQuestions(quizData) {
	const seenQuestions = {};
	const duplicateQuestions = [];

	for (const questionData of quizData) {
		const question = questionData.question;

		if (seenQuestions[question]) {
			duplicateQuestions.push(question);
		} else {
			seenQuestions[question] = true;
		}
	}

	return duplicateQuestions;
}

const duplicateQuestions = findDuplicateQuestions(spaceQuizData);
if (duplicateQuestions.length > 0) {
	console.log("Duplicate questions found:");
	console.log(duplicateQuestions);
} else {
	console.log("No duplicate questions found.");
}
export default spaceQuizData;
