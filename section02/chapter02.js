/**
 * 단락 평가
 */

const returnFalse = () => {
  console.log("returnFalse");
  return false;
};

const returnTrue = () => {
  console.log("returnTrue");
  return true;
};

console.log(returnFalse() && returnTrue());
console.log("--------------------------------");

console.log(returnTrue() && returnFalse());
console.log("--------------------------------");

console.log(returnTrue() || returnFalse());
console.log("--------------------------------");

console.log(returnTrue() && returnTrue());
console.log("--------------------------------");

/**
 * 예제
 */

const printName = (person) => {
  const name = person && person.name;
  console.log(name || "이름이 없습니다.");
};

printName({ name: "John" });
printName();
