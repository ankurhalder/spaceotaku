import shuffleArray from "@/functions/shuffleArray";
const spaceQuizData = [
	{
		question: "What is the closest planet to the Sun?",
		options: ["Earth", "Venus", "Mars", "Mercury"],
		correctAnswer: "Mercury",
		hint: "It's the smallest planet in our solar system.",
	},
	{
		question: "Who was the first person to walk on the Moon?",
		options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
		correctAnswer: "Neil Armstrong",
		hint: "He said, 'That's one small step for [a] man, one giant leap for mankind.'",
	},
	{
		question: "Which space agency launched the Hubble Space Telescope?",
		options: ["NASA", "ESA", "Roscosmos", "ISRO"],
		correctAnswer: "NASA",
		hint: "It's the United States' space agency.",
	},
	{
		question: "How many moons does Earth have?",
		options: ["1", "2", "0", "3"],
		correctAnswer: "1",
		hint: "It's the one you see in the night sky.",
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Mars", "Venus", "Jupiter", "Saturn"],
		correctAnswer: "Jupiter",
		hint: "It's known for its massive size and its iconic Great Red Spot.",
	},
	{
		question: "Which spacecraft was the first to orbit Jupiter?",
		options: ["Voyager 1", "Galileo", "New Horizons", "Cassini"],
		correctAnswer: "Galileo",
		hint: "It was named after an Italian astronomer.",
	},
	{
		question: "What is the largest moon in our solar system?",
		options: ["Titan", "Ganymede", "Callisto", "Io"],
		correctAnswer: "Ganymede",
		hint: "It's even bigger than the planet Mercury.",
	},
	{
		question: "Which planet is known as the 'Red Planet'?",
		options: ["Mars", "Venus", "Jupiter", "Saturn"],
		correctAnswer: "Mars",
		hint: "Its reddish appearance comes from iron oxide (rust) on its surface.",
	},
	{
		question:
			"What is the name of the farthest known dwarf planet in the solar system?",
		options: ["Pluto", "Eris", "Haumea", "Makemake"],
		correctAnswer: "Eris",
		hint: "It's one of the most distant objects in our solar system.",
	},
	{
		question:
			"What is the largest asteroid in the asteroid belt between Mars and Jupiter?",
		options: ["Ceres", "Pallas", "Vesta", "Hygiea"],
		correctAnswer: "Ceres",
		hint: "It was the first asteroid to be discovered.",
	},
	{
		question: "Which spacecraft was the first to successfully land on Mars?",
		options: ["Viking 1", "Spirit", "Curiosity", "Opportunity"],
		correctAnswer: "Viking 1",
		hint: "It had both an orbiter and a lander.",
	},
	{
		question:
			"How many stars are there in the Milky Way galaxy (approximately)?",
		options: ["100 million", "1 billion", "100 billion", "1 trillion"],
		correctAnswer: "100 billion",
		hint: "It's a very large number, but still a fraction of the total stars in the universe.",
	},
	{
		question:
			"What is the name of the largest volcano in the solar system, located on Mars?",
		options: ["Mount Everest", "Mauna Kea", "Olympus Mons", "Kilimanjaro"],
		correctAnswer: "Olympus Mons",
		hint: "It's about three times the height of Mount Everest.",
	},
	{
		question: "Which moon of Saturn is known for its geysers of water ice?",
		options: ["Titan", "Enceladus", "Mimas", "Rhea"],
		correctAnswer: "Enceladus",
		hint: "Its south pole has plumes of water vapor and ice.",
	},
	{
		question:
			"What is the name of the first artificial satellite launched into space?",
		options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"],
		correctAnswer: "Sputnik 1",
		hint: "It marked the beginning of the space age.",
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
		hint: "It was launched into orbit in 1990.",
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
		hint: "It releases an incredible amount of energy.",
	},
	{
		question: "Which planet has the Great Red Spot, a massive storm system?",
		options: ["Jupiter", "Mars", "Saturn", "Neptune"],
		correctAnswer: "Jupiter",
		hint: "It's a giant gas planet with a prominent feature on its surface.",
	},
	// Add more questions with hints here
];

// Duplicate question detection code
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
console.log("Total questions:", spaceQuizData.length);
const shuffledSpaceQuizData = shuffleArray([...spaceQuizData]);
export default shuffledSpaceQuizData;
