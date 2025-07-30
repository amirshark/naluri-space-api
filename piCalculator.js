// piCalculator.js
let currentPi = 0;
let accuracy = 0;
let isCalculating = false;
let interval = null;

function startCalculating() {
  if (isCalculating) return;

  isCalculating = true;
  let k = 0;

  interval = setInterval(() => {
    const term = (4 * Math.pow(-1, k)) / (2 * k + 1);
    currentPi += term;
    k++;

    accuracy = Math.floor(currentPi.toString().split('.')[1]?.length || 0);
    // Optional: Save to file or DB here
  }, 100); // adjust speed
}

function stopCalculating() {
  clearInterval(interval);
  isCalculating = false;
}

function reset() {
  currentPi = 0;
  accuracy = 0;
  stopCalculating();
}

function getCurrentPi() {
  return {
    pi: +currentPi.toFixed(accuracy),
    accuracy
  };
}

module.exports = {
  startCalculating,
  stopCalculating,
  reset,
  getCurrentPi
};
