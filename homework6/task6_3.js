// 6.3
function removeElement(array, item) {
  let newArr = [];
  for (const elem of array) {
    if (elem !== item) {
      newArr.push(elem);
    }
  }
  console.log(newArr);
}

removeElement([1, 4, 3, 2, 8], 4);
removeElement([13, 2, 8], 13);
removeElement([1, 4, 3, 17], 17);
removeElement([14, 3, 2, 8], 14);
removeElement(["vanini", "bublik", "morti"], "vanini");
