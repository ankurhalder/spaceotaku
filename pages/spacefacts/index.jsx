import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";
import colorPairs from "@/data/colorPairs";

const Header = () => (
	<header>
		<h1>Space Facts</h1>
	</header>
);

const Title = () => (
	<h1>
		<span>Did You Know?</span>
	</h1>
);

const FadeIn = ({ visible, children }) => (
	<div className={`fade-in ${visible ? "visible" : ""}`}>{children}</div>
);

function SpaceFacts() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [visitedFactIndices, setVisitedFactIndices] = useState([]);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const storedIndices = localStorage.getItem("visitedFactIndices");
		if (storedIndices) {
			setVisitedFactIndices(JSON.parse(storedIndices));
		}
	}, []);

	const [currentColorPair, setCurrentColorPair] = useState(() => {
		const randomIndex = Math.floor(Math.random() * colorPairs.length);
		return colorPairs[randomIndex];
	});

	const handleNextFact = () => {
		const unvisitedIndices = spaceFacts
			.map((_, index) => index)
			.filter((index) => !visitedFactIndices.includes(index));
		if (unvisitedIndices.length > 0) {
			const randomIndex =
				unvisitedIndices[Math.floor(Math.random() * unvisitedIndices.length)];
			setIsVisible(false);
			setTimeout(() => {
				setCurrentFactIndex(randomIndex);
				setVisitedFactIndices([...visitedFactIndices, randomIndex]);
				localStorage.setItem(
					"visitedFactIndices",
					JSON.stringify([...visitedFactIndices, randomIndex])
				);
				const newRandomIndex = Math.floor(Math.random() * colorPairs.length);
				setCurrentColorPair(colorPairs[newRandomIndex]);
				setIsVisible(true);
			}, 500); // Delay for the fade-in effect
		} else {
			setVisitedFactIndices([]);
			localStorage.removeItem("visitedFactIndices");
		}
	};

	return (
		<>
			<Header />
			<div
				className="space-facts-container"
				style={{
					"--background-gradient": currentColorPair.backgroundGradient,
					"--h1-color": currentColorPair.h1Color,
					"--text-color": currentColorPair.textColor,
					"--button-gradient": currentColorPair.buttonGradient,
				}}
			>
				<Title />
				<FadeIn visible={isVisible}>
					<p className="space-facts-text">
						{spaceFacts[currentFactIndex].fact}
					</p>
					<button className="space-facts-button" onClick={handleNextFact}>
						Next Fact
					</button>
				</FadeIn>
			</div>
		</>
	);
}

export default SpaceFacts;
