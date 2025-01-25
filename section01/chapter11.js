/**
 * 콜백 함수
 */

const main = (value) => {
  // console.log(value);
  value();
};

const sub = () => {
  console.log("sub");
};

main(sub);

/**
 * 예제
 */

const repeat = (count) => {
  for (let i = 0; i < count; i++) {
    console.log(i);
  }
};

const repeatDouble = (count) => {
  for (let i = 0; i < count; i++) {
    console.log(i * 2);
  }
};

repeat(10);
repeatDouble(10);
console.log("===============");

const baseRepeat = (count, callback) => {
  for (let i = 0; i < count; i++) {
    callback(i);
  }
};

baseRepeat(10, (i) => {
  console.log(i);
});
baseRepeat(10, (i) => {
  console.log(i * 2);
});
baseRepeat(10, (i) => {
  console.log(i * 3);
});

console.log("===============");
