import { useState } from "react";
import { Fragment } from "react";
import planetData from "../../data/planetData";
import agenciesData from "../../data/agenciesData";
import Image from "next/image";
import Head from "next/head";
const PlanetPage = () => {
	const [selectedPlanet, setSelectedPlanet] = useState("sun");

	const handleChangePlanet = (event) => {
		setSelectedPlanet(event.target.value);
	};

	const celestialBody = planetData[selectedPlanet];
	const agencies = agenciesData[selectedPlanet]?.agencies || [];

	const pageTitle = `${celestialBody.name} - Space Otaku | Explore Celestial Bodies`;
	const metaKeywords = `${celestialBody.name}, ${celestialBody.distanceFromSun}, ${celestialBody.numberOfMoons}, ${celestialBody.diameter}, ${celestialBody.orbitalPeriod}, space, astronomy, celestial bodies`;
	const metaDescription = `Learn about ${celestialBody.name} - its distance from the Sun, number of moons, diameter, orbital period, and more. Explore celestial bodies and space facts on Space Otaku.`;

	return (
		<Fragment>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={metaDescription} />
				<meta name="keywords" content={metaKeywords} />
			</Head>
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
								<div className="agency">
									<Image
										src={`/organisations/${agency.name}.png`}
										alt={`${agency.name} Logo`}
										width={60}
										height={60}
									/>
									<strong>{agency.name}:</strong>{" "}
									{agency.missions.map((mission, idx) => (
										<div key={idx} className="mission">
											<Image
												src={mission.image}
												alt={`${mission.name} Image`}
												width={40}
												height={40}
											/>
											{mission.name}
										</div>
									))}
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="planet-image">
					<Image
						src={`/celestial/${selectedPlanet}.png`}
						alt={`${selectedPlanet} Image`}
						width={500}
						height={500}
					/>
				</div>
			</div>

			<div className="planet-dropdown">
				<label>Select a Celestial Body:</label>
				<select value={selectedPlanet} onChange={handleChangePlanet}>
					{Object.keys(planetData).map((planet) => (
						<option key={planet} value={planet}>
							{planetData[planet].name}
						</option>
					))}
				</select>
			</div>
		</Fragment>
	);
};

export default PlanetPage;
