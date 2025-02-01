/**
 * 반복문으로 배열과 객체 순회하기
 */

/**
 * 배열 순회
 */
const arr = [1, 2, 3, 4, 5];

// 인덱스 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 요소 순회
for (const item of arr) {
  console.log(item);
}

/**
 * 객체 순회
 */
const person = {
  name: "John",
  age: 30,
  gender: "male",
};

const keys = Object.keys(person);
const values = Object.values(person);
console.log("keys", keys);
console.log("values", values);

for (const key in person) {
  console.log(key, person[key]);
}

for (const value of Object.values(person)) {
  console.log(value);
}
