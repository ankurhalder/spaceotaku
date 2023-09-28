import { useState, Fragment } from "react";
import planetData from "../../data/planetData";
import agenciesData from "../../data/agenciesData";
import Image from "next/image";
import Head from "next/head";

const PlanetPage = () => {
	const [selectedPlanet, setSelectedPlanet] = useState("sun");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleChangePlanet = (planet) => {
		setSelectedPlanet(planet);
		setIsDropdownOpen(false); // Close the dropdown when a planet is selected
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
	};
	const celestialBody = planetData[selectedPlanet];
	const agencies = agenciesData[selectedPlanet]?.agencies || [];

	const pageTitle = `${celestialBody.name} - Space Otaku | Explore Celestial Bodies`;
	const metaKeywords = `${celestialBody.name}, ${celestialBody.distanceFromSun}, ${celestialBody.numberOfMoons}, ${celestialBody.diameter}, ${celestialBody.orbitalPeriod},space otaku, space, astronomy, celestial bodies`;
	const metaDescription = `Learn about ${celestialBody.name} - its distance from the Sun, number of moons, diameter, orbital period, and more. Explore celestial bodies and space facts on Space Otaku.`;

	return (
		<Fragment>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={metaDescription} />
				<meta name="keywords" content={metaKeywords} />
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/celestialpicker"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/celestialpicker"
				/>
			</Head>
			<div className="planet-page">
				<h1 className="page-title">Explore Celestial Bodies</h1>
				<div className={`planet-dropdown ${isDropdownOpen ? "open" : ""}`}>
					<label onClick={toggleDropdown}>Select a Celestial Body:</label>
					<div className="custom-dropdown">
						<div className="selected-planet" onClick={toggleDropdown}>
							<Image
								src={`/celestial/${selectedPlanet}.png`}
								alt={`${selectedPlanet} Image`}
								layout="responsive"
								width={400}
								height={400}
								objectFit="contain"
								onError={(e) => {
									e.target.src = "/celestial/sun.png";
									e.target.alt = "Fallback Image";
								}}
							/>
						</div>
						{isDropdownOpen && (
							<div className="dropdown-menu">
								{Object.keys(planetData).map((planet) => (
									<div
										key={planet}
										className={`dropdown-item ${
											selectedPlanet === planet ? "active" : ""
										}`}
										onClick={() => handleChangePlanet(planet)}
									>
										{planetData[planet].name}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="planet-data-container">
					<div className="planet-details">
						<h3 className="planet-name">{celestialBody.name}</h3>
						<div className="planet-flex">
							<div className="details">
								<div className="detail-item">
									<strong>Distance from Sun:</strong>
									<span>{celestialBody.distanceFromSun}</span>
								</div>
								<div className="detail-item">
									<strong>Number of Moons:</strong>
									<span>{celestialBody.numberOfMoons}</span>
								</div>
								<div className="detail-item">
									<strong>Diameter:</strong>
									<span>{celestialBody.diameter}</span>
								</div>
								<div className="detail-item">
									<strong>Orbital Period:</strong>
									<span>{celestialBody.orbitalPeriod}</span>
								</div>
								<div className="detail-item">
									<strong>Interesting Fact:</strong>
									<span>{celestialBody.interestingFact}</span>
								</div>
								<div className="detail-item">
									<strong>Surface Features:</strong>
									<span>{celestialBody.surfaceFeatures}</span>
								</div>
								<div className="detail-item">
									<strong>Atmosphere:</strong>
									<span>{celestialBody.atmosphere}</span>
								</div>
							</div>
							<div className="planet-image">
								<Image
									src={`/celestial/${selectedPlanet}.png`}
									alt={`${selectedPlanet} Image`}
									layout="fill"
								/>
							</div>
						</div>
					</div>

					<div className="planet-agency-mission">
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
			</div>
		</Fragment>
	);
};

export default PlanetPage;
