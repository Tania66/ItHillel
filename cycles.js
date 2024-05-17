//task 5.1

let maxNumber = 30;

for (let i = 20; i <= maxNumber; i += 0.5) {
  console.log(i);
}

//task 5.2

let max = 100;

for (let i = 10; i <= max; i += 10) {
  const element = i * 26;
  console.log(element);
}

//task 5.3

let maxValue = 100;
let numberUser = prompt("enter a  number", "");
for (let i = 1; i <= maxValue; i++) {
  const element = i * i;
  if (element < Number(numberUser)) {
    console.log(element);
  }
}

//task 5.4

let enterNumber = prompt("Enter a number", "");
const number = Number(enterNumber);

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    console.log("it is prime number 😄", number);
    break;
  } else {
    console.log("it is not prime number 😥", number);
  }
}
