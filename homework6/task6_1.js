let userString = prompt("Enter your sentence", "");
let userSymbol = prompt("Enter symbol which tou want to delete", "");

function getUpdateString(string, symbol) {
  const symbolArr = symbol.split("");
  const stringArr = string.split("");
  const arr = stringArr.filter((item) => !symbolArr.includes(item));
  let newString = arr.join("");
  console.log(newString);
}

getUpdateString(userString, userSymbol);
