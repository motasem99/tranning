const array = [1, 4, 2, 3, 8, 5, 6];

function sort(array) {
  for (let c of array) {
    for (let t of array) {
      if (c > t) {
        const positionT = array.indexOf(t);
        const positionC = array.indexOf(c);
        if (positionC < positionT) {
          array[positionC] = t;
          array[positionT] = c;
        }
      }
    }
  }
  return array;
}
let result = sort(array);
console.log(result);

result = array.sort().reverse();
console.log(result);

result = array.sort((a, b) => b - a);
console.log(result);
// const array2 = [1, 2];
// console.log(array2[0]);

function rev(array) {
  const arrayRev = [];
  for (let r of array) {
    arrayRev.unshift(r);
  }
  return arrayRev;
}
result = rev(result);
console.log(result);
