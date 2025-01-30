/**
 * 구조 분해 할당
 */

/**
 * 배열의 구조 분해 할당
 */

const arr = [1, 2, 3];
const [num1, num2, num3, num4 = 4] = arr;

console.log(num1, num2, num3, num4);

/**
 * 객체의 구조 분해 할당
 */

const obj = { a: 1, b: 2, c: 3 };
const { a, b, c, extra = "extra" } = obj;

console.log(a, b, c, extra);

/**
 * 예제
 */

const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func({ name: "John", age: 20, hobby: "coding" });
