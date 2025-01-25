/**
 * 함수 표현식과 화살표 함수
 */

function funcA() {
  console.log("funcA");
}

let varA = funcA();

let varB = function funcB() {
  console.log("funcB");
};

varB();
// funcB();

/**
 * 화살표 함수
 */

const funcC = () => {
  console.log("funcC");
};

funcC();
