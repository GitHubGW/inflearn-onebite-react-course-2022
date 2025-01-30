/**
 * Truthy와 Falsy
 */

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;
let f8 = false;

console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
console.log(f5);
console.log(f6);
console.log(f7);
console.log(f8);

/**
 * 예제
 */
const printName = (name) => {
  if (!name) {
    console.log("이름이 없습니다.");
  }

  console.log(name);
};

printName("John");
printName();
