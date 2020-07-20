const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getSum(array) {
  let even = 0;
  let odd = 0;
  for (let i of array) {
    if (i % 2 === 0) {
      even = even + i;
    } else if (i % 2 !== 0) {
      odd = odd + i;
    }
  }
  return (obj = {
    even: even,
    odd: odd,
  });
}
let result = getSum(array);

console.log(result);
