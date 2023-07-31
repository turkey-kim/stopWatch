const appendSecs = document.getElementById("secs");
const appendMins = document.getElementById("mins");
const appendHrs = document.getElementById("hrs");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let secs = 0;
let mins = 0;
let hrs = 0;
let Interval;

buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
};

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  resetTimer();
};

function startTimer() {
  secs++;

  if (secs < 10) {
    appendSecs.innerHTML = "0" + secs;
  } else if (secs < 59) {
    appendSecs.innerHTML = secs;
  } else {
    mins++;
    appendSecs.innerHTML = secs;
    secs = 0;

    if (mins < 10) {
      appendMins.innerHTML = "0" + mins;
    } else if (mins < 59) {
      appendMins.innerHTML = mins;
    } else {
      hrs++;
      appendMins.innerHTML = mins;
      mins = 0;

      if (hrs < 10) {
        appendHrs.innerHTML = "0" + hrs;
      } else {
        appendHrs.innerHTML = hrs;
      }
    }
  }
}

function resetTimer() {
  clearInterval(Interval);
  secs = 0;
  mins = 0;
  hrs = 0;

  appendSecs.innerHTML = "00";
  appendMins.innerHTML = "00";
  appendHrs.innerHTML = "00";
}
