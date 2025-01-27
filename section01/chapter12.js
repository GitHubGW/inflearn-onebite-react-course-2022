/**
 * 스코프
 * - 전역 스코프
 * - 지역 스코프
 */

let a = 1;

function funcA() {
  let b = 2;
  console.log(a, b);
}

funcA();

// console.log(b);

if (true) {
  let c = 3;
}

// console.log(c);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// console.log(i);

function funcB() {
  console.log("funcB");

  function funcC() {
    console.log("funcC");
  }
}

// funcC();

if (true) {
  function funcD() {
    console.log("funcD");
  }
}

funcD();
