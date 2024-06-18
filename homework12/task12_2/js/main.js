const parentEl = document.querySelector(".btn-container");

const handleClick = (event) => {
  if (event.target !== event.currentTarget) {
    alert(`You choosed: ${event.target.dataset.value} `);
  } else {
    return;
  }
};

parentEl.addEventListener("click", handleClick);

//
//const handleClick = (event) => {
//   if (event.target.nodeName === "BUTTON") {
//     alert(`You choosed: ${event.target.dataset.value} `);
//   } else {
//     return;
//   }
//};

///
// const handleClick = (event) => {
//   if (event.target.nodeName === "BUTTON") {
//     alert(`You choosed: ${event.target.textContent} `);
//   } else {
//     return;
//   }
// };
