import React, { useEffect, useState } from "react";

const SpaceShooter = () => {
	const [player, setPlayer] = useState({
		x: 375, // Initial player x position
		y: 500, // Initial player y position
		width: 50,
		height: 50,
	});

	const [enemies, setEnemies] = useState([]);
	const [isSpawning, setIsSpawning] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);

	// Set a maximum number of enemies
	const maxEnemies = 5;

	useEffect(() => {
		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");

		const updateGame = () => {
			// Clear the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (isGameOver) {
				// Display "Game Over" screen
				ctx.fillStyle = "black";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = "white";
				ctx.font = "30px Arial";
				ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
			} else {
				// Draw and update player position
				ctx.fillStyle = "blue";
				ctx.fillRect(player.x, player.y, player.width, player.height);

				// Draw and update enemies
				ctx.fillStyle = "red";
				const newEnemies = enemies.map((enemy) => {
					enemy.y += 0.5; // Decreased enemy speed further
					ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
					return enemy;
				});

				// Update the enemies state with the new positions
				setEnemies(newEnemies);

				// Check for collisions with player
				newEnemies.forEach((enemy, index) => {
					if (isCollision(player, enemy)) {
						// Remove the collided enemy from the array
						const updatedEnemies = [...newEnemies];
						updatedEnemies.splice(index, 1);
						setEnemies(updatedEnemies);

						// Game over logic
						setIsGameOver(true);
					}
				});

				// Request animation frame
				requestAnimationFrame(updateGame);
			}
		};

		// Helper function to check for collisions
		const isCollision = (obj1, obj2) => {
			return (
				obj1.x < obj2.x + obj2.width &&
				obj1.x + obj1.width > obj2.x &&
				obj1.y < obj2.y + obj2.height &&
				obj1.y + obj1.height > obj2.y
			);
		};

		// Event listener for player movement
		const handleKeyDown = (event) => {
			if (!isGameOver) {
				switch (event.key) {
					case "ArrowLeft":
						setPlayer({ ...player, x: player.x - 10 });
						break;
					case "ArrowRight":
						setPlayer({ ...player, x: player.x + 10 });
						break;
					case "ArrowUp":
						setPlayer({ ...player, y: player.y - 10 });
						break;
					case "ArrowDown":
						setPlayer({ ...player, y: player.y + 10 });
						break;
					default:
						break;
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		// Function to spawn enemies with a delay
		const spawnEnemy = () => {
			if (!isGameOver && enemies.length < maxEnemies && !isSpawning) {
				setIsSpawning(true);

				const newEnemy = {
					x: Math.random() * (canvas.width - 50),
					y: 0,
					width: 50,
					height: 50,
				};
				setEnemies((prevEnemies) => [...prevEnemies, newEnemy]);

				// Schedule the next enemy spawn after a delay
				const spawnDelay = Math.random() * 4000 + 2000; // Random delay between 2 and 6 seconds
				setTimeout(() => {
					setIsSpawning(false);
					spawnEnemy();
				}, spawnDelay);
			}
		};

		// Start the initial enemy spawn
		spawnEnemy();

		// Start the game loop
		requestAnimationFrame(updateGame);

		// Clean up event listeners on component unmount
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [player, enemies, isSpawning, isGameOver]);

	return <canvas id="gameCanvas" width="800" height="600"></canvas>;
};

export default SpaceShooter;
