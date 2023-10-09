// components/SpaceShooter.js
import { useEffect, useRef } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const playerRef = useRef({
		x: 375, // Start in the middle horizontally
		y: 500,
		width: 50,
		height: 50,
	});
	const playerSpeed = 8;
	const bulletsRef = useRef([]);
	const bulletSpeed = 5;
	const isShootingRef = useRef(false);
	const shootIntervalRef = useRef(null);

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

		// Function to draw bullets
		const drawBullets = () => {
			bulletsRef.current.forEach((bullet) => {
				context.fillStyle = "red";
				context.fillRect(bullet.x, bullet.y, 5, 10);
			});
		};

		// Function to move bullets
		const moveBullets = () => {
			bulletsRef.current = bulletsRef.current.filter((bullet) => bullet.y > 0);
			bulletsRef.current.forEach((bullet) => {
				bullet.y -= bulletSpeed;
			});
		};

		// Function to handle shooting
		const shoot = () => {
			bulletsRef.current.push({
				x: player.x + player.width / 2 - 2.5, // Start bullets from the middle of the player
				y: player.y,
			});
		};

		// Handle player movement
		const handlePlayerMovement = () => {
			const keysPressed = {
				ArrowUp: false,
				ArrowDown: false,
				ArrowLeft: false,
				ArrowRight: false,
			};

			window.addEventListener("keydown", (e) => {
				keysPressed[e.key] = true;

				if (keysPressed.ArrowUp) {
					player.y -= playerSpeed;
				}
				if (keysPressed.ArrowDown) {
					player.y += playerSpeed;
				}
				if (keysPressed.ArrowLeft) {
					player.x -= playerSpeed;
				}
				if (keysPressed.ArrowRight) {
					player.x += playerSpeed;
				}

				// Keep the player within the canvas boundaries
				keepPlayerInBounds();
				drawPlayer();
			});

			window.addEventListener("keyup", (e) => {
				keysPressed[e.key] = false;
			});
		};

		// Function to keep the player within the canvas boundaries
		const keepPlayerInBounds = () => {
			const canvas = canvasRef.current;
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

		// Handle shooting when the Spacebar is pressed
		const handleShooting = () => {
			window.addEventListener("keydown", (e) => {
				if (e.key === " " && !isShootingRef.current) {
					isShootingRef.current = true;
					startShootingInterval();
				}
			});

			window.addEventListener("keyup", (e) => {
				if (e.key === " ") {
					isShootingRef.current = false;
					clearInterval(shootIntervalRef.current);
				}
			});
		};

		// Adjust the fire rate based on the Spacebar press duration
		const startShootingInterval = () => {
			let duration = 0;
			const minInterval = 100; // Minimum firing interval
			const maxDuration = 2000; // Maximum duration for decreasing fire rate
			const maxInterval = 500; // Maximum firing interval
			shoot(); // Initial shot

			shootIntervalRef.current = setInterval(() => {
				if (isShootingRef.current) {
					if (duration <= maxDuration) {
						// Calculate the interval based on the duration
						const interval =
							minInterval +
							((maxInterval - minInterval) * duration) / maxDuration;
						shoot();
						duration += minInterval; // Increment by the minimum interval
					} else {
						// Reached the maximum firing rate
						shoot();
					}
				} else {
					clearInterval(shootIntervalRef.current);
				}
			}, minInterval);
		};

		// Game loop
		const gameLoop = () => {
			moveBullets();
			drawPlayer();
			drawBullets();
			requestAnimationFrame(gameLoop);
		};

		// Start the game loop
		gameLoop();

		// Initialize event listeners
		handlePlayerMovement();
		handleShooting();

		return () => {
			window.removeEventListener("keydown", handlePlayerMovement);
			window.removeEventListener("keydown", handleShooting);
			window.removeEventListener("keyup", (e) => {
				if (e.key === " ") {
					isShootingRef.current = false;
					clearInterval(shootIntervalRef.current);
				}
			});
		};
	}, []);

	return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default SpaceShooter;
