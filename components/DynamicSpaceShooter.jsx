import React, { useEffect } from "react";
import p5 from "p5";

const DynamicSpaceShooter = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const sketch = (p) => {
				let player;
				const bullets = [];
				const enemies = [];
				let moveLeft = false;
				let moveRight = false;
				let moveUp = false;
				let moveDown = false;
				let currentScore = 0;
				let bestScore = localStorage.getItem("bestScore") || 0;

				p.preload = () => {
					// Load your spacecraft image here
					player = p.loadImage("/spaceship.png");
				};

				p.setup = () => {
					p.createCanvas(800, 600);
					player = {
						img: player,
						x: p.width / 2,
						y: p.height - 50,
					};
				};

				p.draw = () => {
					p.background(0);

					// Boundary checks for player movement
					if (player.x < 0) {
						player.x = 0;
					}
					if (player.x > p.width - 60) {
						player.x = p.width - 60;
					}
					if (player.y < 0) {
						player.y = 0;
					}
					if (player.y > p.height - 60) {
						player.y = p.height - 60;
					}

					// Draw player spacecraft
					p.image(player.img, player.x, player.y, 60, 60);

					// Move and draw bullets
					for (let i = bullets.length - 1; i >= 0; i--) {
						if (bullets[i]) {
							// Check if bullets[i] exists
							bullets[i].y -= 5;
							p.fill(255, 0, 0);
							p.ellipse(bullets[i].x, bullets[i].y, 10, 10);

							if (bullets[i].y < 0) {
								bullets.splice(i, 1);
							}
						}
					}

					// Generate enemies
					if (p.random(1) < 0.02) {
						enemies.push({ x: p.random(p.width), y: 0 });
					}

					// Move and draw enemies
					for (let i = enemies.length - 1; i >= 0; i--) {
						enemies[i].y += 3;
						p.fill(0, 0, 255);
						p.rect(enemies[i].x, enemies[i].y, 30, 30);

						// Check for collision with player
						if (
							player.x < enemies[i].x + 30 &&
							player.x + 60 > enemies[i].x &&
							player.y < enemies[i].y + 30 &&
							player.y + 60 > enemies[i].y
						) {
							p.noLoop();
							p.textSize(32);
							p.text("Game Over", p.width / 2 - 100, p.height / 2);
							if (currentScore > bestScore) {
								bestScore = currentScore;
								localStorage.setItem("bestScore", bestScore);
							}
						}

						// Check for collision with bullets
						for (let j = bullets.length - 1; j >= 0; j--) {
							if (
								enemies[i] &&
								bullets[j] &&
								bullets[j].x < enemies[i].x + 30 &&
								bullets[j].x + 10 > enemies[i].x &&
								bullets[j].y < enemies[i].y + 30 &&
								bullets[j].y + 10 > enemies[i].y
							) {
								bullets.splice(j, 1);
								enemies.splice(i, 1);
								currentScore++;
							}
						}

						// Remove enemies that go off-screen
						if (enemies[i] && enemies[i].y > p.height) {
							enemies.splice(i, 1);
						}
					}

					// Continuous movement logic
					if (moveLeft) {
						player.x -= 5;
					}
					if (moveRight) {
						player.x += 5;
					}
					if (moveUp) {
						player.y -= 5;
					}
					if (moveDown) {
						player.y += 5;
					}

					// Display scores
					p.fill(255);
					p.textSize(24);
					p.text(`Score: ${currentScore}`, 20, 30);
					p.text(`Best Score: ${bestScore}`, 20, 60);
				};

				p.keyPressed = () => {
					if (p.key === " ") {
						bullets.push({ x: player.x + 25, y: player.y });
					}
				};

				p.keyReleased = () => {
					// Clear movement flags when keys are released
					if (p.key === "ArrowLeft" || p.key === "a") {
						moveLeft = false;
					}
					if (p.key === "ArrowRight" || p.key === "d") {
						moveRight = false;
					}
					if (p.key === "ArrowUp" || p.key === "w") {
						moveUp = false;
					}
					if (p.key === "ArrowDown" || p.key === "s") {
						moveDown = false;
					}
				};

				p.keyTyped = () => {
					// Set movement flags when keys are pressed
					if (p.key === "ArrowLeft" || p.key === "a") {
						moveLeft = true;
					}
					if (p.key === "ArrowRight" || p.key === "d") {
						moveRight = true;
					}
					if (p.key === "ArrowUp" || p.key === "w") {
						moveUp = true;
					}
					if (p.key === "ArrowDown" || p.key === "s") {
						moveDown = true;
					}
				};
			};

			new p5(sketch);
		}
	}, []);

	return null;
};

export default DynamicSpaceShooter;
