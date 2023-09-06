const agenciesData = {
	sun: {
		name: "Sun",
		agencies: [
			{
				name: "NASA",
				missions: [
					{
						name: "Solar and Heliospheric Observatory (SOHO)",
						image: "/body/SOHO.png",
					},
				],
			},
			{
				name: "ESA",
				missions: [
					{
						name: "Solar Orbiter (planned)",
						image: "/body/Solar_Orbiter.png",
					},
				],
			},
			{
				name: "ISRO",
				missions: [
					{
						name: "Aditya-L1 ",
						image: "/body/Aditya-L1.jpg",
					},
				],
			},
			{
				name: "ROSCOSMOS",
				missions: [
					{
						name: "SOLAR",
						image: "/body/ROSCOSMOS-SOLAR.jpeg",
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
				name: "ESA",
				missions: ["BepiColombo"],
			},
			{
				name: "ISRO",
				missions: ["Mars Orbiter Mission (Mangalyaan)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Venus Express"],
			},
			{
				name: "ISRO",
				missions: ["Venus Orbiter Mission (planned)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Sentinel series (e.g., Sentinel-1, Sentinel-2)"],
			},
			{
				name: "CNSA",
				missions: ["Gaofen series (e.g., Gaofen-7)"],
			},
			{
				name: "ISRO",
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
				name: "ESA",
				missions: ["Mars Express", "ExoMars (upcoming)"],
			},
			{
				name: "ISRO",
				missions: ["Mars Orbiter Mission (Mangalyaan)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["JUpiter ICy moons Explorer (JUICE) (upcoming)"],
			},
			{
				name: "JAXA",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Herschel (studied Neptune's atmosphere)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "JAXA",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "ESA",
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
				name: "JAXA",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "ESA",
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
				name: "JAXA",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "ESA",
				missions: ["Dawn (collaborative)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Herschel (studied Neptune's atmosphere)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "JAXA",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "JAXA",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
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
				name: "ESA",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "JAXA",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "ROSCOSMOS",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
};

export default agenciesData;
