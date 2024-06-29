const slider = document.querySelector(".slider");
const allSlides = slider.querySelectorAll("img");
const allDots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const sliderCount = allSlides.length;
let indexSlide = 0;

function updateSlide() {
  allSlides.forEach((element, index) => {
    if (index === indexSlide) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    if (indexSlide === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    if (indexSlide === sliderCount - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  });
}

updateSlide();

const handleNextClick = () => {
  indexSlide = (indexSlide + 1) % sliderCount;
  currentSlideDot(indexSlide);
  updateSlide();
};

const handlePrevClick = () => {
  indexSlide = (indexSlide - 1) % sliderCount;
  currentSlideDot(indexSlide);

  updateSlide();
};

function currentSlideDot(indexSlide) {
  allDots.forEach((element, index) => {
    if (index === indexSlide) {
      element.classList.add("active-dot");
    } else {
      element.classList.remove("active-dot");
    }
  });
}

function onDotsClick() {
  allDots.forEach((element, index) => {
    element.addEventListener("click", () => {
      indexSlide = index;
      currentSlideDot(indexSlide);
      updateSlide();
    });
  });
}
onDotsClick();

prevBtn.addEventListener("click", handlePrevClick);
nextBtn.addEventListener("click", handleNextClick);
