const clock = () => {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let today = now.getDate();
 
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let month = months[now.getMonth()];

  let hours_deg = hours * 30 - 90 + minutes / 2;
  let minutes_deg = minutes * 6 - 90;
  let seconds_deg = seconds * 6 - 90;

  document.querySelector(".hours").style.transform = `rotate(${hours_deg}deg)`;
  document.querySelector(".minutes").style.transform = `rotate(${minutes_deg}deg)`;
  document.querySelector(".seconds").style.transform = `rotate(${seconds_deg}deg)`;
  document.querySelector(".day").innerText = today;
  document.querySelector(".month").innerText = month;
}

const interv = 1000;

clock();

setInterval(clock, interv);

