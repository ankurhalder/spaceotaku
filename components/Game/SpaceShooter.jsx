/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { GameMusic } from "..";

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
  const enemiesRef = useRef([]);
  const enemyBulletsRef = useRef([]); // Initialize enemyBulletsRef as an empty array
  const scoreRef = useRef(0);
  const gameOverRef = useRef(false);
  const highScoreRef = useRef(0);
  const enemyImages = [
    "/aliens/alien-1.png",
    "/aliens/alien-2.png",
    "/aliens/alien-3.png",
    "/aliens/alien-4.png",
    "/aliens/alien-5.png",
  ];

  const restartGame = () => {
    window.location.reload();
  };

  useEffect(() => {
    const storedHighScore = localStorage.getItem("spaceShooterHighScore");
    if (storedHighScore) {
      highScoreRef.current = parseInt(storedHighScore, 10);
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const player = playerRef.current;
    const playerImageObj = new Image();
    playerImageObj.src = "/spaceship.png";

    const enemyImageRefs = enemyImages.map((imagePath) => {
      const imageRef = new Image();
      imageRef.src = imagePath;
      return imageRef;
    });

    // Rest of the code remains the same...

    const drawPlayer = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        playerImageObj,
        player.x,
        player.y,
        player.width,
        player.height
      );
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

    const drawEnemies = () => {
      enemiesRef.current.forEach((enemy) => {
        context.drawImage(
          enemy.image,
          enemy.x,
          enemy.y,
          enemy.width,
          enemy.height
        );
      });
    };

    const drawCreatedByText = () => {
      context.font = "16px Arial";
      context.fillStyle = "yellow";
      context.fillText(
        "Created by Ankur Halder for Space Otaku",
        250,
        canvas.height - 570
      );
    };
    const moveEnemyBullets = () => {
      enemyBulletsRef.current = enemyBulletsRef.current.filter(
        (bullet) => bullet.y < canvas.height
      );

      enemyBulletsRef.current.forEach((bullet, bulletIndex) => {
        bullet.y += bulletSpeed;

        // Check for collision with the player
        if (
          player.x < bullet.x + 5 &&
          player.x + player.width > bullet.x &&
          player.y < bullet.y + 10 &&
          player.y + player.height > bullet.y
        ) {
          gameOverRef.current = true;
        }
      });
    };

    const moveEnemies = () => {
      enemiesRef.current.forEach((enemy) => {
        // Randomly decide whether to move left or right
        const shouldMoveLeft = Math.random() < 0.5;

        // Determine the horizontal speed based on the direction
        const horizontalSpeed = shouldMoveLeft ? -enemy.speed : enemy.speed;

        enemy.x += horizontalSpeed;
        enemy.y += enemy.speed;

        // If the enemy goes out of bounds, reset its position
        if (
          enemy.y > canvas.height ||
          enemy.x < -enemy.width ||
          enemy.x > canvas.width
        ) {
          enemy.y = -enemy.height;
          enemy.x = Math.random() * (canvas.width - enemy.width);
        }

        if (
          player.x < enemy.x + enemy.width &&
          player.x + player.width > enemy.x &&
          player.y < enemy.y + enemy.height &&
          player.y + player.height > enemy.y
        ) {
          gameOverRef.current = true;
        }

        // Generate enemy bullets
        if (Math.random() < 0.01) {
          enemyBulletsRef.current.push({
            x: enemy.x + enemy.width / 2 - 2.5,
            y: enemy.y + enemy.height,
          });
        }
      });
    };

    // Function to shuffle an array randomly
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

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
        if (!gameOverRef.current) {
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
        }
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

    const createEnemies = () => {
      const createEnemy = () => {
        const randomIndex = Math.floor(Math.random() * enemyImageRefs.length);
        const randomEnemyImage = enemyImageRefs[randomIndex];

        const enemy = {
          x: Math.random() * (canvas.width - 50),
          y: -50,
          width: 50,
          height: 50,
          speed: 1,
          image: randomEnemyImage,
        };

        enemiesRef.current.push(enemy);

        if (Math.random() < 0.1) {
          enemyBulletsRef.current.push({
            x: enemy.x + enemy.width / 2 - 2.5,
            y: enemy.y + enemy.height,
          });
        }
      };

      setInterval(createEnemy, 2000);
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

    const handleCollisions = () => {
      bulletsRef.current.forEach((bullet, bulletIndex) => {
        enemiesRef.current.forEach((enemy, enemyIndex) => {
          if (
            bullet.x < enemy.x + enemy.width &&
            bullet.x + 5 > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + 10 > enemy.y
          ) {
            bulletsRef.current.splice(bulletIndex, 1);
            enemiesRef.current.splice(enemyIndex, 1);
            scoreRef.current += 1;
          }
        });
      });
    };

    const drawScore = () => {
      context.font = "20px Arial";
      context.fillStyle = "white";
      context.fillText("Score: " + scoreRef.current, 10, 30);
    };

    const drawHighScore = () => {
      context.font = "20px Arial";
      context.fillStyle = "white";
      context.fillText("High Score: " + highScoreRef.current, 10, 60);
    };

    const drawGameOver = () => {
      context.font = "40px Arial";
      context.fillStyle = "red";
      context.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
      context.font = "30px Arial";
      context.fillStyle = "yellow";
      context.fillText(
        "Score: " + scoreRef.current,
        canvas.width / 2 - 50,
        canvas.height / 2 + 40
      );
      const highScore = localStorage.getItem("spaceShooterHighScore");
      if (highScore !== null) {
        context.font = "30px Arial";
        context.fillStyle = "yellow";
        context.fillText(
          "High Score: " + highScore,
          canvas.width / 2 - 95,
          canvas.height / 2 + 80
        );
      } else {
        context.font = "40px Arial";
        context.fillStyle = "red";
        context.fillText(
          "High Score: 0",
          canvas.width / 2 - 70,
          canvas.height / 2 + 80
        );
      }
    };

    const drawEnemyBullets = () => {
      enemyBulletsRef.current.forEach((bullet) => {
        context.fillStyle = "blue";
        context.fillRect(bullet.x, bullet.y, 5, 10);
      });
    };

    const gameLoop = () => {
      if (!gameOverRef.current) {
        moveBullets();
        moveEnemies();
        moveEnemyBullets();
        handleCollisions();
        drawPlayer();
        drawBullets();
        drawEnemies();
        drawEnemyBullets();
        drawScore();
        drawHighScore();
        drawCreatedByText();
        requestAnimationFrame(gameLoop);
      } else {
        if (scoreRef.current > highScoreRef.current) {
          highScoreRef.current = scoreRef.current;
          localStorage.setItem(
            "spaceShooterHighScore",
            highScoreRef.current.toString()
          );
        }
        drawGameOver();
      }
    };

    gameLoop();
    handlePlayerMovement();
    handleShooting();
    createEnemies();

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

  return (
    <>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
      <button id="restart-button" onClick={restartGame}>
        Restart Game
      </button>
      <GameMusic />
    </>
  );
};

export default SpaceShooter;
