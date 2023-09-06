const agenciesData = {
	sun: {
		name: "Sun",
		agencies: [
			{
				name: "NASA",
				missions: [
					{
						name: "Solar and Heliospheric Observatory (SOHO)",
						image: "/images/nasa.png",
					},
				],
			},
			{
				name: "ESA (European Space Agency)",
				missions: [
					{
						name: "Solar Orbiter (planned)",
						image: "/images/esa.png",
					},
				],
			},
			{
				name: "ISRO (Indian Space Research Organisation)",
				missions: [
					{
						name: "Aditya-L1 (planned)",
						image: "/images/isro.png",
					},
				],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: [
					{
						name: "SOLAR",
						image: "/images/roscosmos.png",
					},
				],
			},
		],
	},
	mercury: {
		name: "Mercury",
		agencies: [
			{
				name: "NASA",
				missions: ["Mariner 10", "MESSENGER", "BepiColombo"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["BepiColombo"],
			},
			{
				name: "ISRO (Indian Space Research Organisation)",
				missions: ["Mars Orbiter Mission (Mangalyaan)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Merkur (planned)"],
			},
		],
	},
	venus: {
		name: "Venus",
		agencies: [
			{
				name: "NASA",
				missions: ["Magellan", "Akatsuki"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Venus Express"],
			},
			{
				name: "ISRO (Indian Space Research Organisation)",
				missions: ["Venus Orbiter Mission (planned)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venera series"],
			},
		],
	},
	earth: {
		name: "Earth",
		agencies: [
			{
				name: "NASA",
				missions: ["Various Earth-observing satellites (e.g., Terra, Aqua)"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Sentinel series (e.g., Sentinel-1, Sentinel-2)"],
			},
			{
				name: "CNSA (China National Space Administration)",
				missions: ["Gaofen series (e.g., Gaofen-7)"],
			},
			{
				name: "ISRO (Indian Space Research Organisation)",
				missions: ["IRS series (e.g., IRS-1C, IRS-1D)"],
			},
		],
	},
	mars: {
		name: "Mars",
		agencies: [
			{
				name: "NASA",
				missions: ["Mars rovers (e.g., Curiosity, Perseverance)", "InSight"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Mars Express", "ExoMars (upcoming)"],
			},
			{
				name: "ISRO (Indian Space Research Organisation)",
				missions: ["Mars Orbiter Mission (Mangalyaan)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Mars program"],
			},
		],
	},
	jupiter: {
		name: "Jupiter",
		agencies: [
			{
				name: "NASA",
				missions: ["Juno", "Voyager 1 and 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["JUpiter ICy moons Explorer (JUICE) (upcoming)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venera program (studied Venus, some flybys)"],
			},
		],
	},
	saturn: {
		name: "Saturn",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens", "Voyager 1 and 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Phobos program (studied Mars and its moons)"],
			},
		],
	},
	uranus: {
		name: "Uranus",
		agencies: [
			{
				name: "NASA",
				missions: ["Voyager 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	neptune: {
		name: "Neptune",
		agencies: [
			{
				name: "NASA",
				missions: ["Voyager 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Herschel (studied Neptune's atmosphere)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	pluto: {
		name: "Pluto",
		agencies: [
			{
				name: "NASA",
				missions: ["New Horizons"],
			},
			{
				name: "JHUAPL (Johns Hopkins University Applied Physics Laboratory)",
				missions: ["New Horizons"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	vesta: {
		name: "Vesta (asteroid)",
		agencies: [
			{
				name: "NASA",
				missions: ["Dawn"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Dawn (collaborative)"],
			},
		],
	},
	pallas: {
		name: "Pallas (asteroid)",
		agencies: [
			{
				name: "NASA",
				missions: ["Dawn"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Dawn (collaborative)"],
			},
		],
	},
	ceres: {
		name: "Ceres (dwarf planet)",
		agencies: [
			{
				name: "NASA",
				missions: ["Dawn"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Dawn (collaborative)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	charon: {
		name: "Charon (moon of Pluto)",
		agencies: [
			{
				name: "NASA",
				missions: ["New Horizons"],
			},
			{
				name: "JHUAPL (Johns Hopkins University Applied Physics Laboratory)",
				missions: ["New Horizons"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	titania: {
		name: "Titania (moon of Uranus)",
		agencies: [
			{
				name: "NASA",
				missions: ["Voyager 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	oberon: {
		name: "Oberon (moon of Uranus)",
		agencies: [
			{
				name: "NASA",
				missions: ["Voyager 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	iapetus: {
		name: "Iapetus (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	miranda: {
		name: "Miranda (moon of Uranus)",
		agencies: [
			{
				name: "NASA",
				missions: ["Voyager 2"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Herschel (studied Neptune's atmosphere)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	dione: {
		name: "Dione (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	tethys: {
		name: "Tethys (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	rhea: {
		name: "Rhea (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	phoebe: {
		name: "Phoebe (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	amalthea: {
		name: "Amalthea (moon of Jupiter)",
		agencies: [
			{
				name: "NASA",
				missions: ["Galileo"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venera program (studied Venus, flybys)"],
			},
		],
	},
	thebe: {
		name: "Thebe (moon of Jupiter)",
		agencies: [
			{
				name: "NASA",
				missions: ["Galileo"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venera program (studied Venus, flybys)"],
			},
		],
	},
	calypso: {
		name: "Calypso (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	janus: {
		name: "Janus (moon of Saturn)",
		agencies: [
			{
				name: "NASA",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "ESA (European Space Agency)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA (Japan Aerospace Exploration Agency)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS (Russian Federal Space Agency)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
};

export default agenciesData;
