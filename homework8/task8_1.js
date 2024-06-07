let ladder = {
  value: 0,
  up: function () {
    this.value += 1;
    return this;
  },
  down: function () {
    this.value -= 1;
    return this;
  },
  showStep: function () {
    console.log(this.value);
  },
};

ladder.up().up().up().up().up().up().showStep();
