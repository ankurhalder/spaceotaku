import React, { useState } from "react";

import astronauts from "@/data/astronauts"; // Import the astronauts data

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

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
						<img src={person.image_url} alt={person.name} />
						<div className="slide-content">
							<h2>{person.name}</h2>
							<p>Nationality: {person.nationality}</p>
							{/* Add more astronaut information here */}
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
		</div>
	);
};

export default Slider;
