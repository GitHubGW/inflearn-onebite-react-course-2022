/**
 * 객체 2
 */

/**
 * 상수 객체
 */

const animal = {
  type: "dog",
  name: "뽀삐",
};
console.log(animal);

animal.type = "cat";
console.log(animal);

animal.color = "black";
console.log(animal);

delete animal.color;
console.log(animal);

// animal = "123";

/**
 * 메서드
 */

const person = {
  name: "John",
  age: 30,
  sayHello: () => {
    console.log("안녕하세요");
  },
  printName() {
    console.log(this.name);
  },
};

person.sayHello();
person.printName();
