// Function to start a countdown
const startCountdown = (totalTime, stepInterval) => {
  let remainingTime = totalTime * 60;
  const intervalMins = stepInterval * 60;

  const countdownInterval = setInterval(() => {
    displayRemainingTime(remainingTime);
    if (remainingTime <= 0) {
      let intervalSound = new Audio("../static/endingSound.mp3");
      intervalSound.play();
      clearInterval(countdownInterval);
    } else {
      if (remainingTime % intervalMins === 0) {
        let intervalSound = new Audio("../static/intervalSound.mp3");
        intervalSound.play();
      }
      remainingTime--;
    }
  }, 1000);
};

// Function to display the remaining time
const displayRemainingTime = (remainingTime) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime - minutes * 60;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  timer = document.getElementById("timer");
  timer.style.display = "flex";
  timer.innerHTML = `${minutes}:${formattedSeconds}`;
};

// Function to hide the form
const hideForm = () => {
  let form = document.getElementById("countdown-form");
  form.style.display = "none";
};

// Event handler for form submission
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Get the form elements
  const { "total-time": totalTimeInput, "steps-interval": stepIntervalInput } =
    event.target.elements;

  // Get the input values and parse them to integers
  const totalTime = totalTimeInput.value;
  const stepInterval = stepIntervalInput.value;

  hideForm();
  startCountdown(totalTime, stepInterval);
};

// Add event listener to the form
const countdownForm = document.getElementById("countdown-form");
countdownForm.addEventListener("submit", handleFormSubmit);
