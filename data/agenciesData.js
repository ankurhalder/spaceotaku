const agenciesData = {
	sun: {
		name: "Sun",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: [
					"Solar and Heliospheric Observatory (SOHO)",
					"Parker Solar Probe",
					"Solar Dynamics Observatory (SDO)",
				],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Solar Orbiter (planned)", "Cluster", "Ulysses"],
			},
			{
				name: "Indian Space Research Organisation (ISRO)",
				missions: ["Aditya-L1"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["SOLAR"],
			},
		],
	},

	mercury: {
		name: "Mercury",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Mariner 10", "MESSENGER", "BepiColombo"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["BepiColombo"],
			},
			{
				name: "Indian Space Research Organisation (ISRO)",
				missions: ["Mars Orbiter Mission (Mangalyaan)", "Chandrayaan-2"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Merkur (planned)"],
			},
		],
	},
	venus: {
		name: "Venus",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Magellan", "Akatsuki", "Pioneer Venus"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Venus Express", "Venus Climate Orbiter (Akatsuki)"],
			},
			{
				name: "Indian Space Research Organisation (ISRO)",
				missions: ["Venus Orbiter Mission (planned)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venera series"],
			},
		],
	},
	earth: {
		name: "Earth",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: [
					"Various Earth-observing satellites (e.g., Terra, Aqua)",
					"GOES series",
					"Landsat series",
				],
			},
			{
				name: "European Space Agency (ESA)",
				missions: [
					"Sentinel series (e.g., Sentinel-1, Sentinel-2)",
					"Earth Explorers program",
				],
			},
			{
				name: "China National Space Administration (CNSA)",
				missions: ["Gaofen series (e.g., Gaofen-7)"],
			},
			{
				name: "Indian Space Research Organisation (ISRO)",
				missions: ["IRS series (e.g., IRS-1C, IRS-1D)"],
			},
		],
	},
	mars: {
		name: "Mars",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: [
					"Mars rovers (e.g., Curiosity, Perseverance)",
					"InSight",
					"Mars Reconnaissance Orbiter (MRO)",
				],
			},
			{
				name: "European Space Agency (ESA)",
				missions: [
					"Mars Express",
					"ExoMars (upcoming)",
					"Trace Gas Orbiter (TGO)",
				],
			},
			{
				name: "Indian Space Research Organisation (ISRO)",
				missions: ["Mars Orbiter Mission (Mangalyaan)", "Mars 2020"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Mars program"],
			},
		],
	},
	jupiter: {
		name: "Jupiter",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Juno", "Voyager 1 and 2", "Galileo"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["JUpiter ICy moons Explorer (JUICE) (upcoming)", "Ulysses"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Hisaki (Akatsuki)", "Halca (MUSES-C)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venera program (studied Venus, some flybys)"],
			},
		],
	},
	saturn: {
		name: "Saturn",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens", "Voyager 1 and 2"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Phobos program (studied Mars and its moons)"],
			},
		],
	},
	uranus: {
		name: "Uranus",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: [
					"Voyager 2",
					"Hubble Space Telescope (studied Uranus's atmosphere)",
				],
			},
			{
				name: "European Space Agency (ESA)",
				missions: [
					"Herschel (studied Uranus's atmosphere)",
					"Gaia (studied Uranus's moons)",
				],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	neptune: {
		name: "Neptune",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Voyager 2"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: [
					"Herschel (studied Neptune's atmosphere)",
					"Gaia (studied Neptune's moons)",
				],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	pluto: {
		name: "Pluto",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["New Horizons"],
			},
			{
				name: "Johns Hopkins University Applied Physics Laboratory (JHUAPL)",
				missions: ["New Horizons"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	vesta: {
		name: "Vesta (asteroid)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Dawn"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Dawn (collaborative)"],
			},
		],
	},
	pallas: {
		name: "Pallas (asteroid)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Dawn"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Dawn (collaborative)"],
			},
		],
	},
	ceres: {
		name: "Ceres (dwarf planet)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Dawn", "Ceres Reconnaissance Orbiter"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Hayabusa2 (flyby)"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Dawn (collaborative)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	charon: {
		name: "Charon (moon of Pluto)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["New Horizons"],
			},
			{
				name: "Johns Hopkins University Applied Physics Laboratory (JHUAPL)",
				missions: ["New Horizons"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	titania: {
		name: "Titania (moon of Uranus)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Voyager 2"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	oberon: {
		name: "Oberon (moon of Uranus)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Voyager 2"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Herschel (studied Uranus's atmosphere)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	iapetus: {
		name: "Iapetus (moon of Saturn)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	miranda: {
		name: "Miranda (moon of Uranus)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Voyager 2"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Herschel (studied Neptune's atmosphere)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	dione: {
		name: "Dione (moon of Saturn)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	tethys: {
		name: "Tethys (moon of Saturn)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	rhea: {
		name: "Rhea (moon of Saturn)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	phoebe: {
		name: "Phoebe (moon of Saturn)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	amalthea: {
		name: "Amalthea (moon of Jupiter)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Galileo"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venera program (studied Venus, flybys)"],
			},
		],
	},
	thebe: {
		name: "Thebe (moon of Jupiter)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Galileo"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Hisaki (Akatsuki)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
	calypso: {
		name: "Calypso (moon of Saturn)",
		agencies: [
			{
				name: "National Aeronautics and Space Administration (NASA)",
				missions: ["Cassini-Huygens"],
			},
			{
				name: "European Space Agency (ESA)",
				missions: ["Huygens (Cassini-Huygens)"],
			},
			{
				name: "Japan Aerospace Exploration Agency (JAXA)",
				missions: ["Akatsuki (studied Venus, flyby)"],
			},
			{
				name: "Russian Federal Space Agency (ROSCOSMOS)",
				missions: ["Venus program (studied Venus, flybys)"],
			},
		],
	},
};

console.log(agenciesData);

export default agenciesData;
