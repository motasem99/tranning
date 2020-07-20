const array = [1, 2, 3, 4, 5, 6, 7];
const arrayOfObjects = [
  {
    id: 1,
    name: 'mohammed',
    age: 50,
  },
  {
    id: 2,
    name: 'noor',
    age: 20,
  },
  {
    id: 3,
    name: 'morad',
    age: 30,
  },
];

/**
 *
 * filter => filter items of array
 * take array
 * return new array
 */

const newArray = arrayOfObjects.filter(function (item) {
  if (item.age > 10) {
    return item;
  }
});

const newArr = arrayOfObjects.filter((item) => item.age > 10);

console.log(newArr);

// arrayOfObjects.forEach(function (item) {
//   item.age = item.age + 5;
// });

// array.forEach((item) => item * 2);

for (let i = 0; i < arrayOfObjects.length; i++) {
  arrayOfObjects[i].age = arrayOfObjects[i].age + 10;
}

// console.log(array);
console.log(arrayOfObjects);

/**
 *
 *  sort a-b
 *  sort b-a
 */

const sortArray = [5, 4, 9, 3, 4, 7, 2].sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sortArray);

const sortedArray = function (array) {
  return array.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    } else if (a.age < b.age) {
      return -1;
    } else {
      return 0;
    }
  });
};

const sortedByName = function (arr) {
  return arr.sort(function (a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const arraySortednew = sortedByName(arrayOfObjects);
console.log(arraySortednew);

const arrayFilterName = function (array) {
  return array.filter(function (item) {
    if (item.name.includes('m')) {
      return item;
    }
  });
};

const arrayFilterNameNew = arrayFilterName(arrayOfObjects);
console.log(arrayFilterNameNew);

const arraySortedOne = function (array) {
  return array.sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    } else if (a.id < b.id) {
      return 1;
    } else {
      return 0;
    }
  });
};

const arraySortedOneNew = arraySortedOne(arrayOfObjects);
console.log(arraySortedOneNew);
