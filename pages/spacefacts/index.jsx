/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";
import colorPairs from "@/data/colorPairs";
import Head from "next/head";
import { Fragment } from "react";
const Header = () => (
	<header className="header">
		<h1>Space Facts</h1>
	</header>
);

const Title = () => (
	<h3>
		<span>Did You Know?</span>
	</h3>
);

function SpaceFacts() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [visitedFactIndices, setVisitedFactIndices] = useState([]);

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
			setCurrentFactIndex(randomIndex);
			setVisitedFactIndices([...visitedFactIndices, randomIndex]);
			localStorage.setItem(
				"visitedFactIndices",
				JSON.stringify([...visitedFactIndices, randomIndex])
			);
			const newRandomIndex = Math.floor(Math.random() * colorPairs.length);
			setCurrentColorPair(colorPairs[newRandomIndex]);
		} else {
			setVisitedFactIndices([]);
			localStorage.removeItem("visitedFactIndices");
		}
	};

	return (
		<Fragment>
			<Head>
				<title>Explore Amazing Space Facts | SpaceOtaku</title>
				<meta
					name="description"
					content="Explore fascinating space facts and trivia at SpaceOtaku. Get ready to be amazed by the universe!"
				/>
				<meta
					name="keywords"
					content="space otaku,space,Space facts, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts , Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,"
				/>
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/spacefacts"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/spacefacts"
				/>
			</Head>
			<div className="facts-container">
				<Header />
				<div
					className="space-facts-container"
					style={{
						"--background-gradient": currentColorPair.backgroundGradient,
						"--button-gradient": currentColorPair.newButtonGradient,
						"--radial-gradient": currentColorPair.radialGradient,
						"--box-shadow": currentColorPair.boxShadow,
					}}
				>
					<Title />
					<p className="space-facts-text">
						{spaceFacts[currentFactIndex].fact}
					</p>

					<span>{currentColorPair.index}</span>
					<button className="space-facts-button" onClick={handleNextFact}>
						Next Fact
					</button>
				</div>
			</div>
		</Fragment>
	);
}

export default SpaceFacts;
