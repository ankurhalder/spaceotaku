// components/SpaceShooter.js
import { useEffect, useRef } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const playerRef = useRef({ x: 50, y: 50, width: 50, height: 50 });
	const playerSpeed = 8;

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		contextRef.current = context;

		// Define player properties
		const player = playerRef.current;

		// Function to draw the player
		const drawPlayer = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "blue";
			context.fillRect(player.x, player.y, player.width, player.height);
		};

		// Function to keep the player within the canvas boundaries
		const keepPlayerInBounds = () => {
			if (player.x < 0) {
				player.x = 0;
			}
			if (player.x + player.width > canvas.width) {
				player.x = canvas.width - player.width;
			}
			if (player.y < 0) {
				player.y = 0;
			}
			if (player.y + player.height > canvas.height) {
				player.y = canvas.height - player.height;
			}
		};

		// Handle player movement
		const handlePlayerMovement = (e) => {
			switch (e.key) {
				case "ArrowUp":
					player.y -= playerSpeed;
					break;
				case "ArrowDown":
					player.y += playerSpeed;
					break;
				case "ArrowLeft":
					player.x -= playerSpeed;
					break;
				case "ArrowRight":
					player.x += playerSpeed;
					break;
				default:
					break;
			}

			// Keep the player within the canvas boundaries
			keepPlayerInBounds();
			drawPlayer();
		};

		window.addEventListener("keydown", handlePlayerMovement);

		// Initial draw
		drawPlayer();

		return () => {
			window.removeEventListener("keydown", handlePlayerMovement);
		};
	}, []);

	return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default SpaceShooter;
