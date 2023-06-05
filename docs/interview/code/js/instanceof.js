function my_instanceof(instance, theClass) {
  let leftProto = Object.getPrototypeOf(instance);
  while (leftProto !== null) {
    if (leftProto === theClass.prototype) return true;
    leftProto = Object.getPrototypeOf(leftProto);
  }
  return false;
}

function Animal() {}

// Dog继承Animal有两个步骤
function Dog() {
  // 1. 调用父类的构造函数
  Animal.call(this);
}

// 2. 让子类的原型指向父类的原型
Dog.prototype = Object.create(Animal.prototype);
// 3. 指定构造函数
Dog.prototype.constructor = Dog; // 构造函数指回自己，不然console.log(Dog.prototype.constructor === Animal); // true

const dog = new Dog();

console.log(`dog is instanceof Dog: ${my_instanceof(dog, Dog)}`);
console.log(`dog is instanceof Animal: ${my_instanceof(dog, Animal)}`);
