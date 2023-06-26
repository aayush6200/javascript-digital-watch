// Initialize clock variables
let clockHours = 0;
let clockMinutes = 0;
let clockSeconds = 0;
let intervalId = 0;

// Stop the clock
const myStop = () => {
  clearInterval(intervalId);
};

// Update the clock element with the given value
const updateClockElement = (elementId, value) => {
  const clockElement = document.getElementById(elementId);
  clockElement.innerText = value < 10 ? `0${value}` : value;
};

// Increment the hour value and update the clock element
const hourControlUp = () => {
  clockHours = (clockHours + 1) % 24;
  updateClockElement('hrs-elem', clockHours);
};

// Decrement the hour value and update the clock element
const hourControlDown = () => {
  clockHours = (clockHours - 1 + 24) % 24;
  updateClockElement('hrs-elem', clockHours);
};

// Increment the minute value and update the clock element
const minuteControlUp = () => {
  clockMinutes = (clockMinutes + 1) % 60;
  if (clockMinutes === 0) {
    hourControlUp();
  }
  updateClockElement('min-elem', clockMinutes);
};

// Decrement the minute value and update the clock element
const minuteControlDown = () => {
  clockMinutes = (clockMinutes - 1 + 60) % 60;
  if (clockMinutes === 59) {
    hourControlDown();
  }
  updateClockElement('min-elem', clockMinutes);
};

// Increment the second value and update the clock element
const secondControlUp = () => {
  clockSeconds = (clockSeconds + 1) % 60;
  if (clockSeconds === 0) {
    minuteControlUp();
  }
  updateClockElement('sec-elem', clockSeconds);
};

// Decrement the second value and update the clock element
const secondControlDown = () => {
  clockSeconds = (clockSeconds - 1 + 60) % 60;
  if (clockSeconds === 59) {
    minuteControlDown();
  }
  updateClockElement('sec-elem', clockSeconds);
};

// Start the clock by incrementing the second value every second
const myWatch = () => {
  intervalId = setInterval(() => {
    clockSeconds = (clockSeconds + 1) % 60;
    if (clockSeconds === 0) {
      minuteControlUp();
    }
    updateClockElement('sec-elem', clockSeconds);
  }, 1000);
};
