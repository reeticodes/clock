const sechand = document.querySelector("#sec");
const minHand = document.querySelector("#min");
const hourHand = document.querySelector("#hour");
function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getMinutes();
  const secDeg = (sec / 60) * 360 + 90;
  const minDeg = (min / 60) * 360 + 90;
  const hourDeg = (min / 12) * 360 + 90;
  sechand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate, 1000);
