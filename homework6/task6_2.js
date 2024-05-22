function getArithmeticMean(arr) {
  let arrNum = [];
  let sum = 0;
  let result = 0;
  for (const num of arr) {
    if (typeof num === "number") {
      arrNum.push(num);
    }
  }

  for (let i = 0; i < arrNum.length; i++) {
    const element = arrNum[i];
    sum += element;
    result = sum / arrNum.length;
  }
  console.log(Math.floor(result));
}
getArithmeticMean(["vanini", 32, "bublik", 321, 18]);
getArithmeticMean(["ponchil", 15, "h", 55]);
getArithmeticMean([["e", "c", "g"], 3, "", 4]);
getArithmeticMean([13, "7", 2, 8, "2"]);

// 6.2(ще один варіат)
// function getArithmeticMean(arr) {
//     let arrNum = [];
//     let sum = 0;
//     let result = 0;
//       const number = arr.filter((item) => typeof item === "number");
//       for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         sum += element;
//         result = sum / number.length;
//       }
//       console.log(Math.floor(result));
//     }
//     getArithmeticMean(["vanini", 32, "bublik", 321, 18]);
//     getArithmeticMean(["ponchil", 15, "h", 55]);
//     getArithmeticMean([["e", "c", "g"], 3, "", 4]);
//     getArithmeticMean([13, "7", 2, 8, "2"]);
