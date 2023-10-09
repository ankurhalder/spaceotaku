// components/SpaceShooter.js
import { useEffect, useRef, useState } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const enemiesRef = useRef([]);
	const [isGameOver, setIsGameOver] = useState(false);

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
		const playerSpeed = 8; // Increased player speed

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
				speed: Math.random() * 1 + 1,
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

			if (!isGameOver) {
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

				// Add enemies randomly (decreased frequency)
				if (Math.random() < 0.01) {
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

					// Check for collision with player
					if (
						playerX < enemy.x + enemy.width &&
						playerX + playerWidth > enemy.x &&
						playerY < enemy.y + enemy.height &&
						playerY + playerHeight > enemy.y
					) {
						// Collision detected - Game Over
						setIsGameOver(true);
					}

					// Remove enemies that are out of the canvas
					if (enemy.y > canvas.height) {
						enemiesRef.current.splice(index, 1);
					}
				});
			} else {
				// Game Over screen
				contextRef.current.fillStyle = "black";
				contextRef.current.fillRect(0, 0, canvas.width, canvas.height);
				contextRef.current.fillStyle = "white";
				contextRef.current.font = "48px Arial";
				contextRef.current.fillText(
					"Game Over",
					canvas.width / 2 - 150,
					canvas.height / 2 - 24
				);
				contextRef.current.font = "24px Arial";
				contextRef.current.fillText(
					"Press 'R' to Restart",
					canvas.width / 2 - 100,
					canvas.height / 2 + 24
				);
			}

			// Request the next frame
			requestAnimationFrame(gameLoop);
		};

		// Start the game loop
		gameLoop();

		// Handle restart
		const handleRestart = (e) => {
			if (isGameOver && e.key === "r") {
				setIsGameOver(false);
				enemiesRef.current = [];
				playerX = canvas.width / 2;
				playerY = canvas.height - 50;
			}
		};

		// Event listener for restart
		window.addEventListener("keydown", handleRestart);

		// Clean up event listeners
		return () => {
			window.removeEventListener("keydown", handlePlayerMove);
			window.removeEventListener("keyup", handlePlayerStop);
			window.removeEventListener("keydown", handleRestart);
		};
	}, [isGameOver]);

	return <canvas ref={canvasRef} width={1200} height={800} />;
};

export default SpaceShooter;
