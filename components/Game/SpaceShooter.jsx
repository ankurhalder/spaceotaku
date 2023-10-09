// components/SpaceShooter.js
import { useEffect, useRef } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const enemiesRef = useRef([]); // Array to store enemy objects

	useEffect(() => {
		const canvas = canvasRef.current;
		contextRef.current = canvas.getContext("2d");

		// Define your game variables here
		let playerX = canvas.width / 2;
		let playerY = canvas.height - 50;
		const playerWidth = 50;
		const playerHeight = 50;
		let playerSpeedX = 0;
		let playerSpeedY = 0;
		const playerSpeed = 5;

		// Load the spaceship image
		const spaceshipImg = new Image();
		spaceshipImg.src = "/spaceship.png"; // Assuming it's in the public directory

		// Create a function to add enemies
		const addEnemy = () => {
			const enemy = {
				x: Math.random() * canvas.width,
				y: 0,
				width: 40,
				height: 40,
				speed: Math.random() * 2 + 1, // Random enemy speed
			};
			enemiesRef.current.push(enemy);
		};

		// Handle player movement
		const handlePlayerMove = (e) => {
			if (e.key === "ArrowLeft") {
				playerSpeedX = -playerSpeed;
			} else if (e.key === "ArrowRight") {
				playerSpeedX = playerSpeed;
			} else if (e.key === "ArrowUp") {
				playerSpeedY = -playerSpeed;
			} else if (e.key === "ArrowDown") {
				playerSpeedY = playerSpeed;
			}
		};

		const handlePlayerStop = () => {
			playerSpeedX = 0;
			playerSpeedY = 0;
		};

		// Event listeners for player movement
		window.addEventListener("keydown", handlePlayerMove);
		window.addEventListener("keyup", handlePlayerStop);

		// Game loop
		const gameLoop = () => {
			// Clear the canvas
			contextRef.current.clearRect(0, 0, canvas.width, canvas.height);

			// Update player position
			playerX += playerSpeedX;
			playerY += playerSpeedY;

			// Ensure player stays within the canvas boundaries
			if (playerX < 0) playerX = 0;
			if (playerX + playerWidth > canvas.width)
				playerX = canvas.width - playerWidth;
			if (playerY < 0) playerY = 0;
			if (playerY + playerHeight > canvas.height)
				playerY = canvas.height - playerHeight;

			// Draw the player using the spaceship image
			contextRef.current.drawImage(
				spaceshipImg,
				playerX,
				playerY,
				playerWidth,
				playerHeight
			);

			// Add enemies randomly
			if (Math.random() < 0.02) {
				addEnemy();
			}

			// Update and draw enemies
			enemiesRef.current.forEach((enemy, index) => {
				enemy.y += enemy.speed;
				contextRef.current.fillStyle = "red";
				contextRef.current.fillRect(
					enemy.x,
					enemy.y,
					enemy.width,
					enemy.height
				);

				// Remove enemies that are out of the canvas
				if (enemy.y > canvas.height) {
					enemiesRef.current.splice(index, 1);
				}
			});

			// Request the next frame
			requestAnimationFrame(gameLoop);
		};

		// Start the game loop
		gameLoop();

		// Clean up event listeners
		return () => {
			window.removeEventListener("keydown", handlePlayerMove);
			window.removeEventListener("keyup", handlePlayerStop);
		};
	}, []);

	return <canvas ref={canvasRef} width={1200} height={800} />;
};

export default SpaceShooter;
