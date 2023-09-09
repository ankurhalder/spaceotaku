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
			<div className="planetPage">
				<h1 className="pageTitle">Explore Celestial Bodies</h1>
				<div className="planetContainer">
					<div className="planetDetails">
						<h3>{celestialBody.name}</h3>
						<div className="details">
							<div className="detailItem">
								<strong>Distance from Sun:</strong>
								<span>{celestialBody.distanceFromSun}</span>
							</div>
							<div className="detailItem">
								<strong>Number of Moons:</strong>
								<span>{celestialBody.numberOfMoons}</span>
							</div>
							<div className="detailItem">
								<strong>Diameter:</strong>
								<span>{celestialBody.diameter}</span>
							</div>
							<div className="detailItem">
								<strong>Orbital Period:</strong>
								<span>{celestialBody.orbitalPeriod}</span>
							</div>
							<div className="detailItem">
								<strong>Interesting Fact:</strong>
								<span>{celestialBody.interestingFact}</span>
							</div>
							<div className="detailItem">
								<strong>Surface Features:</strong>
								<span>{celestialBody.surfaceFeatures}</span>
							</div>
							<div className="detailItem">
								<strong>Atmosphere:</strong>
								<span>{celestialBody.atmosphere}</span>
							</div>
						</div>
					</div>
					<div className="planetImage">
						<Image
							src={`/celestial/${selectedPlanet}.png`}
							alt={`${selectedPlanet} Image`}
							width={500}
							height={500}
						/>
					</div>
					<div className="agency-mission">
						<h4>Agencies and Missions:</h4>
						<ul>
							{agencies.map((agency, index) => (
								<li key={index}>
									<div className="agency">
										<Image
											src={`/organisations/${agency.image}.png`}
											alt={`${agency.name} Logo`}
											width={60}
											height={60}
										/>
										<strong>{agency.name}:</strong>{" "}
										{agency.missions.map((mission, idx) => (
											<div key={idx} className="mission">
												{mission}
											</div>
										))}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="planetDropdown">
					<label>Select a Celestial Body:</label>
					<select value={selectedPlanet} onChange={handleChangePlanet}>
						{Object.keys(planetData).map((planet) => (
							<option key={planet} value={planet}>
								{planetData[planet].name}
							</option>
						))}
					</select>
				</div>
			</div>
		</Fragment>
	);
};

export default PlanetPage;
