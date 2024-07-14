const startTimerButton = document.querySelector(".start_btn");
const valueTimer = document.querySelector(".value_time");

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    const deadline = new Date(Date.now() + (60 * 1000 + 26000));
    this.intervalId = setInterval(() => {
      const time = getTimeValue(deadline);
      this.isActive = true;
      updateTimerInterface(time);
      if (time.t <= 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
      }
    }, 1000);
  },
};

startTimerButton.addEventListener("click", () => {
  timer.start();
});

function updateTimerInterface({ minutes, seconds }) {
  valueTimer.textContent = `${minutes}:${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function getTimeValue(deadline) {
  const t = Date.parse(deadline) - Date.parse(new Date());
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(t / day);
  const hours = Math.floor((t % day) / hour);
  const minutes = addLeadingZero(Math.floor(((t % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((t % day) % hour) % minute) / second)
  );
  return { minutes, seconds, t };
}
