/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Player, Bullet, Enemy } from ".";

const Game = () => {
	const [playerX, setPlayerX] = useState(250);
	const [enemies, setEnemies] = useState([]);
	const [bullets, setBullets] = useState([]);
	const [score, setScore] = useState(0);

	// Function to move the player left or right
	const movePlayer = (direction) => {
		if (direction === "left" && playerX > 0) {
			setPlayerX(playerX - 10);
		} else if (direction === "right" && playerX < 500) {
			setPlayerX(playerX + 10);
		}
	};

	// Function to create a new enemy at a random position
	const createEnemy = () => {
		const randomX = Math.floor(Math.random() * 500);
		const newEnemy = { x: randomX, y: 0 };
		setEnemies([...enemies, newEnemy]);
	};

	// Function to fire a bullet from the player's position
	const fireBullet = () => {
		const newBullet = { x: playerX + 20, y: 500 };
		setBullets([...bullets, newBullet]);
	};

	// Function to update the game state (move enemies, bullets, check collisions, etc.)
	const updateGame = () => {
		// Move enemies downward
		const updatedEnemies = enemies.map((enemy) => ({
			...enemy,
			y: enemy.y + 5,
		}));

		// Move bullets upward
		const updatedBullets = bullets.map((bullet) => ({
			...bullet,
			y: bullet.y - 10,
		}));

		// Check for collisions between bullets and enemies
		updatedBullets.forEach((bullet, bulletIndex) => {
			enemies.forEach((enemy, enemyIndex) => {
				if (
					bullet.x < enemy.x + 50 &&
					bullet.x + 10 > enemy.x &&
					bullet.y < enemy.y + 50 &&
					bullet.y + 10 > enemy.y
				) {
					// Collision detected, remove both the bullet and enemy
					updatedBullets.splice(bulletIndex, 1);
					updatedEnemies.splice(enemyIndex, 1);
					// Increase the score
					setScore(score + 10);
				}
			});
		});

		// Update the game state
		setEnemies(updatedEnemies);
		setBullets(updatedBullets);
	};

	// Create new enemies at regular intervals
	useEffect(() => {
		const enemyInterval = setInterval(createEnemy, 2000);
		return () => clearInterval(enemyInterval);
	}, []);

	// Update the game state in a game loop
	useEffect(() => {
		const gameLoop = setInterval(updateGame, 16); // Approximately 60 FPS
		return () => clearInterval(gameLoop);
	}, [enemies, bullets]);

	return (
		<div>
			<Player x={playerX} movePlayer={movePlayer} fireBullet={fireBullet} />
			{enemies.map((enemy, index) => (
				<Enemy key={index} x={enemy.x} y={enemy.y} />
			))}
			{bullets.map((bullet, index) => (
				<Bullet key={index} x={bullet.x} y={bullet.y} />
			))}
			<div>Score: {score}</div>
		</div>
	);
};

export default Game;
