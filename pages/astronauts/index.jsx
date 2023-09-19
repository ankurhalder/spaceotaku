import React, { useState } from "react";
import Image from "next/image";
import astronauts from "@/data/astronauts";

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showCraftPanel, setShowCraftPanel] = useState(false);
	const [showMorePanel, setShowMorePanel] = useState(false);

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
								(index - currentIndex) * 45
							}deg) translateZ(300px)`,
						}}
					>
						<div
							className={`craft-image ${showCraftPanel ? "active" : ""}`}
							onClick={toggleCraftPanel}
						>
							<Image
								src={craft.image_url}
								alt={craft.craft}
								width={50}
								height={50}
							/>
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
							{/* Add more details if needed */}
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
					{/* Craft panel content */}
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
					</div>
				</div>
			)}
			{showMorePanel && (
				<div className={`more-panel ${showMorePanel ? "active" : ""}`}>
					{/* "Show More" panel content */}
					<h3>{astronaut.name}</h3>
					<p>Role: {astronaut.role}</p>
					<p>Birth Date: {astronaut.birth_date}</p>
					{/* Add additional astronaut information here */}
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
