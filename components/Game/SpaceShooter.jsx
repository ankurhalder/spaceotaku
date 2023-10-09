import { useEffect, useRef } from "react";

const SpaceShooter = () => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const playerRef = useRef({
		x: 375,
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
		const player = playerRef.current;

		const drawPlayer = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "blue";
			context.fillRect(player.x, player.y, player.width, player.height);
		};

		const drawBullets = () => {
			bulletsRef.current.forEach((bullet) => {
				context.fillStyle = "red";
				context.fillRect(bullet.x, bullet.y, 5, 10);
			});
		};

		const moveBullets = () => {
			bulletsRef.current = bulletsRef.current.filter((bullet) => bullet.y > 0);
			bulletsRef.current.forEach((bullet) => {
				bullet.y -= bulletSpeed;
			});
		};

		const shoot = () => {
			bulletsRef.current.push({
				x: player.x + player.width / 2 - 2.5,
				y: player.y,
			});
		};

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

				keepPlayerInBounds();
				drawPlayer();
			});

			window.addEventListener("keyup", (e) => {
				keysPressed[e.key] = false;
			});
		};

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

		const startShootingInterval = () => {
			let duration = 0;
			const minInterval = 100;
			const maxDuration = 2000;
			const maxInterval = 500;
			shoot();

			shootIntervalRef.current = setInterval(() => {
				if (isShootingRef.current) {
					if (duration <= maxDuration) {
						const interval =
							minInterval +
							((maxInterval - minInterval) * duration) / maxDuration;
						shoot();
						duration += minInterval;
					} else {
						shoot();
					}
				} else {
					clearInterval(shootIntervalRef.current);
				}
			}, minInterval);
		};

		const gameLoop = () => {
			moveBullets();
			drawPlayer();
			drawBullets();
			requestAnimationFrame(gameLoop);
		};

		gameLoop();

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
