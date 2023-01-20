const btn = document.querySelector(".btn");
const p = document.createElement("p");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      p.textContent = advice;
      document.body.appendChild(p);
    })
    .catch((error) => console.error(error));
});

const audio = document.querySelector("#myAudio");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const volumeControl = document.querySelector("#volume");

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});
