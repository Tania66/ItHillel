const checkNumber = function () {
  const attempt = 10;
  for (let i = 0; i < attempt; i++) {
    let number = prompt("enter number more 100", "");
    const count = Number(number);
    if (attempt === i) {
      break;
    } else if (count > 100) {
      console.log(`Wow, your number ${number}`);
      break;
    } else if (isNaN(number)) {
      console.log(`Something went wrong ${number}`);
      break;
    } else if (count < 100) {
      console.log("The number must be greater than 100, try again");
    }
    console.log(number);
  }
};

checkNumber();
