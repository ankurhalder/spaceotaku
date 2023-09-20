import React, { useState, useEffect } from "react";
import Image from "next/image";
import astronauts from "@/data/astronauts";

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
		<div className="slider-container">
			<h1 className="slider-heading">Astronauts In Space</h1>
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
						<div
							className={`craft-image ${showCraftPanel ? "active" : ""}`}
							onClick={toggleCraftPanel}
						>
							<Image src={craft.image_url} alt={craft.craft} layout="fill" />
						</div>
						<Image
							src={person.image_url}
							alt={person.name}
							layout="fill"
							objectFit="cover"
						/>
						<div className="slide-content">
							<h2>{person.name}</h2>
							<p>Nationality: {person.nationality}</p>
							<button onClick={toggleMorePanel}>Show More</button>
						</div>
					</div>
				))}
			</div>
			<button className="prev-button" onClick={prevSlide}>
				Previous
			</button>
			<button className="next-button" onClick={nextSlide}>
				Next
			</button>
			{showCraftPanel && (
				<div className={`craft-panel ${showCraftPanel ? "active" : ""}`}>
					<div className="craft-header">
						<Image
							src={craft.image_url}
							alt={craft.craft}
							width={100}
							height={100}
						/>
						<h3>{craft.craft}</h3>
					</div>
					<div className="craft-details">
						<p>Description: {craft.description}</p>
						<p>Launch Date: {craft.launch_date}</p>
						<p>Orbit Height: {craft.orbit_height}</p>
						<p>Orbit Period: {craft.orbit_period}</p>
						<p>Number of Modules: {craft.number_of_modules}</p>
						<p>Current Crew Capacity: {craft.current_crew_capacity}</p>
						<p>Length: {craft.length}</p>
						<p>Width: {craft.width}</p>
					</div>
				</div>
			)}
			{showMorePanel && (
				<div className={`more-panel ${showMorePanel ? "active" : ""}`}>
					<h3>{astronaut.name}</h3>
					<p>Role: {astronaut.role}</p>
					<p>Birth Date: {astronaut.birth_date}</p>
					<p>Birth Place: {astronaut.birth_place}</p>
					<p>Missions: {astronaut.missions.join(", ")}</p>
					<p>Total Time in Space: {astronaut.total_time_in_space}</p>
					<p>Spacewalks: {astronaut.spacewalks}</p>
					<p>Spacewalk Duration: {astronaut.spacewalk_duration}</p>
					<p>Educational Background: {astronaut.educational_background}</p>
					<p>Hobbies: {astronaut.hobbies}</p>
				</div>
			)}
		</div>
	);
};

export default Slider;
