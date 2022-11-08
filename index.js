const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const images = document.querySelectorAll(".imgCard");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  if (currentIndex === 4) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  [...images].map((el) => el.classList.remove("active"));
  images[currentIndex].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = 4;
  } else {
    currentIndex -= 1;
  }
  [...images].map((el) => el.classList.remove("active"));
  images[currentIndex].classList.add("active");
});
