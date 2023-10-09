// components/SpaceShooter.js
import { useEffect, useRef } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	let context;

	useEffect(() => {
		const canvas = canvasRef.current;
		context = canvas.getContext("2d");

		// Define your game variables here
		let playerX = canvas.width / 2;
		let playerY = canvas.height - 50;
		const playerWidth = 30;
		const playerHeight = 30;
		const playerSpeed = 5;

		// Handle player movement
		const handlePlayerMove = (e) => {
			if (e.key === "ArrowLeft" && playerX > 0) {
				playerX -= playerSpeed;
			} else if (
				e.key === "ArrowRight" &&
				playerX < canvas.width - playerWidth
			) {
				playerX += playerSpeed;
			}
		};

		// Event listeners for player movement
		window.addEventListener("keydown", handlePlayerMove);

		// Game loop
		const gameLoop = () => {
			// Clear the canvas
			context.clearRect(0, 0, canvas.width, canvas.height);

			// Draw the player
			context.fillStyle = "blue";
			context.fillRect(playerX, playerY, playerWidth, playerHeight);

			// Request the next frame
			requestAnimationFrame(gameLoop);
		};

		// Start the game loop
		gameLoop();

		// Clean up event listeners
		return () => {
			window.removeEventListener("keydown", handlePlayerMove);
		};
	}, []);

	return <canvas ref={canvasRef} width={800} height={600} />;
};

export default SpaceShooter;
