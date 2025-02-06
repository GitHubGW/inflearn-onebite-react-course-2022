/**
 * 배열 메서드 > 배열 변형 (3)
 */

/**
 * filter
 */
const arr1 = [
  { name: "kim", hobby: "tennis" },
  { name: "park", hobby: "soccer" },
  { name: "lee", hobby: "baseball" },
];

const result1 = arr1.filter((item) => item.hobby === "soccer");

console.log(result1);

/**
 * map
 */
const arr2 = [1, 2, 3, 4, 5];

const result2 = arr2.map((item) => item * 2);
const result3 = arr1.map((item) => item.name);

console.log(result2);
console.log(result3);

/**
 * sort
 */
const arr3 = ["b", "a", "c"];
const arr4 = [20, 10, 5, 15, 30];

const result4 = arr3.sort();
const result5 = arr4.sort((a, b) => a - b);
const result6 = arr4.sort((a, b) => b - a);

console.log(result4);
console.log(result5);
console.log(result6);

/**
 * toSorted
 */
const arr5 = [1, 2, 3, 4, 5];

const result7 = arr5.toSorted((a, b) => a - b);
const result8 = arr5.toSorted((a, b) => b - a);

console.log(arr5);
console.log(result7);
console.log(result8);

/**
 * join
 */
const arr6 = ["a", "b", "c"];

const result9 = arr6.join("");

console.log(result9);
