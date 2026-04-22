const GAME_SECONDS = 30;
const GRID_SIZE = 9;
const MIN_SHOW_MS = 450;
const MAX_SHOW_MS = 950;

const DIFFICULTY_SETTINGS = {
  easy: {
    duration: 45,
    minShowMs: 600,
    maxShowMs: 1200,
    spawnDelayMs: 200,
  },
  medium: {
    duration: 30,
    minShowMs: 450,
    maxShowMs: 950,
    spawnDelayMs: 150,
  },
  hard: {
    duration: 20,
    minShowMs: 250,
    maxShowMs: 600,
    spawnDelayMs: 100,
  },
};

const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
const gridEl = document.getElementById("grid");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const difficultyInputs = document.querySelectorAll('.difficulty-input');
const difficultySelector = document.querySelector('.difficulty-selector');

let score = 0;
let bestScore = {
  easy: Number(localStorage.getItem("best-score-easy") || "0"),
  medium: Number(localStorage.getItem("best-score-medium") || "0"),
  hard: Number(localStorage.getItem("best-score-hard") || "0"),
};
let timeLeft = GAME_SECONDS;
let activeIndex = -1;
let gameRunning = false;
let roundTimeout = null;
let timerInterval = null;
let currentDifficulty = "medium";

function getSelectedDifficulty() {
  const checked = document.querySelector('.difficulty-input:checked');
  return checked ? checked.value : "medium";
}

function getCurrentDifficultySetting() {
  return DIFFICULTY_SETTINGS[currentDifficulty];
}

function updateBestScoreDisplay() {
  bestScoreEl.textContent = String(bestScore[currentDifficulty]);
}

function updateDifficultyDisplay() {
  // Update timer display to show duration of selected difficulty
  const settings = getCurrentDifficultySetting();
  timeLeft = settings.duration;
  updateHud();
}

bestScoreEl.textContent = String(bestScore.medium);
// Initialize timeLeft with default (medium) difficulty duration
timeLeft = DIFFICULTY_SETTINGS.medium.duration;

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

  const settings = getCurrentDifficultySetting();
  roundTimeout = window.setTimeout(() => {
    showNextMole();
  }, randomMs(settings.minShowMs, settings.maxShowMs));
}

function updateHud() {
  scoreEl.textContent = String(score);
  timeEl.textContent = String(timeLeft);
  updateBestScoreDisplay();
}

function disableDifficultySelector() {
  difficultyInputs.forEach(input => {
    input.disabled = true;
  });
  difficultySelector.classList.add('disabled');
}

function enableDifficultySelector() {
  difficultyInputs.forEach(input => {
    input.disabled = false;
  });
  difficultySelector.classList.remove('disabled');
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

  if (score > bestScore[currentDifficulty]) {
    bestScore[currentDifficulty] = score;
    localStorage.setItem(`best-score-${currentDifficulty}`, String(bestScore[currentDifficulty]));
    messageEl.textContent = `時間到。新紀錄 ${score} 分。`;
  } else {
    messageEl.textContent = `時間到。你的分數是 ${score} 分。`;
  }

  startBtn.disabled = false;
  restartBtn.disabled = false;
  enableDifficultySelector();
  updateHud();
}

function startGame() {
  currentDifficulty = getSelectedDifficulty();
  const settings = getCurrentDifficultySetting();
  
  score = 0;
  timeLeft = settings.duration;
  gameRunning = true;
  messageEl.textContent = "地鼠出現了，快點擊它。";

  startBtn.disabled = true;
  restartBtn.disabled = false;
  disableDifficultySelector();

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

// Add event listeners for difficulty selection changes
difficultyInputs.forEach(input => {
  input.addEventListener("change", (e) => {
    currentDifficulty = e.target.value;
    updateBestScoreDisplay();
    updateDifficultyDisplay();
  });
});

createGrid();
updateHud();