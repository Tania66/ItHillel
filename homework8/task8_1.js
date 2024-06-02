class Step {
  value = 0;

  up() {
    this.value += 1;
    return this;
  }

  down() {
    this.value -= 1;
    return this;
  }

  showStep() {
    return console.log(this.value);
  }
}

let ladder = new Step();

ladder.up().up().down().up().up().up().up().down().down().showStep();
