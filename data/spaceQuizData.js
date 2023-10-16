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
	{
		question: "What is the name of the largest moon of Neptune?",
		options: ["Triton", "Proteus", "Nereid", "Larissa"],
		correctAnswer: "Triton",
		hint: "It's the only large moon in the solar system that orbits its planet in a retrograde direction.",
	},
	{
		question:
			"Which planet is often referred to as the 'Evening Star' or 'Morning Star'?",
		options: ["Mars", "Venus", "Mercury", "Uranus"],
		correctAnswer: "Venus",
		hint: "It's the brightest natural object in the night sky after the Moon.",
	},
	{
		question: "What is the name of the most massive planet in the universe?",
		options: ["Jupiter", "Saturn", "Neptune", "Kepler-442b"],
		correctAnswer: "Kepler-442b",
		hint: "It's an exoplanet, not part of our solar system, and is more massive than Jupiter.",
	},
	{
		question:
			"Which planet has the highest surface temperature in our solar system?",
		options: ["Earth", "Mars", "Venus", "Mercury"],
		correctAnswer: "Venus",
		hint: "Its thick atmosphere traps heat, creating a runaway greenhouse effect.",
	},
	{
		question: "What is the largest asteroid in the Kuiper Belt?",
		options: ["Haumea", "Eris", "Quaoar", "Makemake"],
		correctAnswer: "Eris",
		hint: "It's one of the largest known dwarf planets and is located in the outer solar system.",
	},
	{
		question:
			"Which famous comet returns to our solar system approximately every 76 years?",
		options: ["Hale-Bopp", "Halley's Comet", "Comet NEOWISE", "Comet ISON"],
		correctAnswer: "Halley's Comet",
		hint: "It was named after Sir Edmund Halley, who predicted its return.",
	},
	{
		question: "What is the name of the first human in space?",
		options: [
			"Yuri Gagarin",
			"John Glenn",
			"Neil Armstrong",
			"Valentina Tereshkova",
		],
		correctAnswer: "Yuri Gagarin",
		hint: "He made a single orbit around the Earth aboard Vostok 1 in 1961.",
	},
	{
		question: "Which gas is most abundant in the Earth's atmosphere?",
		options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
		correctAnswer: "Nitrogen",
		hint: "It makes up about 78% of the atmosphere by volume.",
	},
	{
		question:
			"What is the name of the mission that successfully landed the first humans on the Moon?",
		options: ["Apollo 13", "Apollo 11", "Apollo 8", "Apollo 1"],
		correctAnswer: "Apollo 11",
		hint: "Neil Armstrong and Buzz Aldrin became the first humans to walk on the lunar surface.",
	},
	{
		question: "Which dwarf planet was reclassified as a 'plutoid' in 2008?",
		options: ["Pluto", "Haumea", "Makemake", "Eris"],
		correctAnswer: "Pluto",
		hint: "It caused quite a controversy when it was demoted from planetary status.",
	},
	{
		question: "What is the name of the first American woman in space?",
		options: [
			"Sally Ride",
			"Valentina Tereshkova",
			"Mae Jemison",
			"Eileen Collins",
		],
		correctAnswer: "Sally Ride",
		hint: "She flew on the Space Shuttle Challenger in 1983.",
	},
	{
		question:
			"Which spacecraft conducted a flyby of Pluto in 2015, providing close-up images of the dwarf planet?",
		options: ["New Horizons", "Cassini", "Voyager 1", "Hubble Space Telescope"],
		correctAnswer: "New Horizons",
		hint: "It revealed detailed information about Pluto's surface and atmosphere.",
	},
	{
		question: "What is the name of the closest star to our solar system?",
		options: [
			"Alpha Centauri A",
			"Proxima Centauri",
			"Barnard's Star",
			"Sirius",
		],
		correctAnswer: "Proxima Centauri",
		hint: "It's part of the Alpha Centauri star system and is just over 4 light-years away.",
	},
	{
		question:
			"Which planet is known for its prominent system of beautiful rings?",
		options: ["Uranus", "Saturn", "Neptune", "Jupiter"],
		correctAnswer: "Saturn",
		hint: "Its ring system is made up of countless icy particles.",
	},
	{
		question:
			"What is the name of the rover that recently landed on Mars in 2021 to search for signs of past life?",
		options: ["Opportunity", "Curiosity", "Perseverance", "Spirit"],
		correctAnswer: "Perseverance",
		hint: "It also carried the first helicopter to fly on another planet, called 'Ingenuity.'",
	},
	{
		question: "Which moon of Uranus is known for its unique sideways rotation?",
		options: ["Miranda", "Oberon", "Ariel", "Umbriel"],
		correctAnswer: "Miranda",
		hint: "Its chaotic terrain is evidence of past geological activity.",
	},
	{
		question: "What is the name of the largest moon of Saturn?",
		options: ["Titan", "Enceladus", "Iapetus", "Mimas"],
		correctAnswer: "Titan",
		hint: "It has a thick atmosphere and is larger than the planet Mercury.",
	},
	{
		question: "Which spacecraft was the first to successfully land on Venus?",
		options: ["Venus Express", "Magellan", "Venera 7", "Pioneer Venus"],
		correctAnswer: "Venera 7",
		hint: "It transmitted data for 23 minutes from the Venusian surface.",
	},
	{
		question: "What is the name of the first woman to travel to space?",
		options: [
			"Valentina Tereshkova",
			"Svetlana Savitskaya",
			"Sally Ride",
			"Mae Jemison",
		],
		correctAnswer: "Valentina Tereshkova",
		hint: "She orbited the Earth in Vostok 6 in 1963.",
	},
	{
		question:
			"Which galaxy is our Milky Way galaxy gravitationally bound to in the Local Group?",
		options: [
			"Andromeda Galaxy",
			"Triangulum Galaxy",
			"Large Magellanic Cloud",
			"Small Magellanic Cloud",
		],
		correctAnswer: "Andromeda Galaxy",
		hint: "It's on a collision course with our Milky Way in about 4.5 billion years.",
	},
	{
		question:
			"What is the name of the largest asteroid in the asteroid belt between Mars and Jupiter?",
		options: ["Ceres", "Pallas", "Vesta", "Hygiea"],
		correctAnswer: "Ceres",
		hint: "It was the first asteroid to be discovered.",
	},
	{
		question:
			"Which spacecraft was the first to orbit Saturn and study its rings and moons up close?",
		options: ["Voyager 1", "Cassini", "New Horizons", "Galileo"],
		correctAnswer: "Cassini",
		hint: "It provided remarkable data about Saturn's system during its mission.",
	},
	{
		question: "What is the name of the largest moon of Mars?",
		options: ["Phobos", "Deimos", "Europa", "Callisto"],
		correctAnswer: "Phobos",
		hint: "It's closer to Mars and orbits it at a rapid pace.",
	},
	{
		question:
			"Which planet in our solar system has the most extensive system of planetary rings?",
		options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
		correctAnswer: "Saturn",
		hint: "Its ring system is made up of countless icy particles.",
	},
	{
		question: "What is the name of the largest volcano on Earth?",
		options: [
			"Mount St. Helens",
			"Mount Kilimanjaro",
			"Mount Everest",
			"Mauna Loa",
		],
		correctAnswer: "Mauna Loa",
		hint: "It's located in Hawaii and is a shield volcano.",
	},
	{
		question:
			"Which planet in our solar system has the longest day, lasting about 243 Earth days?",
		options: ["Venus", "Mars", "Mercury", "Jupiter"],
		correctAnswer: "Venus",
		hint: "Its rotation is incredibly slow compared to its orbit around the Sun.",
	},
	{
		question: "What is the name of the largest moon of Uranus?",
		options: ["Miranda", "Oberon", "Ariel", "Titania"],
		correctAnswer: "Titania",
		hint: "It's one of Uranus' major moons and is known for its icy surface.",
	},
	{
		question:
			"Which spacecraft is currently studying the dwarf planet Pluto and its moon Charon?",
		options: ["Cassini", "Hubble Space Telescope", "New Horizons", "Voyager 2"],
		correctAnswer: "New Horizons",
		hint: "It conducted a historic flyby of Pluto in 2015.",
	},
	{
		question: "What is the name of the first spacecraft to land on a comet?",
		options: ["Rosetta", "Philae", "Churyumov-Gerasimenko", "Comet 67P"],
		correctAnswer: "Philae",
		hint: "It was part of the Rosetta mission and landed on Comet 67P/Churyumov-Gerasimenko.",
	},
	{
		question:
			"Which moon of Saturn is known for its striking equatorial ridge that makes it appear like a ravioli?",
		options: ["Mimas", "Enceladus", "Rhea", "Atlas"],
		correctAnswer: "Atlas",
		hint: "Its unique shape is due to its equatorial ridge and low gravity.",
	},
	{
		question: "What is the name of the first astronaut to perform a spacewalk?",
		options: ["Yuri Gagarin", "Neil Armstrong", "Alexey Leonov", "Buzz Aldrin"],
		correctAnswer: "Alexey Leonov",
		hint: "He became the first person to walk in space in 1965.",
	},
	{
		question:
			"Which spacecraft is known for its mission to the asteroid Bennu and its sample return to Earth?",
		options: ["Hayabusa", "Dawn", "OSIRIS-REx", "Galileo"],
		correctAnswer: "OSIRIS-REx",
		hint: "It collected samples from the asteroid Bennu and returned them to Earth in 2020.",
	},
	{
		question:
			"What is the name of the spacecraft that successfully touched down on the surface of a comet in 2014?",
		options: ["Rosetta", "Philae", "Comet 67P", "Churyumov-Gerasimenko"],
		correctAnswer: "Philae",
		hint: "It was a lander carried by the Rosetta spacecraft and touched down on Comet 67P.",
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
	// console.log("Duplicate questions found:");
	// console.log(duplicateQuestions);
} else {
	// console.log("No duplicate questions found.");
}
// console.log("Total questions:", spaceQuizData.length);
const shuffledSpaceQuizData = shuffleArray([...spaceQuizData]);
export default shuffledSpaceQuizData;
