const images = [
  "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",

  "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",

  "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",

  "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",

  "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",

  "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",

  "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",

  "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",

  "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
];

const buttonEl = document.querySelector(".button");
const imgEl = document.querySelector(".picture");

buttonEl.addEventListener("click", () => {
  imgEl.width = 500;
  imgEl.height = 450;
  imgEl.src = images[Math.floor(Math.random() * images.length)];
});
