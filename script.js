const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutePercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutePercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutePercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
