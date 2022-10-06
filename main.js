var i = 0;
function move() {
  let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

  let progressStartValue = 0,
    progressEndValue = 100,
    speed = 50;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
// function stops() {
//   if (progress) {
//     clearInterval(progress);
//   }
// }
