import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";

// Define sets of matching color pairs
const colorPairs = [
	{
		backgroundGradient: "linear-gradient(to right, #FF5733, #FFBD33)",
		buttonGradient: "linear-gradient(to right, #FF5733, #FFBD33)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
	},
	{
		backgroundGradient: "linear-gradient(to right, #33FFC3, #3392FF)",
		buttonGradient: "linear-gradient(to right, #33FFC3, #3392FF)",
		textColor: "#000000",
		h1Color: "#FFFFFF",
	},
	{
		backgroundGradient: "linear-gradient(to right, #FF33F9, #3333FF)",
		buttonGradient: "linear-gradient(to right, #FF33F9, #3333FF)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
	},
	// Add more color pairs as needed
];

function SpaceFacts() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [visitedFactIndices, setVisitedFactIndices] = useState([]);
	const currentColorPair =
		colorPairs[Math.floor(Math.random() * colorPairs.length)];

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
		<div
			className="space-facts-container"
			style={{ background: currentColorPair.backgroundGradient }}
		>
			<h1
				className="space-facts-title"
				style={{ color: currentColorPair.h1Color }}
			>
				Space Facts
			</h1>
			<p
				className="space-facts-text"
				style={{ color: currentColorPair.textColor }}
			>
				{spaceFacts[currentFactIndex].fact}
			</p>
			<button
				className="space-facts-button"
				style={{ background: currentColorPair.buttonGradient }}
				onClick={handleNextFact}
			>
				Next Fact
			</button>
		</div>
	);
}

export default SpaceFacts;
