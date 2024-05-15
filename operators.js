// task 1
let nameUser = prompt("What your name?", "");

if (nameUser !== null) {
  alert(`Hello, ${nameUser}! How are you?`);
} else {
  alert("Please enter your name☺️");
}

//task 2
let firstNumber, secondNumber, thirdNumber;
let numberUser = prompt("enter a three-digit number", "");

if (numberUser.length === 3) {
  let change = numberUser.split("");
  firstNumber = change[0];
  secondNumber = change[1];
  thirdNumber = change[2];
  const sameNumber =
    firstNumber === secondNumber &&
    firstNumber === thirdNumber &&
    secondNumber === thirdNumber;
  const identicalNumber =
    firstNumber === secondNumber ||
    firstNumber === thirdNumber ||
    secondNumber === thirdNumber;
  if (sameNumber) {
    console.log(sameNumber, ": all numbers are the same");
  } else if (identicalNumber) {
    console.log(
      identicalNumber,
      ": among the numbers there are identical ones"
    );
  } else if (!identicalNumber && !sameNumber) {
    console.log("all numbers are different");
  }
} else {
  alert("wrong number, try again");
}

//task 3
let yearOfBirth = prompt("Enter your year of birth", "");
let city = prompt("Where do you live?", "");
let sport = prompt("What is your favorite sport?", "");

let age = 2024 - Number(yearOfBirth);

const ukraina = "Kyiv";
const usa = "Washington";
const british = "London";

const boxing = "boxing";
const swimming = "swimming";
const gymnastics = "gymnastics";

if (yearOfBirth === null) {
  alert("It's a pity that you did not want to enter your yearOfBirth");
} else if (city === null) {
  alert("It's a pity that you did not want to enter your city");
} else if (sport === null) {
  alert("It's a pity that you did not want to enter your favorite sport");
} else {
  switch (city) {
    case ukraina:
      city = "You live in capital of Ukraina";
      break;
    case usa:
      city = "You live in capital of USA";
      break;
    case british:
      city = "You live in capital of Great Britain";
      break;
    default:
      city = `You live in city ${city}`;
      break;
  }
  switch (sport) {
    case boxing:
      sport = "Cool! Do you want to be like Oleksandr Usyk";
      break;
    case swimming:
      sport = "Cool! Do you want to be like Yana Klochkova";
      break;
    case gymnastics:
      sport = "Cool! Do you want to be like Anna Bezsonova";
      break;
    default:
      sport = `I believe in you you will succeed in ${sport}`;
      break;
  }
  alert(`${age} ${city} ${sport}`);
}

// task 4
let numOrStr = prompt("input number or string");

switch (numOrStr) {
  case null:
    console.log("ви скасували");
    break;
  case "":
    console.log("Empty String");
    break;
  case !isNaN(numOrStr) || numOrStr:
    console.log("number is Ba_NaN");
    break;
  default:
    console.log("OK!");
    break;
}
