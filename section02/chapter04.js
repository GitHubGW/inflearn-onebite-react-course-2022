/**
 * Spread 연산자와 Rest 매개변수
 */

/**
 * Spread 연산자
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [4, ...arr1, 5, 6];

console.log(arr3);

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const obj3 = { ...obj2, ...obj1 };

console.log(obj3);

const funcA = (num1, num2, num3) => {
  console.log("num1", num1);
  console.log("num2", num2);
  console.log("num3", num3);
};

funcA(...arr1);

/**
 * Rest 매개변수
 */

const funcB = (num1, ...rest) => {
  console.log("num1", num1);
  console.log("rest", rest);
};

funcB(...arr1);
