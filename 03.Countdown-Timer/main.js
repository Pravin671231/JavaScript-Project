const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");

function updated() {
  const currentYear = new Date().getFullYear();
  const newyear = new Date(`January 1 ${currentYear+1} 00:00:00`);
  const currentDate = new Date();

  const difference = newyear - currentDate;

  const d = Math.floor(difference / 1000 / 60 / 60 / 24);
  const h = Math.floor((difference / 1000 / 60 / 60) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  mins.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
}

updated();
setInterval(updated, 1000);
