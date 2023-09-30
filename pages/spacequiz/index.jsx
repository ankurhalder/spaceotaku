// SpaceQuizPage.jsx
import { useState } from "react";
import { EasyMode, MediumMode, HardMode } from "@/components";
export default function SpaceQuizPage() {
	const [selectedDifficulty, setSelectedDifficulty] = useState(null);

	return (
		<div className="quiz-container">
			{!selectedDifficulty ? (
				<div className="difficulty-selection">
					<h2>Select Difficulty:</h2>
					<button onClick={() => setSelectedDifficulty("easy")}>Easy</button>
					<button onClick={() => setSelectedDifficulty("medium")}>
						Medium
					</button>
					<button onClick={() => setSelectedDifficulty("hard")}>Hard</button>
				</div>
			) : (
				<>
					{selectedDifficulty === "easy" && <EasyMode />}
					{selectedDifficulty === "medium" && <MediumMode />}
					{selectedDifficulty === "hard" && <HardMode />}
				</>
			)}
		</div>
	);
}
