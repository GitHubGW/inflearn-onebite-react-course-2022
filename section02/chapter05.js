/**
 * 원시타입
 * 문자열, 숫자, 불리언, null, undefined, symbol
 */
const a = 1;
const b = a;
console.log(a === b);

/**
 * 객체타입
 * 배열, 함수, 객체
 */
const o1 = { a: 1 };
const o2 = o1;
const o3 = { ...o1 };

console.log(o1 === o2);
console.log(o1 === o3);
