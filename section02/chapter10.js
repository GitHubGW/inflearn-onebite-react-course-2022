/**
 * Date 객체와 날짜
 */

let date1 = new Date();
let date2 = new Date("2022-02-01T10:25:30");
let date3 = new Date(2022, 1, 1, 23, 59, 59);

console.log(date1);
console.log(date2);
console.log(date3);

/**
 * 타임 스탬프
 */
let ts1 = date1.getTime();

let date4 = new Date(ts1);

console.log(ts1);
console.log(date4);

/**
 * 시간 요소 추출하기
 */
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hours, minutes, seconds);

/**
 * 시간 수정하기
 */
const date5 = new Date();

date5.setFullYear(2023);
date5.setMonth(2);
date5.setDate(25);

console.log(date5);

/**
 * 시간을 여러 포맷으로 출력하기
 */
console.log(date5.toDateString());
console.log(date5.toLocaleString());
console.log(date5.toLocaleDateString());
