let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const stopwatch = document.getElementById("stopwatch");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  const now = Date.now();
  elapsedTime = now - startTime;
  stopwatch.textContent = formatTime(elapsedTime);
}

startBtn.onclick = function () {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 100);
    isRunning = true;
  }
};

pauseBtn.onclick = function () {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
};

resetBtn.onclick = function () {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  stopwatch.textContent = "00:00:00";
  laps.innerHTML = "";
};

lapBtn.onclick = function () {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
};
