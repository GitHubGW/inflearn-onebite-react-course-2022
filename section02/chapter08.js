/**
 * 배열 메서드 > 순회와 탐색 (2)
 */

/**
 * forEach
 */
const arr1 = [1, 2, 3, 4, 5];

arr1.forEach((item, index) => {
  console.log(item, index);
});

/**
 * includes
 */
const arr2 = [1, 2, 3, 4, 5];

const result1 = arr2.includes(3);
const result2 = arr2.includes(10);

console.log(result1);
console.log(result2);

/**
 * indexOf
 */
const arr3 = [1, 2, 3, 4, 5];

const result3 = arr3.indexOf(3);
const result4 = arr3.indexOf(10);

console.log(result3);
console.log(result4);

/**
 * findIndex
 */
const arr4 = [1, 2, 3, 4, 5];

const result5 = arr4.findIndex((item) => item === 3);
const result6 = arr4.findIndex((item) => item === 10);

console.log(result5);
console.log(result6);

/**
 * find
 */
const arr5 = [1, 2, 3, 4, 5];

const result7 = arr5.find((item) => item === 3);
const result8 = arr5.find((item) => item === 10);

console.log(result7);
console.log(result8);
