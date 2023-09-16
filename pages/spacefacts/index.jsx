import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";

function SpaceFacts() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [visitedFactIndices, setVisitedFactIndices] = useState([]);

	useEffect(() => {
		// Retrieve visited fact indices from local storage if available
		const storedIndices = localStorage.getItem("visitedFactIndices");
		if (storedIndices) {
			setVisitedFactIndices(JSON.parse(storedIndices));
		}
	}, []);

	const handleNextFact = () => {
		// Generate an array of unvisited fact indices
		const unvisitedIndices = spaceFacts
			.map((_, index) => index)
			.filter((index) => !visitedFactIndices.includes(index));

		// If there are unvisited facts, choose a random one
		if (unvisitedIndices.length > 0) {
			const randomIndex =
				unvisitedIndices[Math.floor(Math.random() * unvisitedIndices.length)];
			setCurrentFactIndex(randomIndex);

			// Update visitedFactIndices and store it in local storage
			setVisitedFactIndices([...visitedFactIndices, randomIndex]);
			localStorage.setItem(
				"visitedFactIndices",
				JSON.stringify([...visitedFactIndices, randomIndex])
			);
		} else {
			// If all facts have been visited, reset the visitedFactIndices
			setVisitedFactIndices([]);
			localStorage.removeItem("visitedFactIndices");
		}
	};

	return (
		<div className="space-facts-container">
			<h1 className="space-facts-title">Space Facts</h1>
			<p className="space-facts-text">{spaceFacts[currentFactIndex].fact}</p>
			<button className="space-facts-button" onClick={handleNextFact}>
				Next Fact
			</button>
		</div>
	);
}

export default SpaceFacts;
