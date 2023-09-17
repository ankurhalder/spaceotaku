import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";
const colorPairs = [
	{
		backgroundGradient: "linear-gradient(to right, #FF5733, #FFBD33)",
		buttonGradient: "linear-gradient(to right, #FF5733, #FFBD33)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 0,
	},
	{
		backgroundGradient: "linear-gradient(to right, #33FFC3, #3392FF)",
		buttonGradient: "linear-gradient(to right, #33FFC3, #3392FF)",
		textColor: "#000000",
		h1Color: "#FFFFFF",
		index: 1,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FF33F9, #3333FF)",
		buttonGradient: "linear-gradient(to right, #FF33F9, #3333FF)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 2,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		buttonGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 3,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FF6B6B, #FFD166)",
		buttonGradient: "linear-gradient(to right, #FF6B6B, #FFD166)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 4,
	},
	{
		backgroundGradient: "linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)",
		buttonGradient: "linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 5,
	},
	{
		backgroundGradient: "linear-gradient(to right, #667eea, #764ba2)",
		buttonGradient: "linear-gradient(to right, #667eea, #764ba2)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 6,
	},
	{
		backgroundGradient: "linear-gradient(to right, #20E2D7, #F9FEA5)",
		buttonGradient: "linear-gradient(to right, #20E2D7, #F9FEA5)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 7,
	},
	{
		backgroundGradient: "linear-gradient(to right, #B3FFAB, #12FFF7)",
		buttonGradient: "linear-gradient(to right, #B3FFAB, #12FFF7)",
		textColor: "#000000",
		h1Color: "#FFFFFF",
		index: 8,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FFD700, #F0E68C)",
		buttonGradient: "linear-gradient(to right, #FFD700, #F0E68C)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 9,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FA709A, #FDDE6B)",
		buttonGradient: "linear-gradient(to right, #FA709A, #FDDE6B)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 10,
	},
	{
		backgroundGradient: "linear-gradient(to right, #25AAE1, #4481EB)",
		buttonGradient: "linear-gradient(to right, #25AAE1, #4481EB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 11,
	},
	{
		backgroundGradient: "linear-gradient(to right, #00dbde, #fc00ff)",
		buttonGradient: "linear-gradient(to right, #00dbde, #fc00ff)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 12,
	},
	{
		backgroundGradient: "linear-gradient(to right, #00d2ff, #928DAB)",
		buttonGradient: "linear-gradient(to right, #00d2ff, #928DAB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 13,
	},
	{
		backgroundGradient: "linear-gradient(to right, #e55d87, #5FC3E4)",
		buttonGradient: "linear-gradient(to right, #e55d87, #5FC3E4)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 14,
	},
	{
		backgroundGradient: "linear-gradient(to right, #000C40, #607D8B)",
		buttonGradient: "linear-gradient(to right, #000C40, #607D8B)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 15,
	},
	{
		backgroundGradient: "linear-gradient(to right, #614385, #516395)",
		buttonGradient: "linear-gradient(to right, #614385, #516395)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 16,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FC466B, #3F5EFB)",
		buttonGradient: "linear-gradient(to right, #FC466B, #3F5EFB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 17,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DD3E54, #6EE7B7)",
		buttonGradient: "linear-gradient(to right, #DD3E54, #6EE7B7)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 18,
	},
	{
		backgroundGradient: "linear-gradient(to right, #D31027, #EA384D)",
		buttonGradient: "linear-gradient(to right, #D31027, #EA384D)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 19,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FA71CD, #C471F5)",
		buttonGradient: "linear-gradient(to right, #FA71CD, #C471F5)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 20,
	},
	{
		backgroundGradient: "linear-gradient(to right, #F79465, #F16529)",
		buttonGradient: "linear-gradient(to right, #F79465, #F16529)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 21,
	},
	{
		backgroundGradient: "linear-gradient(to right, #2C3E50, #FD746C)",
		buttonGradient: "linear-gradient(to right, #2C3E50, #FD746C)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 22,
	},
	{
		backgroundGradient: "linear-gradient(to right, #D1913C, #FFD194)",
		buttonGradient: "linear-gradient(to right, #D1913C, #FFD194)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 23,
	},
	{
		backgroundGradient: "linear-gradient(to right, #355C7D, #6C5B7B, #C06C84)",
		buttonGradient: "linear-gradient(to right, #355C7D, #6C5B7B, #C06C84)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 24,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DA22FF, #9733EE)",
		buttonGradient: "linear-gradient(to right, #DA22FF, #9733EE)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 25,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FC354C, #0ABFBC)",
		buttonGradient: "linear-gradient(to right, #FC354C, #0ABFBC)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 26,
	},
	{
		backgroundGradient: "linear-gradient(to right, #85FFBD, #FFFB7D)",
		buttonGradient: "linear-gradient(to right, #85FFBD, #FFFB7D)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 27,
	},
	{
		backgroundGradient: "linear-gradient(to right, #00B4DB, #0083B0, #00B4DB)",
		buttonGradient: "linear-gradient(to right, #00B4DB, #0083B0, #00B4DB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 28,
	},
	{
		backgroundGradient: "linear-gradient(to right, #22c1c3, #fdbb2d)",
		buttonGradient: "linear-gradient(to right, #22c1c3, #fdbb2d)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 29,
	},
	{
		backgroundGradient: "linear-gradient(to right, #642B73, #C6426E)",
		buttonGradient: "linear-gradient(to right, #642B73, #C6426E)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 30,
	},
	{
		backgroundGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		buttonGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 31,
	},
	{
		backgroundGradient: "linear-gradient(to right, #3a7bd5, #3a6073)",
		buttonGradient: "linear-gradient(to right, #3a7bd5, #3a6073)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 32,
	},
	{
		backgroundGradient: "linear-gradient(to right, #0D324D, #7F5A83)",
		buttonGradient: "linear-gradient(to right, #0D324D, #7F5A83)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 33,
	},
	{
		backgroundGradient: "linear-gradient(to right, #C33764, #1D2671)",
		buttonGradient: "linear-gradient(to right, #C33764, #1D2671)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 34,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
		buttonGradient: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 35,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FC5C7D, #6A82FB)",
		buttonGradient: "linear-gradient(to right, #FC5C7D, #6A82FB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 36,
	},
	{
		backgroundGradient: "linear-gradient(to right, #E44D26, #F16529)",
		buttonGradient: "linear-gradient(to right, #E44D26, #F16529)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 37,
	},
	{
		backgroundGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		buttonGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 38,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		buttonGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 39,
	},
	{
		backgroundGradient: "linear-gradient(to right, #F2994A, #F2C94C)",
		buttonGradient: "linear-gradient(to right, #F2994A, #F2C94C)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 40,
	},
	{
		backgroundGradient: "linear-gradient(to right, #8e9eab, #eef2f3)",
		buttonGradient: "linear-gradient(to right, #8e9eab, #eef2f3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 41,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A6A9E2, #1EAE98)",
		buttonGradient: "linear-gradient(to right, #A6A9E2, #1EAE98)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 42,
	},
	{
		backgroundGradient: "linear-gradient(to right, #0B486B, #F56217)",
		buttonGradient: "linear-gradient(to right, #0B486B, #F56217)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 43,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DA4453, #89216B)",
		buttonGradient: "linear-gradient(to right, #DA4453, #89216B)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 44,
	},
	{
		backgroundGradient: "linear-gradient(to right, #6a11cb, #2575fc)",
		buttonGradient: "linear-gradient(to right, #6a11cb, #2575fc)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 45,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
		buttonGradient: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 46,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FC5C7D, #6A82FB)",
		buttonGradient: "linear-gradient(to right, #FC5C7D, #6A82FB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 47,
	},
	{
		backgroundGradient: "linear-gradient(to right, #E44D26, #F16529)",
		buttonGradient: "linear-gradient(to right, #E44D26, #F16529)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 48,
	},
	{
		backgroundGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		buttonGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 49,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		buttonGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 50,
	},
	{
		backgroundGradient: "linear-gradient(to right, #F2994A, #F2C94C)",
		buttonGradient: "linear-gradient(to right, #F2994A, #F2C94C)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 51,
	},
	{
		backgroundGradient: "linear-gradient(to right, #8e9eab, #eef2f3)",
		buttonGradient: "linear-gradient(to right, #8e9eab, #eef2f3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 52,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A6A9E2, #1EAE98)",
		buttonGradient: "linear-gradient(to right, #A6A9E2, #1EAE98)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 53,
	},
	{
		backgroundGradient: "linear-gradient(to right, #0B486B, #F56217)",
		buttonGradient: "linear-gradient(to right, #0B486B, #F56217)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 54,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DA4453, #89216B)",
		buttonGradient: "linear-gradient(to right, #DA4453, #89216B)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 55,
	},
	{
		backgroundGradient: "linear-gradient(to right, #6a11cb, #2575fc)",
		buttonGradient: "linear-gradient(to right, #6a11cb, #2575fc)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 56,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
		buttonGradient: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 57,
	},
	{
		backgroundGradient: "linear-gradient(to right, #FC5C7D, #6A82FB)",
		buttonGradient: "linear-gradient(to right, #FC5C7D, #6A82FB)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 58,
	},
	{
		backgroundGradient: "linear-gradient(to right, #E44D26, #F16529)",
		buttonGradient: "linear-gradient(to right, #E44D26, #F16529)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 59,
	},
	{
		backgroundGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		buttonGradient: "linear-gradient(to right, #ff9966, #ff5e62)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 60,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		buttonGradient: "linear-gradient(to right, #A770EF, #CF8BF3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 61,
	},
	{
		backgroundGradient: "linear-gradient(to right, #F2994A, #F2C94C)",
		buttonGradient: "linear-gradient(to right, #F2994A, #F2C94C)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 62,
	},
	{
		backgroundGradient: "linear-gradient(to right, #8e9eab, #eef2f3)",
		buttonGradient: "linear-gradient(to right, #8e9eab, #eef2f3)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 63,
	},
	{
		backgroundGradient: "linear-gradient(to right, #A6A9E2, #1EAE98)",
		buttonGradient: "linear-gradient(to right, #A6A9E2, #1EAE98)",
		textColor: "#000000",
		h1Color: "#000000",
		index: 64,
	},
	{
		backgroundGradient: "linear-gradient(to right, #0B486B, #F56217)",
		buttonGradient: "linear-gradient(to right, #0B486B, #F56217)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 65,
	},
	{
		backgroundGradient: "linear-gradient(to right, #DA4453, #89216B)",
		buttonGradient: "linear-gradient(to right, #DA4453, #89216B)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 66,
	},
	{
		backgroundGradient: "linear-gradient(to right, #6a11cb, #2575fc)",
		buttonGradient: "linear-gradient(to right, #6a11cb, #2575fc)",
		textColor: "#FFFFFF",
		h1Color: "#000000",
		index: 67,
	},
];

function SpaceFacts() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [visitedFactIndices, setVisitedFactIndices] = useState([]);

	useEffect(() => {
		const storedIndices = localStorage.getItem("visitedFactIndices");
		if (storedIndices) {
			setVisitedFactIndices(JSON.parse(storedIndices));
		}
		const lastColorPairIndex = localStorage.getItem("lastColorPairIndex");
		if (lastColorPairIndex) {
			const parsedIndex = parseInt(lastColorPairIndex, 10);
			if (
				!isNaN(parsedIndex) &&
				parsedIndex >= 0 &&
				parsedIndex < colorPairs.length
			) {
				setCurrentColorPair(colorPairs[parsedIndex]);
			}
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
			localStorage.setItem("lastColorPairIndex", newRandomIndex.toString());
		} else {
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
