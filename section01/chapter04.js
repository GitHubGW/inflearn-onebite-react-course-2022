/**
 * 형 변환
 */

/**
 * 묵시적 형 변환
 */
let num = 10;
let str = "20";

console.log(num + str);

/**
 * 명시적 형 변환
 */
let num1 = 10;
let str1 = "10";

let strToNum = Number(str1);
let numToStr = String(num1);

console.log(10 + strToNum);
