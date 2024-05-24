function createCounter() {
  let counter = 0;
  return function addNumber(value) {
    return (counter += value);
  };
}

const sum = createCounter();
console.log(sum(14));

console.log(sum(7));

console.log(sum(10));

console.log(sum(20));
