//Skill fill animation
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .the-progress span");
// scroll to top
let spanTop = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= section2.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  this.scrollY >= 1000
    ? spanTop.classList.add("show")
    : spanTop.classList.remove("show");
};

//Stats Start count
let nums = document.querySelectorAll(".stats .number");
let section2 = document.querySelector(".stats");
let started = false; // Function Started ? No

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//Events Counter
let countDownDate = new Date("jan 1, 2023 00:00:00").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

spanTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
