const array = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];

function getNum(n, arr) {
  let array = arr;
  let pairs = 0;
  for (let n of array) {
    // console.log(array);
    const newArray = array.slice(array.indexOf(n) + 1, array.length);
    for (let item of newArray) {
      if (n === item) {
        console.log('found');
        pairs++;
        console.log(array.indexOf(item));
        array.splice(array.indexOf(item), 1);
        array.splice(array.indexOf(n), 1);
        console.log(array);
        break;
      }
    }
  }
  return pairs;
}

const pairs = getNum(9, array);
console.log(pairs);

// function getNum2(n, array) {
//   let count = 0;
//   for (let n of array) {
//     for (let item of array) {
//       if (item === n) {
//         count++;
//         for (let i = 0; i < 2; i++) {
//           console.log(array);
//           const indexItem = array.indexOf(item);
//           array.splice(indexItem, 1);
//         }
//         break;
//       }
//     }
//   }
//   return count;
// }
// const count = getNum2(15, array);
// console.log(count);
