// setTimeout(() => {
//   console.log(1);
// }, 3000);
//
// setTimeout(() => {
//   console.log(2);
// }, 1000);
//
// console.log(3);
//
// var obj = {
//   name: 'objName',
//   foo: function () {
//     console.dir(this);
//     console.log(this.name);
//     return 'success';
//   },
// };
//
// obj.foo();

function Person() {
  this.name = 'June';
}

Person.prototype.attrOnProto = function () {
  return this.name;
};
const person = new Person();
Object.defineProperty(person, 'age', {
  enumerable: true,
  value: 17,
  writable: true,
  configurable: true
});

Object.defineProperty(person, 'immutableAttr', {
  enumerable: false,
  value: 3,
  writable: true,
  configurable: true
});

// Object.keys返回对象自身可枚举属性组成的数组，不会遍历对象原型链上的属性以及 Symbol 属性
console.log('Object.keys: ', Object.keys(person));   // ['name', 'age']

// for in 遍历对象及其原型链上可枚举的属性；
let forInRes = 'for in: ';
for (const i in person) {
  forInRes += (i + ', ');
}
console.log(forInRes); // name, age, attrOnProto

// getOwnPropertyNames返回对象所有自身属性组成的属性（可枚举和不可枚举的），Symbol属性要通过getOwnPropertySymbols
console.log('getOwnPropertyNames: ', Object.getOwnPropertyNames(person)); // [ 'name', 'age', 'immutableAttr' ]

// for of ES6新增,支持遍历数组，类数组对象（DOM NodeList），字符串，Map 对象，Set 对象；不支持遍历普通对象(要有iterator)，不会遍历到对象属性及其原型属性
let forOfRes = 'for of: ';
for (const key of Object.keys(person)) {
  forOfRes += (key + ', ');
}
console.log(forOfRes);
