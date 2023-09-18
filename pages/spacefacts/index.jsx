import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";
import colorPairs from "@/data/colorPairs";
import styled from "styled-components";

const SpaceFactsContainer = styled.div`
	text-align: center;
	max-width: 500px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 16px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.1),
		rgba(0, 0, 0, 0.2)
	);
	color: #fff;
	position: relative;
	transition: transform 0.2s, box-shadow 0.3s, background 0.3s;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
	}

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${(props) => props.currentColorPair.backgroundGradient};
		opacity: 0.8;
		z-index: -1;
	}

	.space-facts-title {
		font-family: "Pacifico", cursive;
		font-size: 48px;
		font-weight: bold;
		margin-bottom: 20px;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		color: ${(props) => props.currentColorPair.h1Color};
	}

	.space-facts-text {
		font-size: 20px;
		margin-bottom: 30px;
		line-height: 1.6;
		overflow-y: auto;
		max-height: 200px;
		color: ${(props) => props.currentColorPair.textColor};
	}

	.space-facts-button {
		border: none;
		border-radius: 30px;
		padding: 18px 36px;
		font-size: 24px;
		cursor: pointer;
		background: ${(props) => props.currentColorPair.buttonGradient};
		color: ${(props) => props.currentColorPair.h1Color};
		transition: background 0.3s, transform 0.2s;

		&:hover {
			transform: translateY(-2px);
		}
	}
`;

const Header = styled.header`
	background-color: #20232a;
	padding: 20px 0;
	text-align: center;
	border-bottom: 4px solid #61dafb;
`;

const Title = styled.h1`
	color: #61dafb;
	font-size: 48px;
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 4px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

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
		<>
			<Header>
				<Title>Space Facts</Title>
			</Header>
			<SpaceFactsContainer currentColorPair={currentColorPair}>
				<h1 className="space-facts-title">Did You Know?</h1>
				<p className="space-facts-text">{spaceFacts[currentFactIndex].fact}</p>
				<button className="space-facts-button" onClick={handleNextFact}>
					Next Fact
				</button>
			</SpaceFactsContainer>
		</>
	);
}

export default SpaceFacts;
