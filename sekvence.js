const colors = ["red", "green", "blue", "yellow"];
let sequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;
const maxLevel = 5;

const buttons = document.querySelectorAll(".color-btn");
const result = document.getElementById("result");
const startButton = document.getElementById("start-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!acceptingInput) return;
    const color = btn.dataset.color;
    playerSequence.push(color);
    flashButton(color);
    checkPlayerInput();
  });
});

startButton.addEventListener("click", startGame);

function flashButton(color) {
  const btn = document.querySelector(`.color-btn[data-color="${color}"]`);
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 300);
}

function playSequence() {
  acceptingInput = false;
  let i = 0;
  const interval = setInterval(() => {
    flashButton(sequence[i]);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
      acceptingInput = true;
    }
  }, 600);
}

function nextRound() {
  if (level === maxLevel) {
    result.textContent = "✅ Úkol splněn!";
    acceptingInput = false;
    resetPoDesetiSekundach()
    return;
  }

  playerSequence = [];
  level++;
  result.textContent = `Úroveň ${level}`;
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(nextColor);
  setTimeout(playSequence, 1000);
}

function checkPlayerInput() {
  const current = playerSequence.length - 1;
  if (playerSequence[current] !== sequence[current]) {
    result.textContent = `❌ Chyba! Dosáhl(a) jsi úrovně ${level}. Zkus to ještě jednou.`;
    acceptingInput = false;
    return;
  }

  if (playerSequence.length === sequence.length) {
    acceptingInput = false;
    setTimeout(nextRound, 1000);
  }
}

function startGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
  result.textContent = "Začínáme...";
  nextRound();
}
