/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Layout from "@/layout/Layout";
const PlanetPage = () => {
	const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
	const [currentPlanet, setCurrentPlanet] = useState(null);

	const planetData = {
		mercury: {
			name: "Mercury",
			distanceFromSun: "36 million miles",
			numberOfMoons: 0,
		},
		venus: {
			name: "Venus",
			distanceFromSun: "67 million miles",
			numberOfMoons: 0,
		},
		earth: {
			name: "Earth",
			distanceFromSun: "93 million miles",
			numberOfMoons: 1,
		},
		mars: {
			name: "Mars",
			distanceFromSun: "142 million miles",
			numberOfMoons: 2,
		},
		jupiter: {
			name: "Jupiter",
			distanceFromSun: "484 million miles",
			numberOfMoons: 79,
		},
		saturn: {
			name: "Saturn",
			distanceFromSun: "886 million miles",
			numberOfMoons: 82,
		},
		uranus: {
			name: "Uranus",
			distanceFromSun: "1.8 billion miles",
			numberOfMoons: 27,
		},
		neptune: {
			name: "Neptune",
			distanceFromSun: "2.8 billion miles",
			numberOfMoons: 14,
		},
	};

	useEffect(() => {
		const planetName = Object.keys(planetData)[currentPlanetIndex];
		setCurrentPlanet(planetData[planetName]);
	}, [currentPlanetIndex]);

	const planetNames = Object.keys(planetData);

	const handlePlanetChange = (event) => {
		setCurrentPlanetIndex(event.target.value);
	};

	return (
		<Fragment>
			<Layout>
				<div>
					<h1>Planet Information</h1>
					<div>
						<label>Select a planet:</label>
						<select value={currentPlanetIndex} onChange={handlePlanetChange}>
							{planetNames.map((planet, index) => (
								<option key={index} value={index}>
									{planet}
								</option>
							))}
						</select>
					</div>
					{currentPlanet && (
						<div>
							<h2>{currentPlanet.name}</h2>
							<p>Distance from the Sun: {currentPlanet.distanceFromSun}</p>
							<p>Number of Moons: {currentPlanet.numberOfMoons}</p>
						</div>
					)}
				</div>
			</Layout>
		</Fragment>
	);
};

export default PlanetPage;
