function multiplication(f) {
  return function (firstValue) {
    return function (secondValue) {
      return f(firstValue, secondValue);
    };
  };
}

function getMultiplication(firstValue, secondValue) {
  return firstValue * secondValue;
}

let name = multiplication(getMultiplication);
console.log(name(4)(4));
console.log(name(100)(400));
console.log(name(5)(5));
console.log(name(9)(3));
