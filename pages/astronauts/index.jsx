import React, { useState, useEffect, Fragment } from "react";
import Image from "next/legacy/image";
import astronauts from "@/data/astronauts";
import Head from "next/head";
import { CommonMusic } from "@/components";
const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showCraftPanel, setShowCraftPanel] = useState(false);
	const [showMorePanel, setShowMorePanel] = useState(false);
	const [rotationAngle, setRotationAngle] = useState(90);
	const [translateZ, setTranslateZ] = useState(300);
	useEffect(() => {
		const updateStyles = () => {
			if (window.innerWidth < 450) {
				setRotationAngle(90);
				setTranslateZ(150);
			} else if (window.innerWidth < 1370) {
				setRotationAngle(90);
				setTranslateZ(30);
			} else {
				setRotationAngle(90);
				setTranslateZ(150);
			}
		};
		updateStyles();

		window.addEventListener("resize", updateStyles);

		return () => {
			window.removeEventListener("resize", updateStyles);
		};
	}, []);
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % astronauts.people.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + astronauts.people.length) % astronauts.people.length
		);
	};

	const astronaut = astronauts.people[currentIndex];
	const craft = astronauts.spacecrafts.find(
		(craft) => craft.craft === astronaut.craft
	);

	const toggleCraftPanel = () => {
		setShowCraftPanel(!showCraftPanel);
	};

	const toggleMorePanel = () => {
		setShowMorePanel(!showMorePanel);
	};

	return (
		<Fragment>
			<Head>
				<title>Astronauts in Space | SpaceOtaku</title>
				<meta
					name="description"
					content="Explore the world of astronauts in space with this React component slider. Get information about astronauts, their crafts, and more."
				/>
				<meta
					name="keywords"
					content="space otaku,space,Space facts, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts , Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,space exploration,astronauts, spacecraft, astronaut, information,Astronaut Profiles, Spacecraft Information, Astronaut Biographies, SpaceOtaku Astronaut Slider,Astronauts in Space,Space Exploration,Space Enthusiasts,Cosmic Exploration "
				/>
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/astronauts"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/astronauts"
				/>
			</Head>
			<div className="astronauts-description seo">
				<span className="section-header">Detailed Description:</span>
				<p>
					Unveil the captivating world of astronauts currently orbiting our
					planet through SpaceOtaku&apos;s immersive React component slider.
					This slider is your portal to in-depth astronaut profiles and
					comprehensive spacecraft information, delivering an educational and
					captivating experience for space enthusiasts and eager learners alike.
				</p>

				<span className="section-header">Astronaut Profiles:</span>

				<span className="subsection-header">Biographical Information:</span>
				<p>
					Delve into the lives of astronauts by exploring their biographical
					details, including their names, roles, birthdates, and birthplaces.
					Learn about the diverse backgrounds that have brought them to the
					cosmos.
				</p>

				<span className="subsection-header">Missions and Contributions:</span>
				<p>
					Gain a profound understanding of astronauts&apos; space careers by
					discovering their mission history. Uncover the missions they&apos;ve
					undertaken, their roles in these missions, and their remarkable
					contributions to space exploration.
				</p>

				<span className="subsection-header">Time Spent in Space:</span>
				<p>
					Get a glimpse of each astronaut&apos;s cumulative time spent in space.
					Explore their experiences, challenges, and achievements during their
					journeys beyond Earth&apos;s atmosphere.
				</p>

				<span className="subsection-header">Extravehicular Activities:</span>
				<p>
					Learn about the number of spacewalks each astronaut has undertaken and
					the total duration of their extravehicular activities. Understand
					their critical roles in conducting spacewalks.
				</p>

				<span className="subsection-header">Educational Background:</span>
				<p>
					Explore the academic backgrounds of these space pioneers, providing
					insights into their educational journeys and the knowledge that equips
					them for their extraordinary careers.
				</p>

				<span className="subsection-header">Personal Interests:</span>
				<p>
					Discover the personal interests and hobbies that define these
					astronauts outside their space missions. Get to know these individuals
					as multifaceted explorers and human beings.
				</p>

				<span className="section-header">Spacecraft Information:</span>

				<span className="subsection-header">Craft Particulars:</span>
				<p>
					Get an up-close view of the spacecraft that currently serve as the
					astronauts&apos; home in space. Explore details such as the
					spacecraft&apos;s name, description, launch date, orbit height, and
					orbit period.
				</p>

				<span className="subsection-header">Modules and Crew Capacity:</span>
				<p>
					Gain insights into the number of modules in each spacecraft and the
					current crew capacity. Understand the technical specifications that
					make these spacecraft the lifeline for astronauts during their
					missions.
				</p>

				<span className="subsection-header">Physical Dimensions:</span>
				<p>
					Explore the physical dimensions of the spacecraft, including its
					length and width. Comprehend the structural aspects that enable these
					spacecraft to withstand the rigors of space.
				</p>

				<span className="section-header">
					Perfect for Space Enthusiasts and Curious Minds:
				</span>
				<p>
					Whether you are a seasoned space enthusiast seeking to deepen your
					knowledge or an eager learner with an insatiable curiosity for space
					exploration, SpaceOtaku&apos;s astronaut slider is a comprehensive
					resource that provides both education and engagement. The detailed
					astronaut profiles and spacecraft information offer a holistic view of
					the universe&apos;s vast expanse.
				</p>

				<span className="section-header">Embark on Your Cosmic Journey:</span>
				<p>
					Commence your cosmic journey today by exploring SpaceOtaku&apos;s
					astronaut slider. Uncover the captivating stories and experiences of
					astronauts who journey beyond Earth&apos;s confines. Gain a profound
					appreciation for the challenges and wonders of space exploration.
				</p>

				<span className="section-header">
					If your heart beats for the cosmos, this slider will supply you with a
					trove of information and a heightened understanding of the astronauts
					and spacecraft that navigate the cosmic sea. Begin your exploration
					now and be inspired by the extraordinary individuals who traverse the
					celestial expanse.
				</span>
			</div>
			<CommonMusic></CommonMusic>
			<div className="slider-container">
				<h1 className="slider-heading">Astronauts Currently In Space</h1>
				<div className="slider">
					{astronauts.people.map((person, index) => (
						<div
							className={`slide ${index === currentIndex ? "active" : ""}`}
							key={index}
							style={{
								transform: `rotateY(${
									(index - currentIndex) * rotationAngle
								}deg) translateZ(${translateZ}px)`,
							}}
						>
							<div className="craft-container">
								<p className="craft-name none" onClick={toggleCraftPanel}>
									{craft.craft}
								</p>
							</div>
							<Image
								src={person.image_url}
								alt={person.name}
								layout="fill"
								objectFit="cover"
							/>
							<div className="slide-content">
								<h3>{person.name}</h3>
								<div className="nationality-container">
									<div className="national-flag-container">
										<Image
											src={person.national_flag}
											alt={`${person.name}'s National Flag`}
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<p>Nationality: {person.nationality}</p>
								</div>
								{showMorePanel ? (
									<button onClick={toggleMorePanel}>Show Less...</button>
								) : (
									<button onClick={toggleMorePanel}>Show More...</button>
								)}
							</div>
						</div>
					))}
				</div>
				<div className="button-container">
					<button className="prev-button" onClick={prevSlide}>
						Previous
					</button>
					<button className="next-button" onClick={nextSlide}>
						Next
					</button>
				</div>
				{showCraftPanel && (
					<div className={`craft-panel ${showCraftPanel ? "active" : ""}`}>
						<Image
							src={craft.image_url}
							alt={craft.craft}
							width={100}
							height={100}
						/>
						<div className="close">
							<Image
								src="/bot/close.png"
								layout="responsive"
								width={20}
								height={20}
								alt="Close"
								onClick={toggleCraftPanel}
							></Image>
						</div>
						<h3>{craft.craft}</h3>

						<p>
							<span className="name">Description:</span>
							<span className="name-des">{craft.description}</span>
						</p>
						<p>
							<span className="name">Launch Date:</span>
							<span className="name-des">{craft.launch_date}</span>
						</p>
						<p>
							<span className="name">Orbit Height:</span>
							<span className="name-des">{craft.orbit_height}</span>
						</p>
						<p>
							<span className="name">Orbit Period:</span>
							<span className="name-des">{craft.orbit_period}</span>
						</p>
						<p>
							<span className="name">Number of Modules:</span>
							<span className="name-des">{craft.number_of_modules}</span>
						</p>
						<p>
							<span className="name">Current Crew Capacity:</span>
							<span className="name-des">{craft.current_crew_capacity}</span>
						</p>
						<p>
							<span className="name">Length:</span>
							<span className="name-des">{craft.length}</span>
						</p>
						<p>
							<span className="name">Width:</span>
							<span className="name-des">{craft.width}</span>
						</p>
					</div>
				)}
				{showMorePanel && (
					<div className={`more-panel ${showMorePanel ? "active" : ""}`}>
						<div className="close">
							<Image
								src="/bot/close.png"
								layout="responsive"
								width={20}
								height={20}
								alt="Close"
								onClick={toggleMorePanel}
							></Image>
						</div>
						<h3>{astronaut.name}</h3>
						<p>
							<span className="name">Role:</span>
							<span className="name-des">{astronaut.role}</span>
						</p>
						<p>
							<span className="name">Birth Date:</span>
							<span className="name-des"> {astronaut.birth_date}</span>
						</p>
						<p>
							<span className="name">Birth Place:</span>
							<span className="name-des">{astronaut.birth_place}</span>
						</p>
						<p>
							<span className="name">Missions:</span>
							<span className="name-des">{astronaut.missions.join(", ")}</span>
						</p>
						<p>
							<span className="name">Total Time in Space:</span>
							<span className="name-des">{astronaut.total_time_in_space}</span>
						</p>
						<p>
							<span className="name">Spacewalks:</span>
							<span className="name-des">{astronaut.spacewalks}</span>
						</p>
						<p>
							<span className="name">Spacewalk Duration:</span>
							<span className="name-des">{astronaut.spacewalk_duration}</span>
						</p>
						<p>
							<span className="name"> Educational Background:</span>
							<span className="name-des">
								{astronaut.educational_background}
							</span>
						</p>
						<p>
							<span className="name">Hobbies:</span>
							<span className="name-des">{astronaut.hobbies}</span>
						</p>
					</div>
				)}
			</div>
		</Fragment>
	);
};
export default Slider;
