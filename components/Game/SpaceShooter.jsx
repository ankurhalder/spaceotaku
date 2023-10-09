import React, { useEffect, useState } from "react";

const SpaceShooter = () => {
	const [player, setPlayer] = useState({
		x: 375, // Initial player x position
		y: 500, // Initial player y position
		width: 50,
		height: 50,
	});

	const [enemies, setEnemies] = useState([]);

	useEffect(() => {
		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");

		// Function to update the game state and render the game
		const updateGame = () => {
			// Clear the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update player position
			ctx.fillStyle = "blue";
			ctx.fillRect(player.x, player.y, player.width, player.height);

			// Update and draw enemies
			ctx.fillStyle = "red";
			const newEnemies = enemies.map((enemy) => {
				enemy.y += 2; // Adjust enemy speed
				ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
				return enemy;
			});

			setEnemies(newEnemies);

			// Remove off-screen enemies
			const remainingEnemies = newEnemies.filter(
				(enemy) => enemy.y < canvas.height
			);
			setEnemies(remainingEnemies);

			// Check for collisions
			const collision = newEnemies.some((enemy) => isCollision(player, enemy));
			if (collision) {
				// Game over logic
				alert("Game Over!");
				document.location.reload();
			}

			// Request animation frame
			requestAnimationFrame(updateGame);
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

		// Event listeners for player movement
		document.addEventListener("keydown", (event) => {
			if (event.key === "ArrowLeft" && player.x > 0) {
				setPlayer({ ...player, x: player.x - 10 });
			} else if (
				event.key === "ArrowRight" &&
				player.x < canvas.width - player.width
			) {
				setPlayer({ ...player, x: player.x + 10 });
			}
		});

		// Create and spawn enemies
		const spawnEnemy = () => {
			const newEnemy = {
				x: Math.random() * (canvas.width - 50),
				y: 0,
				width: 50,
				height: 50,
			};
			setEnemies((prevEnemies) => [...prevEnemies, newEnemy]);
		};

		setInterval(spawnEnemy, 1000);

		// Start the game loop
		updateGame();
	}, []);

	return <canvas id="gameCanvas" width="800" height="600"></canvas>;
};

export default SpaceShooter;
