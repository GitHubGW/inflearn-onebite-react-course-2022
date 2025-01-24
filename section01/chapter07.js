/**
 * 조건문
 */

/**
 * if 조건문
 */
let num1 = 10;

if (num1 > 1) {
  console.log("num1은 1보다 큽니다.");
} else {
  console.log("num1은 1보다 작습니다.");
}

/**
 * switch 조건문
 */
let animal = "dog";

switch (animal) {
  case "dog": {
    console.log("강아지입니다.");
    break;
  }
  case "cat": {
    console.log("고양이입니다.");
    break;
  }
  default: {
    console.log("강아지, 고양이가 아닙니다.");
  }
}
