/**
 *
 *  array
 *  object
 * string
 * numbers
 * null
 * undefined
 * -1
 */

/**
 * length get length of array
 * indexOf get index from array
 */

const array = [1, 2, 3, 4];

console.log(array.indexOf(5));
if (array.indexOf(10) === -1) {
  console.log('not found');
}

if (array.indexOf(4)) {
  console.log('found');
}
console.log(array.length);

/// push pop shift unshift

/**
 *
 * push add in last
 * pop delete from last
 * unshift add in first
 * shift delete from first
 */
array.push(4);
console.log(array);

array.pop();
console.log(array);

array.unshift(10);
console.log(array);

array.shift();
console.log(array);

/**
 *
 * splice() =>
 */

const newArr = [1, 'mno0hammed', { x: 'mohammed' }, () => {}];

newArr.splice(2, 2, () => {}, { y: 'm=n' });

console.log(newArr);

const newArr2 = [1, 3, 4, 4, 8, 8];

newArr2.splice(2, 2, 3, 4);

console.log(newArr2);

// arr[0];
// arr[4];

console.log(newArr2[newArr2.length - 1]);

// 4
const index = newArr2.indexOf(4);
console.log(newArr2[index]);

newArr2[index] = 200;
console.log(newArr2);

const newArr3 = [300, 500];
const newArray4 = newArr2.concat(newArr3);
console.log(newArray4);

const arry100 = [2, 3];
newArr2.push(2, 3);
console.log(newArr2);

// delete newArr2[2];
console.log(newArr2.toString());

/**
 *
 *  sort()
 */

// forEach , for loop, while, do while

for (let i of newArr2) {
  console.log(i);
}

// map , reduce , filter

const arrayTest = [1, 2, 3, 4, 5, 6];

function multi(arrayTest) {
  const arrayNew = [];
  for (let i of arrayTest) {
    //   arrayNew.push(i * 2);
    arrayNew.unshift(i * 2);
  }
  return arrayNew;
}

let result = multi(arrayTest);
console.log(result);

//-------------------------------
function filterNumbers(arrayTest) {
  const odd = [];
  const even = [];

  for (let n of arrayTest) {
    if (n % 2 === 0) {
      even.push(n);
    } else if (n % 2 != 0) {
      odd.push(n);
    }
  }
  return {
    odd: odd,
    even: even,
  };
}
result = filterNumbers(arrayTest);

console.log(result);

//-------------------------------------------------
const arrayName = [1, 'mutasem', 2, 'mohammed', 3, 'ahmed'];

function filterName(arrayName) {
  const name = [];
  const number = [];

  for (let d of arrayName) {
    if (typeof d === 'string') {
      name.push(d);
    } else if (typeof d === 'number') {
      number.push(d);
    }
  }
  return {
    name: name,
    number: number,
  };
}

result = filterName(arrayName);
console.log(result);
//----------------------------------

function finelSum(arrayTest) {
  let sum = 0;
  for (let s of arrayTest) {
    sum = s + sum;
  }
  return sum;
}
result = finelSum(arrayTest);
console.log(result);
