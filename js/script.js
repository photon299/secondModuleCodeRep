"use strict";

//? 53. (д) Оператор нулевого слияния (Nullish, ??) ES11
// const box = document.querySelector(".box"),
//       newHeight = 100,
//       newWidth = 400;

// const changeParams = (elem, h, w) => {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = h ?? 200 * w ?? 200;
// };

// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;
// console.log(userName ?? userKey ?? "User");

//? 54. (д) Оператор опциональной цепочки (?.) ES11
// const box = document.querySelector(".box"),
//       block = document.querySelector(".block");
// console.log(block);
// if (block) {
//     console.log(block.textContent);
// }
// console.log(block?.textContent);
// console.log(1 + 2);
// const userData = {
//     userName: "Alex",
//     userAge: null,
//     say: () => {
//         console.log("Hello!");
//     }
// };
// console.log(userData.skills?.js);
// userData.say?.();


//? 55. (д) Живые коллекции и полезные методы
// const boxesQuery = document.querySelectorAll(".box"),
//       boxesGet = document.getElementsByClassName("box");
// boxesQuery.forEach(box => (box.matches(".this")) ? console.log(box) : "");
// console.log(boxesQuery[0].closest(".wrapper"));
// boxesQuery[0].remove();
// boxesGet[0].remove();      
// for (let i = 0; i < 5; i++) {
//     const div = document.createElement("div");
//     div.classList.add("box");
//     document.body.append(div);
//     boxesGet[boxesGet.length] = div;
// }
// console.log(boxesQuery);
// console.log(boxesGet);
// console.log(Array.from(boxesGet));

//? 56. (д) Тип данных Symbol
// let id = Symbol("id");
// const obj = {
//     "name": "Test",
//     [id]: 1,
//     getUd: () => {
//         return this[id];
//     }
// };
// for (let value in obj) {console.log(value);}

//? 57. (д) Дескрипторы свойств и полезные методы объектов
//? 58. (*) Итерируемые конструкции
// Object.defineProperty(user, "birthday", {value: prompt("Date?"), enumerable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, "birthday"));
// Object.defineProperty(user, "showMyPublicData", {enumerable: false});
// for (let key in user) {
//     console.log(key);
// }
// console.log(Object.entries(user));
// const user = {
//     name: "Alex",
//     surname: "Smith",
//     birthday: "20/04/1993",
//     showMyPublicData: () => {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// for (const key in user) {
//     console.log(user[key]);
// }

// const arr = ["b", "a", "c"];
// for (const key of arr) {
//     console.log(key);
// }

// const str = "kssc";
// for (const key in str) {
//     console.log(str[key]);
// }
// const salaries = {
//     john: 500,
//     ivan : 1000,
//     ann: 5000,
//     sayHello: () => {
//         console.log("Hello");
//     },
// };
// salaries[Symbol.iterator] = () => {
//     return {
//         current: this.john,
//         last: this.ann,
//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {done: false, value: this.current};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// };
// const iterator = salaries[Symbol.iterator]();
// for (let res of salaries) {
//     console.log(res);
// }


//? 59. (*) Map
// const user = {
//     name: "Alex",
//     surname: "Smith",
//     birthday: "20/04/1993",
//     showMyPublicData: () => {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50},
];

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});
console.log(map);
