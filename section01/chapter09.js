/**
 * 함수 선언식
 */

function greeting() {
  console.log("안녕하세요");
}

greeting();

function getArea(width, height) {
  const another = () => {
    console.log("another");
  };

  another();
  return width * height;
}

console.log(getArea(10, 20));
