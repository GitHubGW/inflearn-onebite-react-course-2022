/**
 * 객체 1
 */

const obj1 = new Object();
const obj2 = {};

let person = {
  name: "John",
  age: 30,
  gender: "male",
  10: 10,
  _: "hidden",
};

console.log(person);
console.log(person._);

console.log(person.name);
console.log(person["name"]);

person.hobby = "coding";
console.log(person);

let result1 = "name" in person;
console.log(result1);

let result2 = "hello" in person;
console.log(result2);
