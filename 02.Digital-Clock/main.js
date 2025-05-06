let clock = document.querySelector(".clock");

function updateTime() {
  let hours = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  clock.innerHTML = `${hours}:${mins}:${sec}`;
  setTimeout(updateTime, 1000);
}
updateTime();
