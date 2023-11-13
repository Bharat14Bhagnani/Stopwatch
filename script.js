let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
  } else {
    timer = setInterval(updateTime, 1000);
  }
  isRunning = !isRunning;
}

function stop() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime();
}

function displayTime() {
  const timeString = formatTime(hours, minutes, seconds);
  document.getElementById('display').innerText = timeString;
}

function formatTime(h, m, s) {
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
