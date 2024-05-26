let value = "";
const checkNumber = function (attempt) {
  return function (number) {
    for (let i = 0; i < attempt; i++) {
      number = prompt("enter number more 100", "");
      const count = Number(number);
      if (count < 100) {
        alert("The number must be greater than 100, try again😱");
      } else if (isNaN(number)) {
        alert("Something went wrong😱");
        break;
      } else if (count > 100) {
        alert("Wow, your number🥰");
        break;
      } else if (attempt === i) {
        break;
      }
    }
    console.log(number);
  };
};

const result = checkNumber(10);
result(value);
