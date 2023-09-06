import { useState } from "react";
import Layout from "@/layout/Layout";
import planetData from "../../data/planetData";
import agenciesData from "../../data/agenciesData";
import Image from "next/image";
const PlanetPage = () => {
	const [selectedPlanet, setSelectedPlanet] = useState("sun");

	const handleChangePlanet = (event) => {
		setSelectedPlanet(event.target.value);
	};

	const celestialBody = planetData[selectedPlanet];
	const agencies = agenciesData[selectedPlanet]?.agencies || [];

	return (
		<Layout>
			<div className="planet-container">
				<div className="planet-details">
					<h1>{celestialBody.name}</h1>
					<p>Distance from Sun: {celestialBody.distanceFromSun}</p>
					<p>Number of Moons: {celestialBody.numberOfMoons}</p>
					<p>Diameter: {celestialBody.diameter}</p>
					<p>Orbital Period: {celestialBody.orbitalPeriod}</p>
					<p>Interesting Fact: {celestialBody.interestingFact}</p>
					<p>Surface Features: {celestialBody.surfaceFeatures}</p>
					<p>Atmosphere: {celestialBody.atmosphere}</p>
					<h2>Agencies and Missions:</h2>
					<ul>
						{agencies.map((agency, index) => (
							<li key={index}>
								<strong>{agency.name}:</strong> {agency.missions.join(", ")}
							</li>
						))}
					</ul>
				</div>
				<div className="planet-image">
					<Image
						src={`/images/${selectedPlanet}.jpg`}
						alt={`${selectedPlanet} Image`}
						width={500}
						height={500}
					/>
				</div>
			</div>

			<div className="planet-dropdown">
				<label>Select a planet:</label>
				<select value={selectedPlanet} onChange={handleChangePlanet}>
					{Object.keys(planetData).map((planet) => (
						<option key={planet} value={planet}>
							{planetData[planet].name}
						</option>
					))}
				</select>
			</div>
		</Layout>
	);
};

export default PlanetPage;
