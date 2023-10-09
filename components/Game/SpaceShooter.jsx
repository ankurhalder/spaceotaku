import React, { useEffect, useState } from "react";

const SpaceShooter = () => {
	const [player, setPlayer] = useState({
		x: 375, // Initial player x position
		y: 500, // Initial player y position
		width: 50,
		height: 50,
	});

	const [enemies, setEnemies] = useState([]);
	const [bullets, setBullets] = useState([]);
	const [isSpawning, setIsSpawning] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [playerImg, setPlayerImg] = useState(null);
	const [score, setScore] = useState(0);

	// Set a maximum number of enemies
	const maxEnemies = 5;

	// Array of enemy image paths
	const enemyImages = [
		"/aliens/alien-1.png",
		"aliens/alien-2.png",
		"aliens/alien-3.png",
	];

	useEffect(() => {
		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");

		// Load player image
		const playerImgObj = new Image();
		playerImgObj.src = "/spaceship.png"; // Use the / path to access assets in the public directory
		playerImgObj.onload = () => {
			setPlayerImg(playerImgObj);
		};

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
				// Draw player image
				if (playerImg) {
					ctx.drawImage(
						playerImg,
						player.x,
						player.y,
						player.width,
						player.height
					);
				}

				// Draw and update enemies
				const newEnemies = enemies.map((enemy) => {
					enemy.y += 0.5; // Decreased enemy speed further

					// Randomly select an enemy image
					const enemyImageIndex = Math.floor(
						Math.random() * enemyImages.length
					);
					const enemyImage = new Image();
					enemyImage.src = enemyImages[enemyImageIndex];
					ctx.drawImage(
						enemyImage,
						enemy.x,
						enemy.y,
						enemy.width,
						enemy.height
					);

					return enemy;
				});

				// Update the enemies state with the new positions
				setEnemies(newEnemies);

				// Draw and update bullets
				ctx.fillStyle = "yellow";
				const newBullets = bullets.map((bullet) => {
					if (bullet.active) {
						bullet.y -= 2; // Adjust bullet speed
						ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

						// Check for collisions with enemies
						newEnemies.forEach((enemy, index) => {
							if (isCollision(bullet, enemy)) {
								// Deactivate the bullet and remove the enemy
								bullet.active = false;
								const updatedEnemies = [...newEnemies];
								updatedEnemies.splice(index, 1);
								setEnemies(updatedEnemies);

								// Increase the score
								setScore(score + 10);
							}
						});
					}
					return bullet;
				});

				// Remove inactive bullets
				const filteredBullets = newBullets.filter((bullet) => bullet.active);

				// Update the bullets state with the new positions
				setBullets(filteredBullets);

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
					case " ": // Spacebar for shooting
						shootBullet();
						break;
					default:
						break;
				}
			}
		};

		const shootBullet = () => {
			if (!isGameOver) {
				const newBullet = {
					x: player.x + player.width / 2 - 2.5, // Adjust bullet position
					y: player.y,
					width: 5,
					height: 10,
					active: true,
				};
				setBullets((prevBullets) => [...prevBullets, newBullet]);
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
	}, [player, enemies, bullets, isSpawning, isGameOver]);

	return (
		<div>
			<canvas id="gameCanvas" width="800" height="600"></canvas>
			<div>Score: {score}</div>
		</div>
	);
};

export default SpaceShooter;
