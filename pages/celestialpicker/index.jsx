import { useState, useEffect, Fragment } from "react";
import planetData from "../../data/planetData";
import agenciesData from "../../data/agenciesData";
import Image from "next/legacy/image";
import Head from "next/head";
import { CommonMusic } from "@/components";
import {
	LoadingRing,
	LoadingCircle,
	LoadingDefault,
	LoadingDualRing,
	LoadingEllipsis,
	LoadingFacebook,
	LoadingGrid,
	LoadingHourglass,
	LoadingRipple,
	LoadingRoller,
	LoadingSpinner,
} from "@/components";

const loadingComponents = [
	LoadingRing,
	LoadingCircle,
	LoadingDefault,
	LoadingDualRing,
	LoadingEllipsis,
	LoadingFacebook,
	LoadingGrid,
	LoadingHourglass,
	LoadingRipple,
	LoadingRoller,
	LoadingSpinner,
];

const PlanetPage = () => {
	const [selectedPlanet, setSelectedPlanet] = useState("sun");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const handleChangePlanet = (planet) => {
		setIsLoading(true);
		setSelectedPlanet(planet);
		setIsDropdownOpen(false);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	const celestialBody = planetData[selectedPlanet];
	const agencies = agenciesData[selectedPlanet]?.agencies || [];

	const pageTitle = `${celestialBody.name} - Explore Celestial Bodies | Space Otaku`;
	const metaKeywords = `${celestialBody.name}, ${celestialBody.distanceFromSun}, ${celestialBody.numberOfMoons}, ${celestialBody.diameter}, ${celestialBody.orbitalPeriod},space otaku, space, astronomy, celestial bodies`;
	const metaDescription = `Learn about ${celestialBody.name} - its distance from the Sun, number of moons, diameter, orbital period, and more. Explore celestial bodies and space facts on Space Otaku.`;
	const [randomLoadingComponent, setRandomLoadingComponent] = useState(null);

	useEffect(() => {
		const delay = setTimeout(() => {
			setIsLoading(false);
			const randomIndex = Math.floor(Math.random() * loadingComponents.length);
			const RandomComponent = loadingComponents[randomIndex];
			setRandomLoadingComponent(<RandomComponent />);
		}, 2000);

		return () => clearTimeout(delay);
	}, [selectedPlanet]);

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
			{/* <CommonMusic></CommonMusic> */}
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
									<p className="strong">Distance from Sun:</p>
									<span>{celestialBody.distanceFromSun}</span>
								</div>
								<div className="detail-item">
									<p className="strong">Number of Moons:</p>
									<span>{celestialBody.numberOfMoons}</span>
								</div>
								<div className="detail-item">
									<p className="strong">Diameter:</p>
									<span>{celestialBody.diameter}</span>
								</div>
								<div className="detail-item">
									<p className="strong">Orbital Period:</p>
									<span>{celestialBody.orbitalPeriod}</span>
								</div>
								<div className="detail-item">
									<p className="strong">Interesting Fact:</p>
									<span>{celestialBody.interestingFact}</span>
								</div>
								<div className="detail-item">
									<p className="strong">Surface Features:</p>
									<span>{celestialBody.surfaceFeatures}</span>
								</div>
								<div className="detail-item">
									<p className="strong">Atmosphere:</p>
									<span>{celestialBody.atmosphere}</span>
								</div>
							</div>
							<div>
								{isLoading ? (
									randomLoadingComponent
								) : (
									<div className="planet-image">
										<Image
											src={`/celestial/${selectedPlanet}.png`}
											alt={`${selectedPlanet} Image`}
											layout="fill"
										/>
									</div>
								)}
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
											alt={`${agency.image} Logo`}
											width={60}
											height={60}
										/>
										<p className="strong">{agency.name}:</p>{" "}
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
			<div className="seo">
				<p>Explore Celestial Bodies</p>
				<span className="section-header">Detailed Description:</span>
				<p>
					Unveil the enigmatic beauty of celestial bodies as you embark on an
					exploration of {celestialBody.name}. This informative and visually
					captivating page on Space Otaku offers a deep dive into the unique
					characteristics and mysteries of this celestial entity.
				</p>

				<span className="section-header">Explore Celestial Bodies:</span>

				<span className="subsection-header">Select a Celestial Body:</span>
				<p>
					Begin your cosmic journey by selecting a celestial body of your
					choice. Each celestial body presents a world of intriguing details to
					uncover.
				</p>

				<span className="subsection-header">Custom Dropdown:</span>
				<p>
					Use the custom dropdown menu to toggle between different celestial
					bodies. You can select from a variety of celestial bodies such as the
					Sun, planets, and other astronomical objects.
				</p>

				<span className="subsection-header">Visual Representation:</span>
				<p>
					Each celestial body is beautifully represented with an accompanying
					image, allowing you to visually connect with your chosen cosmic
					destination.
				</p>

				<span className="section-header">Celestial Body Data:</span>

				<span className="subsection-header">Celestial Body Name:</span>
				<p>
					Delve into the details of {celestialBody.name}, learning about its
					unique characteristics and place in the cosmos.
				</p>

				<span className="subsection-header">Key Data Points:</span>
				<p>
					Discover essential data points such as its distance from the Sun, the
					number of moons it hosts, its diameter, and orbital period. Gain an
					in-depth understanding of this celestial body&apos;s physical
					attributes and its role in our solar system.
				</p>

				<span className="subsection-header">Interesting Fact:</span>
				<p>
					Explore a captivating fact about {celestialBody.name}, unraveling a
					piece of cosmic wonder that makes it even more fascinating.
				</p>

				<span className="subsection-header">Surface Features:</span>
				<p>
					Dive into the details of {celestialBody.name}&apos;s surface features.
					Understand the landscape and geological characteristics that define
					this celestial body.
				</p>

				<span className="subsection-header">Atmosphere:</span>
				<p>
					Learn about the atmospheric conditions of {celestialBody.name}.
					Understand the gases and elements that surround this cosmic entity.
				</p>

				<span className="section-header">Agencies and Missions:</span>

				<span className="subsection-header">Discover Space Agencies:</span>
				<p>
					Explore the space agencies and organizations that have been involved
					in missions related to {celestialBody.name}.
				</p>

				<span className="subsection-header">Missions List:</span>
				<p>
					Gain insights into the missions conducted by these space agencies
					related to {celestialBody.name}. Each mission opens a window into the
					cosmic exploration and research associated with this celestial body.
				</p>

				<span className="subsection-header">Random Loading Component:</span>
				<p>
					While loading data, enjoy a dynamic and visually engaging loading
					component that adds an element of anticipation and excitement to your
					cosmic journey.
				</p>

				<span className="section-header">Join the Cosmic Exploration:</span>
				<p>
					Whether you&apos;re a seasoned space enthusiast or just starting your
					cosmic exploration, Space Otaku&apos;s PlanetPage provides a
					comprehensive and engaging platform to learn, discover, and appreciate
					the wonders of celestial bodies.
				</p>

				<span className="section-header">How to Explore:</span>
				<p>
					Choose Your Celestial Body: Select a celestial body from the dropdown
					menu to explore its unique attributes. Discover Cosmic Details: Read
					about the celestial body&apos;s name, key data points, interesting
					facts, surface features, and atmosphere. Engage with Visuals: Enjoy
					visual representations of the celestial body and its surroundings.
					Learn About Missions: Dive into the missions and projects conducted by
					space agencies related to your selected celestial body.
				</p>

				<span className="section-header">Ignite Your Cosmic Curiosity:</span>
				<p>
					Begin your cosmic journey today and unlock the mysteries of celestial
					bodies. Whether you seek cosmic knowledge, space facts, or a deeper
					connection with the universe, Space Otaku&apos;s PlanetPage is your
					portal to the cosmos.
				</p>

				<span className="section-header">
					Explore {celestialBody.name} and let your cosmic curiosity thrive!
				</span>
			</div>
		</Fragment>
	);
};

export default PlanetPage;
