// components/SpaceShooter.js
import { useEffect, useRef, useState } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const enemiesRef = useRef([]);
	const bulletsRef = useRef([]);
	const [score, setScore] = useState(0);

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
		spaceshipImg.src = "/spaceship.png";

		// Create a function to handle bullet creation
		const createBullet = () => {
			const bullet = {
				x: playerX + playerWidth / 2 - 2.5,
				y: playerY,
				width: 5,
				height: 20,
				speed: 5,
			};
			bulletsRef.current.push(bullet);
		};

		// Create a function to handle bullet movement
		const moveBullets = () => {
			bulletsRef.current.forEach((bullet, bulletIndex) => {
				bullet.y -= bullet.speed;

				// Remove bullets that go off the canvas
				if (bullet.y < 0) {
					bulletsRef.current.splice(bulletIndex, 1);
				}
			});
		};

		// Create a function to add enemies
		const addEnemy = () => {
			const enemy = {
				x: Math.random() * canvas.width,
				y: 0,
				width: 40,
				height: 40,
				speed: Math.random() * 2 + 1,
			};
			enemiesRef.current.push(enemy);
		};

		// Event listeners for player movement
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

		// Event listener for shooting
		window.addEventListener("keydown", (e) => {
			if (e.key === " ") {
				createBullet();
			}
		});

		// Game loop
		const gameLoop = () => {
			// Clear the canvas
			contextRef.current.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw enemies
			enemiesRef.current.forEach((enemy, enemyIndex) => {
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
					enemiesRef.current.splice(enemyIndex, 1);
				}
			});

			// Update and draw bullets
			moveBullets();
			bulletsRef.current.forEach((bullet) => {
				contextRef.current.fillStyle = "yellow";
				contextRef.current.fillRect(
					bullet.x,
					bullet.y,
					bullet.width,
					bullet.height
				);
			});

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

			// Display the score on the canvas
			contextRef.current.fillStyle = "white";
			contextRef.current.font = "24px Arial";
			contextRef.current.fillText(`Score: ${score}`, 10, 30);

			// Add enemies randomly
			if (Math.random() < 0.02) {
				addEnemy();
			}

			// Request the next frame
			requestAnimationFrame(gameLoop);
		};

		// Event listeners for player movement
		window.addEventListener("keydown", handlePlayerMove);
		window.addEventListener("keyup", handlePlayerStop);

		// Start the game loop
		gameLoop();
	}, [score]);

	return <canvas ref={canvasRef} width={1200} height={800} />;
};

export default SpaceShooter;
