const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const images = document.querySelectorAll(".imgCard");
const navContainer = document.querySelector(".navDotContainer");

let currentIndex = 0;

const prev = () => {
  if (currentIndex === 0) {
    currentIndex = 4;
  } else {
    currentIndex -= 1;
  }
  setActiveImg(currentIndex);
  setDotActive(currentIndex);
};

const next = () => {
  if (currentIndex === 4) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setActiveImg(currentIndex);
  setDotActive(currentIndex);
};

setInterval(next, 5000);

const createNavDot = (i) => {
  const dot = document.createElement("div");
  dot.classList.add("navDot");
  dot.dataset.pos = i;
  dot.addEventListener("click", () => {
    setActiveImg(i);
    setDotActive(i);
  });
  return dot;
};

[...images].map((el, i) => navContainer.appendChild(createNavDot(i)));

const setActiveImg = (index) => {
  [...images].map((el) => el.classList.remove("active"));
  images[index].classList.add("active");
};

const dots = document.querySelectorAll(".navDot");
dots[0].classList.add("activeDot");

const setDotActive = (index) => {
  dots.forEach((el) => el.classList.remove("activeDot"));
  dots[index].classList.add("activeDot");
};
