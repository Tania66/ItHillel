const inputEl = document.querySelector(".input");
const btnFollowEl = document.querySelector(".btn");

const handleFollowLink = () => {
  const value = inputEl.value;
  window.location.href = new URL(`https://${value}`);
  inputEl.value = "";
};

btnFollowEl.addEventListener("click", handleFollowLink);
