const spaceQuiz = [
	{
		index: 0,
		difficulty: "easy",
		question: "What is the name of the first satellite sent into space?",
		options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Mariner 1"],
		correctAnswer: "Sputnik 1",
	},
	{
		index: 1,
		difficulty: "medium",
		question:
			"Who holds the record for the longest continuous time spent in space by an astronaut?",
		options: [
			"Yuri Gagarin",
			"Valentina Tereshkova",
			"Peggy Whitson",
			"John Glenn",
		],
		correctAnswer: "Peggy Whitson",
	},
	{
		index: 2,
		difficulty: "medium",
		question: "Which planet in our solar system is known as the 'Red Planet'?",
		options: ["Venus", "Mars", "Jupiter", "Saturn"],
		correctAnswer: "Mars",
	},
	{
		index: 3,
		difficulty: "easy",
		question:
			"What is the distance from the Earth to the Sun in astronomical units (AU)?",
		options: [
			"93 million miles",
			"93 million kilometers",
			"1 AU",
			"149.6 million kilometers",
		],
		correctAnswer: "1 AU",
	},
	{
		index: 4,
		difficulty: "medium",
		question:
			"Which space agency is known as the Indian Space Research Organisation?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "ISRO",
	},
	{
		index: 5,
		difficulty: "medium",
		question:
			"How many manned Apollo missions successfully landed on the Moon?",
		options: ["5", "6", "7", "8"],
		correctAnswer: "6",
	},
	{
		index: 6,
		difficulty: "medium",
		question:
			"What is the name of the phenomenon where light from a celestial object is stretched and becomes redder as it moves away from an observer?",
		options: [
			"Redshift",
			"Blueshift",
			"Gravitational lensing",
			"Solar eclipse",
		],
		correctAnswer: "Redshift",
	},
	{
		index: 7,
		difficulty: "medium",
		question: "When was the first successful human moon landing by Apollo 11?",
		options: ["1961", "1969", "1975", "1981"],
		correctAnswer: "1969",
	},
	{
		index: 8,
		difficulty: "medium",
		question:
			"What is the term for the scientific study of life outside of Earth?",
		options: [
			"Astrobiology",
			"Exobiology",
			"Extraterrestriology",
			"Xenobiology",
		],
		correctAnswer: "Astrobiology",
	},
	{
		index: 9,
		difficulty: "easy",
		question: "What is the name of the largest moon of Saturn?",
		options: ["Titan", "Io", "Ganymede", "Enceladus"],
		correctAnswer: "Titan",
	},
	{
		index: 10,
		difficulty: "medium",
		question:
			"Which spacecraft is known for its mission to study Jupiter and its moons?",
		options: ["Voyager 2", "Hubble Space Telescope", "Galileo", "New Horizons"],
		correctAnswer: "Galileo",
	},
	{
		index: 11,
		difficulty: "medium",
		question:
			"What is the term for the region of space where gravitational forces are so strong that nothing can escape, not even light?",
		options: ["Event Horizon", "Asteroid Belt", "Dark Matter", "Black Hole"],
		correctAnswer: "Black Hole",
	},
	{
		index: 12,
		difficulty: "easy",
		question: "Which planet is known for its stunning ring system?",
		options: ["Earth", "Mars", "Saturn", "Uranus"],
		correctAnswer: "Saturn",
	},
	{
		index: 13,
		difficulty: "medium",
		question:
			"What is the name of NASA's rover that successfully landed on Mars in February 2021?",
		options: ["Curiosity", "Opportunity", "Perseverance", "Spirit"],
		correctAnswer: "Perseverance",
	},
	{
		index: 14,
		difficulty: "medium",
		question:
			"Which space agency is known for launching the Chang'e missions to explore the Moon?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "CNSA",
	},
	{
		index: 15,
		difficulty: "medium",
		question:
			"What is the approximate age of the universe, according to current scientific estimates?",
		options: [
			"4.5 billion years",
			"10 million years",
			"13.8 billion years",
			"20 billion years",
		],
		correctAnswer: "13.8 billion years",
	},
	{
		index: 16,
		difficulty: "medium",
		question:
			"What is the name of the first American woman to travel in space?",
		options: [
			"Valentina Tereshkova",
			"Sally Ride",
			"Peggy Whitson",
			"Mae Jemison",
		],
		correctAnswer: "Sally Ride",
	},
	{
		index: 17,
		difficulty: "medium",
		question: "Which gas is the most abundant in Earth's atmosphere?",
		options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
		correctAnswer: "Nitrogen",
	},
	{
		index: 18,
		difficulty: "medium",
		question: "What is the name of the nearest galaxy to the Milky Way?",
		options: ["Andromeda", "Triangulum", "Orion", "Sombrero"],
		correctAnswer: "Andromeda",
	},
	{
		index: 19,
		difficulty: "medium",
		question:
			"What is the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
		options: ["Apollo 11", "Hubble Space Telescope", "Voyager 1", "Sputnik 1"],
		correctAnswer: "Sputnik 1",
	},
	{
		index: 20,
		difficulty: "medium",
		question:
			"Which space agency conducted the Mars Science Laboratory mission, landing the Curiosity rover on Mars?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "NASA",
	},
	{
		index: 21,
		difficulty: "medium",
		question:
			"What is the name of the mission that successfully landed humans on the Moon for the first time?",
		options: ["Apollo 8", "Apollo 10", "Apollo 11", "Apollo 13"],
		correctAnswer: "Apollo 11",
	},
	{
		index: 22,
		difficulty: "medium",
		question: "What is the largest planet in our solar system?",
		options: ["Mars", "Saturn", "Jupiter", "Neptune"],
		correctAnswer: "Jupiter",
	},
	{
		index: 23,
		difficulty: "easy",
		question:
			"Which spacecraft was the first to reach Pluto and provide close-up images of the dwarf planet?",
		options: ["Voyager 2", "Hubble Space Telescope", "New Horizons", "Cassini"],
		correctAnswer: "New Horizons",
	},
	{
		index: 24,
		difficulty: "medium",
		question:
			"What is the name of the phenomenon that occurs when the moon passes between the Earth and the Sun, blocking out the Sun's light?",
		options: ["Solar eclipse", "Lunar eclipse", "Asteroid impact", "Supermoon"],
		correctAnswer: "Solar eclipse",
	},
	{
		index: 25,
		difficulty: "medium",
		question:
			"Which space agency was responsible for the Rosetta mission, which successfully landed a probe on a comet?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "ESA",
	},
	{
		index: 26,
		difficulty: "medium",
		question: "What is the name of the largest moon of Neptune?",
		options: ["Triton", "Io", "Ganymede", "Enceladus"],
		correctAnswer: "Triton",
	},
	{
		index: 27,
		difficulty: "medium",
		question:
			"What is the term for a massive, spinning neutron star that emits beams of electromagnetic radiation from its poles?",
		options: ["Supernova", "Pulsar", "Quasar", "Nebula"],
		correctAnswer: "Pulsar",
	},
	{
		index: 28,
		difficulty: "medium",
		question:
			"What is the name of the first artificial satellite launched by the United States?",
		options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Mariner 1"],
		correctAnswer: "Explorer 1",
	},
	{
		index: 29,
		difficulty: "medium",
		question:
			"Which space agency is known for launching the Mars rovers Spirit and Opportunity?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "NASA",
	},
	{
		index: 30,
		difficulty: "medium",
		question:
			"What is the name of the spacecraft that studied the gas giant Jupiter and its moons, including the moon Europa?",
		options: ["Voyager 2", "Hubble Space Telescope", "Galileo", "New Horizons"],
		correctAnswer: "Galileo",
	},
	{
		index: 31,
		difficulty: "medium",
		question: "What is the name of the first woman to travel in space?",
		options: [
			"Valentina Tereshkova",
			"Sally Ride",
			"Peggy Whitson",
			"Mae Jemison",
		],
		correctAnswer: "Valentina Tereshkova",
	},
	{
		index: 32,
		difficulty: "medium",
		question:
			"Which planet is often referred to as Earth's 'sister planet' due to its similar size and composition?",
		options: ["Mars", "Venus", "Jupiter", "Mercury"],
		correctAnswer: "Venus",
	},
	{
		index: 33,
		difficulty: "medium",
		question:
			"What is the name of the space agency responsible for the Chang'e missions to explore the Moon?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "CNSA",
	},
	{
		index: 34,
		difficulty: "medium",
		question:
			"Which spacecraft holds the record for the farthest human-made object from Earth?",
		options: ["Voyager 1", "Hubble Space Telescope", "New Horizons", "Cassini"],
		correctAnswer: "Voyager 1",
	},
	{
		index: 35,
		difficulty: "medium",
		question:
			"What is the name of the largest volcano in our solar system, located on Mars?",
		options: ["Mount Everest", "Mauna Kea", "Olympus Mons", "Mount St. Helens"],
		correctAnswer: "Olympus Mons",
	},
	{
		index: 36,
		difficulty: "medium",
		question:
			"What is the name of the region of space beyond Pluto where many icy objects are located?",
		options: ["Asteroid Belt", "Oort Cloud", "Kuiper Belt", "Orion Nebula"],
		correctAnswer: "Kuiper Belt",
	},
	{
		index: 37,
		difficulty: "medium",
		question:
			"Which space agency successfully landed the Chang'e-4 rover on the far side of the Moon?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "CNSA",
	},
	{
		index: 38,
		difficulty: "medium",
		question:
			"What is the name of the first American space station, launched in 1973?",
		options: ["Skylab", "Mir", "Salyut 1", "Tiangong-1"],
		correctAnswer: "Skylab",
	},
	{
		index: 39,
		difficulty: "medium",
		question:
			"What is the name of the phenomenon where light from a celestial object is bent due to the gravitational field of another object?",
		options: [
			"Redshift",
			"Blueshift",
			"Gravitational lensing",
			"Solar eclipse",
		],
		correctAnswer: "Gravitational lensing",
	},
];
