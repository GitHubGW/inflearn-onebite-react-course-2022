/**
 * 배열 메서드 > 요소 조작 (1)
 */

/**
 * push
 */
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

/**
 * pop
 */
const arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2);

/**
 * shift
 */
const arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3);

/**
 * unshift
 */
const arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4);

/**
 * slice
 */
const arr5 = [1, 2, 3, 4, 5];
const result = arr5.slice(1, 3);
const result2 = arr5.slice(1);
console.log(arr5);
console.log(result);
console.log(result2);

/**
 * concat
 */
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const result3 = arr6.concat(arr7);
console.log(arr6);
console.log(arr7);
console.log(result3);
