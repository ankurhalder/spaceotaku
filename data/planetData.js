const planetData = {
	sun: {
		name: "Sun",
		distanceFromSun: "0 miles (It's the center of our solar system!)",
		numberOfMoons: 0,
		diameter: "1.4 million kilometers",
		orbitalPeriod: "N/A (It's the center of our solar system!)",
		interestingFact:
			"The Sun is a massive ball of hot, glowing gases and is the primary source of energy for all the planets in our solar system.",
		surfaceFeatures:
			"The Sun's surface has features like sunspots and solar flares.",
		atmosphere:
			"The Sun's atmosphere consists of several layers, including the photosphere, chromosphere, and corona.",
		missions: [
			"Various solar observatories like the Solar and Heliospheric Observatory (SOHO)",
		],
		rings: [],
	},
	mercury: {
		name: "Mercury",
		distanceFromSun: "36 million miles",
		numberOfMoons: 0,
		diameter: "4,880 kilometers",
		orbitalPeriod: "88 Earth days",
		interestingFact:
			"Mercury has extreme temperature variations, with scorching hot days and freezing cold nights.",
		surfaceFeatures:
			"Mercury has numerous craters and a vast, desolate landscape.",
		atmosphere:
			"Mercury has a very thin exosphere composed of trace amounts of helium, hydrogen, and oxygen.",
		missions: ["Mariner 10", "MESSENGER", "BepiColombo"],
		rings: [],
	},
	venus: {
		name: "Venus",
		distanceFromSun: "67 million miles",
		numberOfMoons: 0,
		diameter: "12,104 kilometers",
		orbitalPeriod: "225 Earth days",
		interestingFact:
			"Venus has a thick, toxic atmosphere and is often called Earth's 'evil twin.'",
		surfaceFeatures:
			"Venus has volcanoes, vast lava plains, and a rocky, inhospitable terrain.",
		atmosphere:
			"Venus has a dense atmosphere primarily composed of carbon dioxide with sulfuric acid clouds.",
		missions: ["Venera program", "Magellan", "Akatsuki"],
		rings: [],
	},
	earth: {
		name: "Earth",
		distanceFromSun: "93 million miles",
		numberOfMoons: 1,
		diameter: "12,742 kilometers",
		orbitalPeriod: "365.25 days",
		interestingFact:
			"Earth is the only known planet to support life, with a diverse range of ecosystems and species.",
		surfaceFeatures:
			"Earth boasts diverse landscapes, including mountains, oceans, deserts, and forests.",
		atmosphere:
			"Earth's atmosphere is essential for supporting life and consists mainly of nitrogen and oxygen.",
		missions: [],
		rings: [],
	},
	mars: {
		name: "Mars",
		distanceFromSun: "142 million miles",
		numberOfMoons: 2,
		diameter: "6,779 kilometers",
		orbitalPeriod: "687 Earth days",
		interestingFact:
			"Mars is often called the 'Red Planet' due to its reddish appearance, caused by iron oxide (rust) on its surface.",
		surfaceFeatures:
			"Mars has deep canyons, a polar ice cap, and evidence of ancient riverbeds.",
		atmosphere:
			"Mars has a thin atmosphere primarily composed of carbon dioxide.",
		missions: [
			"Mars rovers (e.g., Curiosity, Perseverance)",
			"Mars Odyssey",
			"InSight",
		],
		rings: [],
	},
	jupiter: {
		name: "Jupiter",
		distanceFromSun: "484 million miles",
		numberOfMoons: 79,
		diameter: "139,822 kilometers",
		orbitalPeriod: "11.9 Earth years",
		interestingFact:
			"Jupiter is the largest planet in our solar system and has a strong magnetic field.",
		surfaceFeatures:
			"Jupiter has a turbulent atmosphere, and its most prominent feature is the Great Red Spot, a massive storm.",
		atmosphere:
			"Jupiter has a thick atmosphere primarily composed of hydrogen and helium.",
		missions: ["Juno", "Galileo", "Voyager 1 and 2"],
		rings: ["Main ring", "Halo ring", "Gossamer ring"],
	},
	saturn: {
		name: "Saturn",
		distanceFromSun: "886 million miles",
		numberOfMoons: 82,
		diameter: "116,464 kilometers",
		orbitalPeriod: "29.5 Earth years",
		interestingFact:
			"Saturn is known for its stunning ring system, which is made up of ice particles and rock.",
		surfaceFeatures:
			"Saturn's surface is mainly composed of gas and does not have a solid surface like Earth.",
		atmosphere:
			"Saturn has a thick atmosphere primarily composed of hydrogen and helium.",
		missions: ["Cassini-Huygens", "Voyager 1 and 2"],
		rings: ["A ring", "B ring", "C ring"],
	},
	uranus: {
		name: "Uranus",
		distanceFromSun: "1.8 billion miles",
		numberOfMoons: 27,
		diameter: "50,724 kilometers",
		orbitalPeriod: "84 Earth years",
		interestingFact:
			"Uranus rotates on its side, making it unique among the planets in our solar system.",
		surfaceFeatures:
			"Uranus has a blue-green appearance due to the presence of methane in its atmosphere.",
		atmosphere:
			"Uranus has a thick atmosphere primarily composed of hydrogen, helium, and methane.",
		missions: ["Voyager 2"],
		rings: ["Alpha ring", "Beta ring", "Epsilon ring"],
	},
	neptune: {
		name: "Neptune",
		distanceFromSun: "2.8 billion miles",
		numberOfMoons: 14,
		diameter: "49,244 kilometers",
		orbitalPeriod: "165 Earth years",
		interestingFact:
			"Neptune's deep blue color is the result of methane in its atmosphere.",
		surfaceFeatures:
			"Neptune has strong winds and dark storm systems, such as the Great Dark Spot.",
		atmosphere:
			"Neptune has a thick atmosphere primarily composed of hydrogen, helium, and methane.",
		missions: ["Voyager 2"],
		rings: ["Adams ring", "Le Verrier ring", "Galle ring"],
	},
	pluto: {
		name: "Pluto",
		distanceFromSun: "3.7 billion miles",
		numberOfMoons: 5,
		diameter: "2,377 kilometers",
		orbitalPeriod: "248 Earth years",
		interestingFact:
			"Pluto was once considered the ninth planet but was reclassified as a dwarf planet in 2006.",
		surfaceFeatures:
			"Pluto's surface is covered in frozen nitrogen and methane, with mountains made of water ice.",
		atmosphere:
			"Pluto has a thin and variable atmosphere composed of nitrogen, methane, and carbon monoxide.",
		missions: ["New Horizons"],
		rings: [],
	},
	moon: {
		name: "Moon (Luna)",
		distanceFromSun: "N/A (Orbits Earth)",
		numberOfMoons: 0,
		diameter: "3,474 kilometers",
		orbitalPeriod: "27.3 Earth days",
		interestingFact:
			"The Moon is Earth's only natural satellite and has a significant impact on Earth's tides.",
		surfaceFeatures:
			"The Moon has plains, mountains, valleys, and impact craters.",
		atmosphere:
			"The Moon has virtually no atmosphere, making it unable to support human life.",
		missions: ["Apollo program", "Lunar Reconnaissance Orbiter"],
		rings: [],
	},
	ganymede: {
		name: "Ganymede",
		distanceFromSun: "484 million miles (Orbits Jupiter)",
		numberOfMoons: 0,
		diameter: "5,268 kilometers",
		orbitalPeriod: "7.2 Earth days (Orbits Jupiter)",
		interestingFact:
			"Ganymede is the largest moon in the solar system and is even larger than the planet Mercury.",
		surfaceFeatures:
			"Ganymede has a mix of older, heavily cratered regions and newer, grooved terrains.",
		atmosphere:
			"Ganymede has a thin oxygen atmosphere, but it's too thin to support human life.",
		missions: ["Galileo", "JUICE (upcoming)"],
		rings: [],
	},
	titan: {
		name: "Titan",
		distanceFromSun: "886 million miles (Orbits Saturn)",
		numberOfMoons: 0,
		diameter: "5,151 kilometers",
		orbitalPeriod: "15.9 Earth days (Orbits Saturn)",
		interestingFact:
			"Titan is the only moon in our solar system with a dense atmosphere and surface liquids.",
		surfaceFeatures:
			"Titan has lakes, rivers, and seas of liquid hydrocarbons, including methane and ethane.",
		atmosphere:
			"Titan's thick atmosphere is mainly composed of nitrogen with traces of methane and other gases.",
		missions: ["Cassini-Huygens", "Dragonfly (upcoming)"],
		rings: [],
	},
	ceres: {
		name: "Ceres",
		distanceFromSun: "257 million miles",
		numberOfMoons: 0,
		diameter: "940 kilometers",
		orbitalPeriod: "4.6 Earth years",
		interestingFact:
			"Ceres is the largest object in the asteroid belt between Mars and Jupiter and is considered a dwarf planet.",
		surfaceFeatures:
			"Ceres has bright spots on its surface and is believed to have a subsurface ocean.",
		atmosphere: "Ceres has a very thin exosphere with traces of water vapor.",
		missions: ["Dawn"],
		rings: [],
	},
	eris: {
		name: "Eris",
		distanceFromSun: "6.4 billion miles",
		numberOfMoons: 1,
		diameter: "2,326 kilometers",
		orbitalPeriod: "558 Earth years",
		interestingFact:
			"Eris is one of the largest known dwarf planets and played a role in the reclassification of Pluto.",
		surfaceFeatures:
			"Eris' surface is icy and highly reflective, similar to Pluto.",
		atmosphere: "Eris likely has a thin atmosphere composed of nitrogen.",
		missions: [],
		rings: [],
	},
	makemake: {
		name: "Makemake",
		distanceFromSun: "4.2 billion miles",
		numberOfMoons: 0,
		diameter: "1,430 kilometers",
		orbitalPeriod: "309 Earth years",
		interestingFact:
			"Makemake is one of the largest known Kuiper Belt objects and is considered a dwarf planet.",
		surfaceFeatures:
			"Makemake's surface is covered in frozen methane and likely has a reddish hue.",
		atmosphere:
			"Makemake is believed to have a tenuous atmosphere, but it has not been directly observed.",
		missions: [],
		rings: [],
	},
	haumea: {
		name: "Haumea",
		distanceFromSun: "6.5 billion miles",
		numberOfMoons: 2,
		diameter: "1,960 kilometers",
		orbitalPeriod: "285 Earth years",
		interestingFact:
			"Haumea is one of the fastest rotating objects in our solar system, giving it an elongated shape.",
		surfaceFeatures:
			"Haumea's surface is thought to be covered in crystalline water ice.",
		atmosphere: "Haumea likely has a very thin or no atmosphere.",
		missions: [],
		rings: [],
	},
	// Additional moons
	io: {
		name: "Io",
		distanceFromPlanet: "262,000 miles (Orbits Jupiter)",
		diameter: "3,643 kilometers",
		orbitalPeriod: "1.8 Earth days (Orbits Jupiter)",
		interestingFact:
			"Io is the most volcanically active body in the solar system, with hundreds of active volcanoes.",
		surfaceFeatures:
			"Io's surface is covered in sulfur compounds and has colorful volcanic plumes.",
		atmosphere:
			"Io has a thin atmosphere primarily composed of sulfur dioxide.",
		missions: ["Galileo", "Voyager 1 and 2"],
		rings: [],
	},
	europa: {
		name: "Europa",
		distanceFromPlanet: "419,000 miles (Orbits Jupiter)",
		diameter: "3,121 kilometers",
		orbitalPeriod: "3.6 Earth days (Orbits Jupiter)",
		interestingFact:
			"Europa has a subsurface ocean beneath its icy crust and is considered a prime target for the search for life beyond Earth.",
		surfaceFeatures:
			"Europa's surface has a complex pattern of cracks and ridges, indicating geological activity.",
		atmosphere: "Europa has a thin atmosphere composed mainly of oxygen.",
		missions: ["Galileo", "Europa Clipper (upcoming)"],
		rings: [],
	},
	enceladus: {
		name: "Enceladus",
		distanceFromPlanet: "147,000 miles (Orbits Saturn)",
		diameter: "504 kilometers",
		orbitalPeriod: "1.4 Earth days (Orbits Saturn)",
		interestingFact:
			"Enceladus has geysers of water ice and organic molecules erupting from its south pole, suggesting the presence of a subsurface ocean.",
		surfaceFeatures:
			"Enceladus has a young, icy surface with prominent fractures and geysers.",
		atmosphere:
			"Enceladus has a tenuous atmosphere primarily composed of water vapor.",
		missions: ["Cassini-Huygens"],
		rings: [],
	},
	triton: {
		name: "Triton",
		distanceFromPlanet: "220,000 miles (Orbits Neptune)",
		diameter: "2,706 kilometers",
		orbitalPeriod: "-5.9 Earth days (Retrograde orbit around Neptune)",
		interestingFact:
			"Triton is the only large moon in the solar system with a retrograde orbit, suggesting it may have been captured by Neptune's gravity.",
		surfaceFeatures:
			"Triton has a diverse surface with icy plains, cryovolcanoes, and impact craters.",
		atmosphere:
			"Triton has a thin atmosphere primarily composed of nitrogen with traces of methane.",
		missions: ["Voyager 2"],
		rings: [],
	},
	// Additional minor objects
	vesta: {
		name: "Vesta",
		distanceFromSun: "117 million miles (In the asteroid belt)",
		numberOfMoons: 0,
		diameter: "525 kilometers",
		orbitalPeriod: "3.6 Earth years",
		interestingFact:
			"Vesta is one of the largest objects in the asteroid belt between Mars and Jupiter and is considered a protoplanet.",
		surfaceFeatures:
			"Vesta has a large impact crater called Rheasilvia and is believed to have a layered structure.",
		atmosphere: "Vesta has no significant atmosphere.",
		missions: ["Dawn"],
		rings: [],
	},
	pallas: {
		name: "Pallas",
		distanceFromSun: "270 million miles (In the asteroid belt)",
		numberOfMoons: 0,
		diameter: "512 kilometers",
		orbitalPeriod: "4.6 Earth years",
		interestingFact:
			"Pallas is one of the largest objects in the asteroid belt and was the second asteroid to be discovered.",
		surfaceFeatures:
			"Pallas' surface is heavily cratered and has a somewhat irregular shape.",
		atmosphere: "Pallas has no significant atmosphere.",
		missions: [],
		rings: [],
	},
	hygiea: {
		name: "Hygiea",
		distanceFromSun: "268 million miles (In the asteroid belt)",
		numberOfMoons: 0,
		diameter: "430 kilometers",
		orbitalPeriod: "5.6 Earth years",
		interestingFact:
			"Hygiea is the fourth-largest object in the asteroid belt and is considered a potential dwarf planet.",
		surfaceFeatures:
			"Hygiea's surface is poorly understood, but it appears to be heavily cratered.",
		atmosphere: "Hygiea has no significant atmosphere.",
		missions: [],
		rings: [],
	},
	eris: {
		name: "Eris",
		distanceFromSun: "6.4 billion miles",
		numberOfMoons: 1,
		diameter: "2,326 kilometers",
		orbitalPeriod: "558 Earth years",
		interestingFact:
			"Eris is one of the largest known dwarf planets and played a role in the reclassification of Pluto.",
		surfaceFeatures:
			"Eris' surface is icy and highly reflective, similar to Pluto.",
		atmosphere: "Eris likely has a thin atmosphere composed of nitrogen.",
		missions: [],
		rings: [],
	},
	miranda: {
		name: "Miranda",
		distanceFromPlanet: "81,500 miles (Orbits Uranus)",
		diameter: "471 kilometers",
		orbitalPeriod: "1.4 Earth days (Orbits Uranus)",
		interestingFact:
			"Miranda is one of Uranus' moons and has a diverse landscape with cliffs, canyons, and ice-covered plains.",
		surfaceFeatures:
			"Miranda's surface features include Verona Rupes, one of the tallest cliffs in the solar system.",
		atmosphere:
			"Miranda has a thin atmosphere composed mainly of water ice and carbon dioxide.",
		missions: ["Voyager 2"],
		rings: [],
	},
	phobos: {
		name: "Phobos",
		distanceFromPlanet: "3,700 miles (Orbits Mars)",
		diameter: "22 kilometers",
		orbitalPeriod: "7.7 hours (Orbits Mars)",
		interestingFact:
			"Phobos is one of Mars' moons and is gradually spiraling inward and will eventually collide with Mars or break apart.",
		surfaceFeatures:
			"Phobos has a heavily cratered surface and is covered in regolith.",
		atmosphere:
			"Phobos has an extremely thin atmosphere with very low pressure.",
		missions: ["Mars Reconnaissance Orbiter", "Mars Express"],
		rings: [],
	},
	deimos: {
		name: "Deimos",
		distanceFromPlanet: "12,400 miles (Orbits Mars)",
		diameter: "12 kilometers",
		orbitalPeriod: "30.3 hours (Orbits Mars)",
		interestingFact:
			"Deimos is the smaller of Mars' two moons and appears to be captured from the asteroid belt.",
		surfaceFeatures:
			"Deimos has a cratered and irregular shape, and its surface is covered in regolith.",
		atmosphere: "Deimos has virtually no atmosphere.",
		missions: ["Mars Reconnaissance Orbiter", "Mars Express"],
		rings: [],
	},
	triton: {
		name: "Triton",
		distanceFromPlanet: "220,000 miles (Orbits Neptune)",
		diameter: "2,706 kilometers",
		orbitalPeriod: "-5.9 Earth days (Retrograde orbit around Neptune)",
		interestingFact:
			"Triton is the only large moon in the solar system with a retrograde orbit, suggesting it may have been captured by Neptune's gravity.",
		surfaceFeatures:
			"Triton has a diverse surface with icy plains, cryovolcanoes, and impact craters.",
		atmosphere:
			"Triton has a thin atmosphere primarily composed of nitrogen with traces of methane.",
		missions: ["Voyager 2"],
		rings: [],
	},

	// Additional minor objects
	vesta: {
		name: "Vesta",
		distanceFromSun: "117 million miles (In the asteroid belt)",
		numberOfMoons: 0,
		diameter: "525 kilometers",
		orbitalPeriod: "3.6 Earth years",
		interestingFact:
			"Vesta is one of the largest objects in the asteroid belt between Mars and Jupiter and is considered a protoplanet.",
		surfaceFeatures:
			"Vesta has a large impact crater called Rheasilvia and is believed to have a layered structure.",
		atmosphere: "Vesta has no significant atmosphere.",
		missions: ["Dawn"],
		rings: [],
	},
	pallas: {
		name: "Pallas",
		distanceFromSun: "270 million miles (In the asteroid belt)",
		numberOfMoons: 0,
		diameter: "512 kilometers",
		orbitalPeriod: "4.6 Earth years",
		interestingFact:
			"Pallas is one of the largest objects in the asteroid belt and was the second asteroid to be discovered.",
		surfaceFeatures:
			"Pallas' surface is heavily cratered and has a somewhat irregular shape.",
		atmosphere: "Pallas has no significant atmosphere.",
		missions: [],
		rings: [],
	},
	hygiea: {
		name: "Hygiea",
		distanceFromSun: "268 million miles (In the asteroid belt)",
		numberOfMoons: 0,
		diameter: "430 kilometers",
		orbitalPeriod: "5.6 Earth years",
		interestingFact:
			"Hygiea is the fourth-largest object in the asteroid belt and is considered a potential dwarf planet.",
		surfaceFeatures:
			"Hygiea's surface is poorly understood, but it appears to be heavily cratered.",
		atmosphere: "Hygiea has no significant atmosphere.",
		missions: [],
		rings: [],
	},
	// ... (additional celestial bodies can be added here)
};

export default planetData;
