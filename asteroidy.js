const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let asteroids = [];
let score = 0;
let gameOver = false;

const asteroidImg = new Image();
asteroidImg.src = 'asteroid.png'; // nahraď názvem souboru

function createAsteroid() {
  return {
    x: canvas.width + Math.random() * 100,
    y: Math.random() * (canvas.height - 40),
    radius: 20 + Math.random() * 10,
    speed: 1 + Math.random(),
  };
}

function updateAsteroids() {
  asteroids.forEach(a => a.x -= a.speed);
  asteroids = asteroids.filter(a => a.x + a.radius > 0);
  while (asteroids.length < 5 && !gameOver) {
    asteroids.push(createAsteroid());
  }
}

function drawAsteroids() {
  asteroids.forEach(a => {
    ctx.drawImage(asteroidImg, a.x - a.radius, a.y - a.radius, a.radius * 2, a.radius * 2);
  });
}

canvas.addEventListener('click', e => {
  if (gameOver) return;
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  asteroids = asteroids.filter(a => {
    const dx = a.x - clickX;
    const dy = a.y - clickY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < a.radius + 10) {
      score++;
      if (score >= 10) {
        document.getElementById('success').textContent = 'Úkol splněn!';
        gameOver = true;
        resetPoDesetiSekundach()
      }
      return false;
    }
    return true;
  });
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateAsteroids();
  drawAsteroids();
  if (!gameOver) requestAnimationFrame(gameLoop);
}

asteroidImg.onload = () => {
  for (let i = 0; i < 5; i++) asteroids.push(createAsteroid());
  gameLoop();
};
