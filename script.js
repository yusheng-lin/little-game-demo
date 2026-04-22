const GAME_SECONDS = 30;
const GRID_SIZE = 9;

const DIFFICULTY_SETTINGS = {
  easy: { min: 800, max: 1500 },
  medium: { min: 450, max: 950 },
  hard: { min: 200, max: 600 },
};

const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
const gridEl = document.getElementById("grid");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const difficultySelect = document.getElementById("difficulty-select");

let score = 0;
let bestScore = Number(localStorage.getItem("best-score") || "0");
let timeLeft = GAME_SECONDS;
let activeIndex = -1;
let gameRunning = false;
let roundTimeout = null;
let timerInterval = null;
let currentDifficulty = "medium";

bestScoreEl.textContent = String(bestScore);

difficultySelect.addEventListener("change", (e) => {
  currentDifficulty = e.target.value;
});

function createGrid() {
  for (let i = 0; i < GRID_SIZE; i += 1) {
    const hole = document.createElement("button");
    hole.type = "button";
    hole.className = "hole";
    hole.setAttribute("aria-label", `洞口 ${i + 1}`);

    const mole = document.createElement("span");
    mole.className = "mole";
    mole.setAttribute("aria-hidden", "true");
    hole.appendChild(mole);

    hole.addEventListener("click", () => hitMole(i));
    gridEl.appendChild(hole);
  }
}

function randomMs(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIndex(exclude) {
  let idx = Math.floor(Math.random() * GRID_SIZE);
  while (idx === exclude && GRID_SIZE > 1) {
    idx = Math.floor(Math.random() * GRID_SIZE);
  }
  return idx;
}

function clearActiveMole() {
  const holes = gridEl.children;
  if (activeIndex >= 0) {
    holes[activeIndex].classList.remove("up");
  }
  activeIndex = -1;
}

function showNextMole() {
  if (!gameRunning) {
    return;
  }

  const holes = gridEl.children;
  clearActiveMole();
  activeIndex = randomIndex(activeIndex);
  holes[activeIndex].classList.add("up");

  const { min, max } = DIFFICULTY_SETTINGS[currentDifficulty];
  roundTimeout = window.setTimeout(() => {
    showNextMole();
  }, randomMs(min, max));
}

function updateHud() {
  scoreEl.textContent = String(score);
  timeEl.textContent = String(timeLeft);
  bestScoreEl.textContent = String(bestScore);
}

function hitMole(index) {
  if (!gameRunning || index !== activeIndex) {
    return;
  }

  const hole = gridEl.children[index];
  hole.classList.add("hit");
  window.setTimeout(() => {
    hole.classList.remove("hit");
  }, 310);

  const pop = document.createElement("span");
  pop.className = "score-pop";
  pop.textContent = "+1";
  hole.appendChild(pop);
  window.setTimeout(() => {
    pop.remove();
  }, 620);

  score += 1;
  clearActiveMole();
  updateHud();
}

function stopGame() {
  gameRunning = false;
  clearActiveMole();
  clearTimeout(roundTimeout);
  clearInterval(timerInterval);

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("best-score", String(bestScore));
    messageEl.textContent = `時間到。新紀錄 ${score} 分。`;
  } else {
    messageEl.textContent = `時間到。你的分數是 ${score} 分。`;
  }

  startBtn.disabled = false;
  restartBtn.disabled = false;
  difficultySelect.disabled = false;
  updateHud();
}

function startGame() {
  score = 0;
  timeLeft = GAME_SECONDS;
  gameRunning = true;
  messageEl.textContent = "地鼠出現了，快點擊它。";

  startBtn.disabled = true;
  restartBtn.disabled = false;
  difficultySelect.disabled = true;

  updateHud();
  showNextMole();

  clearInterval(timerInterval);
  timerInterval = window.setInterval(() => {
    timeLeft -= 1;
    updateHud();

    if (timeLeft <= 0) {
      stopGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", () => {
  clearTimeout(roundTimeout);
  clearInterval(timerInterval);
  startGame();
});

createGrid();
updateHud();