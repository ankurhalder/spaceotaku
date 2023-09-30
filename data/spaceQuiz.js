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
	{
		index: 40,
		difficulty: "hard",
		question:
			"What is the name of the nearest star system to our solar system?",
		options: ["Alpha Centauri", "Sirius", "Proxima Centauri", "Betelgeuse"],
		correctAnswer: "Alpha Centauri",
	},
	{
		index: 41,
		difficulty: "hard",
		question:
			"Which planet in our solar system has the highest surface temperature, making it one of the hottest planets?",
		options: ["Venus", "Mercury", "Mars", "Jupiter"],
		correctAnswer: "Venus",
	},
	{
		index: 42,
		difficulty: "hard",
		question:
			"What is the name of the space telescope launched by NASA in 1990, known for its stunning images of distant galaxies?",
		options: [
			"Voyager 2",
			"Hubble Space Telescope",
			"Galileo",
			"Chandra X-ray Observatory",
		],
		correctAnswer: "Hubble Space Telescope",
	},
	{
		index: 43,
		difficulty: "hard",
		question:
			"What is the name of the first spacecraft to reach the outermost region of our solar system, known as the heliosphere?",
		options: ["Voyager 1", "Pioneer 10", "New Horizons", "Cassini"],
		correctAnswer: "Voyager 1",
	},
	{
		index: 44,
		difficulty: "medium",
		question:
			"Which famous space observatory is named after an astronomer known for his contributions to our understanding of the universe's expansion?",
		options: [
			"Kepler Space Telescope",
			"Spitzer Space Telescope",
			"James Webb Space Telescope",
			"Edwin Hubble Space Telescope",
		],
		correctAnswer: "Edwin Hubble Space Telescope",
	},
	{
		index: 45,
		difficulty: "hard",
		question:
			"What is the name of the phenomenon where a massive star collapses under its own gravity, resulting in a powerful explosion?",
		options: ["White Dwarf", "Supernova", "Pulsar", "Quasar"],
		correctAnswer: "Supernova",
	},
	{
		index: 46,
		difficulty: "medium",
		question:
			"Which planet has the largest number of natural satellites (moons) in our solar system?",
		options: ["Earth", "Jupiter", "Saturn", "Uranus"],
		correctAnswer: "Jupiter",
	},
	{
		index: 47,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that successfully landed on the surface of the asteroid Bennu, collected a sample, and returned it to Earth?",
		options: ["OSIRIS-REx", "Dawn", "Hayabusa2", "Rosetta"],
		correctAnswer: "OSIRIS-REx",
	},
	{
		index: 48,
		difficulty: "hard",
		question:
			"What is the name of the theoretical concept that suggests the existence of regions in space where the gravitational pull is so strong that not even light can escape?",
		options: ["Event Horizon", "Asteroid Belt", "Dark Matter", "Black Hole"],
		correctAnswer: "Black Hole",
	},
	{
		index: 49,
		difficulty: "medium",
		question:
			"Which space agency was responsible for the mission that successfully landed the Perseverance rover on Mars in 2021?",
		options: ["NASA", "ESA", "ISRO", "CNSA"],
		correctAnswer: "NASA",
	},
	{
		index: 50,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that became the first to orbit a comet and send a lander to its surface, both in 2014?",
		options: ["Rosetta", "Dawn", "Hayabusa2", "Voyager 2"],
		correctAnswer: "Rosetta",
	},
	{
		index: 51,
		difficulty: "medium",
		question:
			"Which moon of Jupiter is known for its subsurface ocean, making it a prime target for the search for extraterrestrial life?",
		options: ["Io", "Ganymede", "Europa", "Callisto"],
		correctAnswer: "Europa",
	},
	{
		index: 52,
		difficulty: "hard",
		question:
			"What is the term for the collision of two neutron stars, resulting in the release of gravitational waves and the creation of heavy elements?",
		options: [
			"Black Hole Collision",
			"Supernova",
			"Neutron Star Merger",
			"White Dwarf Collision",
		],
		correctAnswer: "Neutron Star Merger",
	},
	{
		index: 53,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that successfully entered orbit around Jupiter in 2016 and studied the planet's atmosphere and magnetic field?",
		options: ["Voyager 1", "Hubble Space Telescope", "Galileo", "Juno"],
		correctAnswer: "Juno",
	},
	{
		index: 54,
		difficulty: "medium",
		question:
			"Which planet is known for its unique feature called the Great Red Spot, a giant storm that has raged for centuries?",
		options: ["Earth", "Mars", "Jupiter", "Saturn"],
		correctAnswer: "Jupiter",
	},
	{
		index: 55,
		difficulty: "hard",
		question:
			"What is the name of the first space station ever launched into orbit, by the Soviet Union in 1971?",
		options: ["Skylab", "Mir", "Salyut 1", "Tiangong-1"],
		correctAnswer: "Salyut 1",
	},
	{
		index: 56,
		difficulty: "hard",
		question:
			"What is the name of the region of space believed to contain vast amounts of dark matter and serve as the source of many comets?",
		options: ["Asteroid Belt", "Oort Cloud", "Kuiper Belt", "Orion Nebula"],
		correctAnswer: "Oort Cloud",
	},
	{
		index: 57,
		difficulty: "medium",
		question:
			"Which spacecraft, launched by NASA, conducted a flyby of Pluto in 2015 and provided valuable data about the dwarf planet and its moons?",
		options: ["Voyager 1", "Hubble Space Telescope", "New Horizons", "Cassini"],
		correctAnswer: "New Horizons",
	},
	{
		index: 58,
		difficulty: "hard",
		question:
			"What is the name of the phenomenon where a massive galaxy's gravity bends and magnifies the light of a more distant object behind it?",
		options: [
			"Redshift",
			"Blueshift",
			"Gravitational lensing",
			"Solar eclipse",
		],
		correctAnswer: "Gravitational lensing",
	},
	{
		index: 59,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that studied the rings and moons of Saturn, providing valuable data and stunning images of the planet?",
		options: ["Voyager 1", "Hubble Space Telescope", "Galileo", "Cassini"],
		correctAnswer: "Cassini",
	},
	{
		index: 60,
		difficulty: "hard",
		question:
			"Which moon of Saturn is known for its complex and dynamic geology, with features such as geysers and a subsurface ocean?",
		options: ["Mimas", "Enceladus", "Titan", "Hyperion"],
		correctAnswer: "Enceladus",
	},
	{
		index: 61,
		difficulty: "hard",
		question:
			"What is the name of the mission that aims to study the Sun's outer atmosphere and its solar wind, launching in 2021?",
		options: ["Parker Solar Probe", "SOHO", "STEREO", "Solar Orbiter"],
		correctAnswer: "Parker Solar Probe",
	},
	{
		index: 62,
		difficulty: "medium",
		question:
			"What is the name of the phenomenon where a comet's tail always points away from the Sun due to solar wind and radiation pressure?",
		options: [
			"Solar wind effect",
			"Tidal force",
			"Ablation",
			"Comet tail orientation",
		],
		correctAnswer: "Comet tail orientation",
	},
	{
		index: 63,
		difficulty: "hard",
		question:
			"What is the name of the largest volcano in our solar system, located on Mars and known for its immense size?",
		options: ["Mount Everest", "Mauna Kea", "Olympus Mons", "Mount St. Helens"],
		correctAnswer: "Olympus Mons",
	},
	{
		index: 64,
		difficulty: "hard",
		question:
			"What is the name of the first spacecraft to successfully land on the surface of Venus and transmit data back to Earth?",
		options: ["Magellan", "Venus Express", "Venera 7", "Akatsuki"],
		correctAnswer: "Venera 7",
	},
	{
		index: 65,
		difficulty: "hard",
		question:
			"What is the term for a theoretical concept representing a region in space where the gravitational pull is so strong that nothing can escape, not even light?",
		options: ["Event Horizon", "Asteroid Belt", "Dark Matter", "Singularity"],
		correctAnswer: "Singularity",
	},
	{
		index: 66,
		difficulty: "hard",
		question:
			"What is the name of the first human-made object to reach interstellar space, having crossed the boundary of our solar system?",
		options: ["Pioneer 10", "Voyager 1", "Voyager 2", "New Horizons"],
		correctAnswer: "Voyager 1",
	},
	{
		index: 67,
		difficulty: "medium",
		question: "Which gas is the most abundant in the atmosphere of Venus?",
		options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Sulfur dioxide"],
		correctAnswer: "Carbon dioxide",
	},
	{
		index: 68,
		difficulty: "hard",
		question:
			"What is the name of the massive galaxy cluster that acts as a gravitational lens, allowing astronomers to see more distant objects behind it?",
		options: ["Local Group", "Virgo Cluster", "Coma Cluster", "Bullet Cluster"],
		correctAnswer: "Bullet Cluster",
	},
	{
		index: 69,
		difficulty: "hard",
		question:
			"What is the term for the hypothetical point in space where the gravitational forces of two celestial bodies balance each other, allowing objects to remain relatively stable?",
		options: ["Lagrange Point", "Barycenter", "Roche Limit", "Perihelion"],
		correctAnswer: "Lagrange Point",
	},
	{
		index: 70,
		difficulty: "hard",
		question:
			"What is the name of the first spacecraft to successfully land on Mars, soft-landing on the planet's surface in 1976?",
		options: ["Spirit", "Opportunity", "Viking 1", "Pathfinder"],
		correctAnswer: "Viking 1",
	},
	{
		index: 71,
		difficulty: "hard",
		question:
			"What is the name of the largest known asteroid in our solar system, located in the asteroid belt between Mars and Jupiter?",
		options: ["Ceres", "Vesta", "Eris", "Hygiea"],
		correctAnswer: "Ceres",
	},
	{
		index: 72,
		difficulty: "hard",
		question:
			"What is the term for a region in space where the gravitational forces of a planet and its moon create a gap in the planet's rings?",
		options: ["Kepler Belt", "Asteroid Belt", "Roche Limit", "Lagrange Point"],
		correctAnswer: "Roche Limit",
	},
	{
		index: 73,
		difficulty: "hard",
		question:
			"What is the name of the theoretical concept representing a point in space where matter is infinitely dense and space-time is infinitely curved?",
		options: ["Wormhole", "Black Hole", "Singularity", "Event Horizon"],
		correctAnswer: "Singularity",
	},
	{
		index: 74,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully landed the Philae probe on the surface of Comet 67P/Churyumov-Gerasimenko in 2014?",
		options: ["Rosetta", "Dawn", "Hayabusa2", "Voyager 2"],
		correctAnswer: "Rosetta",
	},
	{
		index: 75,
		difficulty: "hard",
		question:
			"What is the name of the mission that discovered evidence of water ice on the moon's surface by impacting a lunar crater with a spacecraft?",
		options: [
			"Luna 2",
			"Lunar Reconnaissance Orbiter",
			"LCROSS",
			"Chandrayaan-2",
		],
		correctAnswer: "LCROSS",
	},
	{
		index: 76,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully landed the first humans on the Moon, preceding the Apollo program?",
		options: ["Mercury", "Gemini", "Vostok", "Luna"],
		correctAnswer: "Luna",
	},
	{
		index: 77,
		difficulty: "hard",
		question:
			"What is the term for the gravitational force that allows a massive celestial body to hold its moons in stable orbits?",
		options: ["Tidal Force", "Centrifugal Force", "Roche Limit", "Barycenter"],
		correctAnswer: "Barycenter",
	},
	{
		index: 78,
		difficulty: "hard",
		question:
			"What is the name of the mission that detected and provided strong evidence for the existence of gravitational waves, originating from the merger of two black holes?",
		options: [
			"Hubble Space Telescope",
			"Kepler Space Telescope",
			"LIGO",
			"Planck",
		],
		correctAnswer: "LIGO",
	},
	{
		index: 79,
		difficulty: "hard",
		question:
			"What is the name of the first human to perform a spacewalk (extravehicular activity) in outer space?",
		options: [
			"Yuri Gagarin",
			"Neil Armstrong",
			"Alexei Leonov",
			"Alan Shepard",
		],
		correctAnswer: "Alexei Leonov",
	},
	{
		index: 80,
		difficulty: "hard",
		question:
			"What is the name of the mission that discovered and provided direct evidence for the existence of water ice on the surface of the dwarf planet Pluto?",
		options: ["Voyager 2", "Hubble Space Telescope", "New Horizons", "Cassini"],
		correctAnswer: "New Horizons",
	},
	{
		index: 81,
		difficulty: "hard",
		question:
			"What is the name of the space probe that provided the first close-up images of the gas giant Jupiter and its largest moons?",
		options: ["Voyager 1", "Hubble Space Telescope", "Galileo", "Cassini"],
		correctAnswer: "Galileo",
	},
	{
		index: 82,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that was the first to successfully land on the asteroid Eros and study it up close?",
		options: ["OSIRIS-REx", "Dawn", "Hayabusa2", "NEAR Shoemaker"],
		correctAnswer: "NEAR Shoemaker",
	},
	{
		index: 83,
		difficulty: "hard",
		question:
			"What is the term for a massive and extremely bright celestial object at the center of a galaxy, thought to be powered by a supermassive black hole?",
		options: ["White Dwarf", "Supernova", "Pulsar", "Quasar"],
		correctAnswer: "Quasar",
	},
	{
		index: 84,
		difficulty: "hard",
		question:
			"What is the name of the mission that discovered the first evidence of organic molecules on Mars?",
		options: ["Curiosity", "Opportunity", "Perseverance", "Spirit"],
		correctAnswer: "Curiosity",
	},
	{
		index: 85,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that successfully entered orbit around the dwarf planet Ceres and studied its surface?",
		options: ["Rosetta", "Dawn", "Hayabusa2", "Voyager 2"],
		correctAnswer: "Dawn",
	},
	{
		index: 86,
		difficulty: "hard",
		question:
			"What is the term for the theoretical concept representing a shortcut through space-time, allowing for faster-than-light travel?",
		options: ["Wormhole", "Black Hole", "Singularity", "Event Horizon"],
		correctAnswer: "Wormhole",
	},
	{
		index: 87,
		difficulty: "hard",
		question:
			"What is the name of the space telescope launched by ESA in 2009, designed to study the universe in the X-ray spectrum?",
		options: [
			"Voyager 2",
			"Hubble Space Telescope",
			"Chandra X-ray Observatory",
			"James Webb Space Telescope",
		],
		correctAnswer: "Chandra X-ray Observatory",
	},
	{
		index: 88,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that successfully landed on the surface of Saturn's largest moon, Titan, and deployed the Huygens probe?",
		options: ["Voyager 1", "Hubble Space Telescope", "Cassini", "Pioneer 10"],
		correctAnswer: "Cassini",
	},
	{
		index: 89,
		difficulty: "hard",
		question:
			"What is the term for a theoretical concept representing a point in space where the gravitational forces of three or more celestial bodies balance each other, allowing objects to remain relatively stable?",
		options: ["Lagrange Point", "Barycenter", "Roche Limit", "Perihelion"],
		correctAnswer: "Lagrange Point",
	},
	{
		index: 90,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully landed the first humans on the surface of Mars?",
		options: ["Mars 1", "Mars 3", "Viking 1", "Pathfinder"],
		correctAnswer: "Viking 1",
	},
	{
		index: 91,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that successfully orbited and studied the comet 67P/Churyumov-Gerasimenko, launched by ESA?",
		options: ["Rosetta", "Dawn", "Hayabusa2", "Voyager 2"],
		correctAnswer: "Rosetta",
	},
	{
		index: 92,
		difficulty: "hard",
		question:
			"What is the term for the process by which a massive star collapses under its own gravity and forms a black hole?",
		options: [
			"Nebular Hypothesis",
			"Supernova",
			"Stellar Evolution",
			"Black Hole Formation",
		],
		correctAnswer: "Black Hole Formation",
	},
	{
		index: 93,
		difficulty: "hard",
		question:
			"What is the name of the spacecraft that conducted the first successful flyby of Pluto, providing valuable data and images of the dwarf planet and its moons?",
		options: ["Voyager 1", "Hubble Space Telescope", "New Horizons", "Cassini"],
		correctAnswer: "New Horizons",
	},
	{
		index: 94,
		difficulty: "hard",
		question:
			"What is the name of the phenomenon where a star's light is temporarily blocked by a planet passing in front of it?",
		options: ["Nova", "Supernova", "Stellar Occultation", "Pulsar"],
		correctAnswer: "Stellar Occultation",
	},
	{
		index: 95,
		difficulty: "hard",
		question:
			"What is the term for the point in space where an object in orbit experiences the greatest gravitational force from a celestial body it's orbiting?",
		options: ["Perihelion", "Apsis", "Ecliptic", "Apoapsis"],
		correctAnswer: "Perihelion",
	},
	{
		index: 96,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully placed the Mars rover Sojourner on the surface of Mars in 1997?",
		options: ["Curiosity", "Opportunity", "Perseverance", "Pathfinder"],
		correctAnswer: "Pathfinder",
	},
	{
		index: 97,
		difficulty: "hard",
		question:
			"What is the term for a theoretical concept representing a massive, spinning neutron star that emits beams of electromagnetic radiation from its poles?",
		options: ["Supernova", "Pulsar", "Quasar", "Nebula"],
		correctAnswer: "Pulsar",
	},
	{
		index: 98,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully placed the first artificial satellite in orbit around Earth?",
		options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Mariner 1"],
		correctAnswer: "Sputnik 1",
	},
	{
		index: 99,
		difficulty: "hard",
		question:
			"What is the term for the dense, central region of a galaxy, often containing a supermassive black hole?",
		options: [
			"Stellar Nursery",
			"Dark Matter Halo",
			"Galactic Core",
			"Interstellar Medium",
		],
		correctAnswer: "Galactic Core",
	},
	{
		index: 100,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully placed the first human on the Moon?",
		options: ["Apollo 8", "Apollo 10", "Apollo 11", "Apollo 13"],
		correctAnswer: "Apollo 11",
	},
	{
		index: 101,
		difficulty: "hard",
		question:
			"What is the term for the hypothetical region of space where matter and energy are sucked into a black hole, beyond the event horizon?",
		options: ["Singularity", "Event Horizon", "Ergosphere", "Quasar Zone"],
		correctAnswer: "Event Horizon",
	},
	{
		index: 102,
		difficulty: "hard",
		question:
			"What is the name of the mission that successfully placed the first human in space?",
		options: [
			"Yuri Gagarin",
			"Alan Shepard",
			"John Glenn",
			"Valentina Tereshkova",
		],
		correctAnswer: "Yuri Gagarin",
	},
	{
		index: 103,
		difficulty: "hard",
		question:
			"What is the term for the process by which a star's core collapses, resulting in a massive explosion and the ejection of outer layers?",
		options: ["Stellar Occultation", "Stellar Evolution", "Supernova", "Nova"],
		correctAnswer: "Supernova",
	},
];
