/**
 *
 * const let var
 *
 *
 *  scoup
 */

const print = () => {
  const object = {
    name: 'mohammed',
  };

  const array = [2, 4, 6];
  array.push(5);
  console.log(array);
  array.pop();
  console.log(array);

  array.shift();
  console.log(array);
  array.unshift(5);
  console.log(array);

  array = [10, 20];
};

const array = [1, 2, 3, 4];

const filterNumbers = (arr) => arr.map((x) => x * 2).filter((x) => x != 6);

const filterNumvers2 = (arr) => {
  return arr
    .map((x) => {
      const ans = x * 2;
      return ans;
    })
    .filter((x) => {
      console.log(x);
      return x !== 6;
    });
};

const newArray = filterNumvers2(array);
console.log(newArray);

let fun1 = () => {};
fun1 = () => {};

const obj = {
  name: 'mohammed',
};

obj.age = 10;
obj.fun = () => {
  console.log('mohammed');
};

obj.fun();
obj.arr = [1, 3, 4, 5];
obj.newObj = {};
obj.obj = {
  sex: 'male',
};

obj.obj1 = {
  x: 'mpoa',
};

obj.age = 12;

console.log(obj);

console.log(obj.name);

for (let x in obj) {
  console.log(x, obj[x]);
}

const obj2 = {
  fun1: () => {
    console.log(10);
  },
  fun2: () => {
    console.log(20);
  },
};

console.log(obj2.fun1());

for (let fun in obj2) {
  console.log(obj2[fun]());
}

/**
 *
 * create object content keys [ name, age, function , array] => object5
 * print all keys
 * print all values for each keys
 */

const obj5 = {
  name: 'mutasem',
  age: 21,
  function: () => {
    console.log('tis is function');
  },
  array: [1, 3, 3],
};
for (let x in obj5) {
  console.log(x, obj5[x]);
}

const obj5keys = Object.keys(obj5);
console.log(obj5keys);

const obj5Values = Object.values(obj5);
console.log(obj5Values);

for (let i of obj5keys) {
  console.log(obj5[i]);
}
