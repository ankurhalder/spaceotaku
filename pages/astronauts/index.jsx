import React, { useState } from "react";
import Image from "next/image"; // Import the Next.js Image component
import astronauts from "@/data/astronauts"; // Import the astronauts data

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showCraftPanel, setShowCraftPanel] = useState(false);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % astronauts.people.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + astronauts.people.length) % astronauts.people.length
		);
	};

	const astronaut = astronauts.people[currentIndex]; // Get the current astronaut data

	const craft = astronauts.spacecrafts.find(
		(craft) => craft.craft === astronaut.craft
	); // Find the craft data for the astronaut's craft

	const toggleCraftPanel = () => {
		setShowCraftPanel(!showCraftPanel);
	};

	return (
		<div className="slider-container">
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
						{/* Display the craft image in the top-right corner */}
						<div
							className="craft-image"
							onClick={toggleCraftPanel}
							onMouseEnter={toggleCraftPanel} // Show craft panel on hover
							onMouseLeave={toggleCraftPanel} // Hide craft panel on mouse leave
						>
							<Image
								src={craft.image_url}
								alt={craft.craft}
								width={50} // Adjust the size as needed
								height={50} // Adjust the size as needed
							/>
						</div>
						<Image
							src={person.image_url}
							alt={person.name}
							layout="fill" // Make the image cover the entire container
							objectFit="cover" // Scale the image to cover the container
						/>
						<div className="slide-content">
							<h2>{person.name}</h2>
							<p>Nationality: {person.nationality}</p>
							<p>Role: {person.role}</p>
							<p>Birth Date: {person.birth_date}</p>
							{/* Add other astronaut information here */}
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
			{/* Display the craft panel when showCraftPanel is true */}
			{showCraftPanel && (
				<div className="craft-panel">
					<Image
						src={craft.image_url}
						alt={craft.craft}
						width={100} // Adjust the size as needed
						height={100} // Adjust the size as needed
					/>
					<div className="craft-details">
						<h3>{craft.craft}</h3>
						<p>Description: {craft.description}</p>
						<p>Launch Date: {craft.launch_date}</p>
						<p>Orbit Height: {craft.orbit_height}</p>
						<p>Orbit Period: {craft.orbit_period}</p>
						{/* Add other craft data here */}
					</div>
				</div>
			)}
		</div>
	);
};

export default Slider;
