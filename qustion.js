const array = [4, 2, 6, 3, 7, 1, 9, 8, 5];

function getNum(array) {
  let big = array[0];
  for (let n of array) {
    if (big < n) {
      big = n;
    }
  }
  return big;
}
let result = getNum(array);
console.log(result);

function getNum2(array) {
  let small = array[0];
  for (let s of array) {
    if (small > s) {
      small = s;
    }
  }
  return small;
}
result = getNum2(array);
console.log(result);
