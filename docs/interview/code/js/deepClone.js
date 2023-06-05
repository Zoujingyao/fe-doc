function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj; // 不是对象不拷贝直接返回
  if (hash.has(obj)) return hash.get(obj); // 如果哈希表中有这个对象的记录，取出并返回

  // 函数 正则 日期 ES6新对象，通过构造函数返回新的对象
  const constructor = obj.constructor;
  const SpecialObjTypeReg = /^(Function|RegExp|Date|Map|Set)$/i;
  if (SpecialObjTypeReg.test(constructor.name)) {
    const target = new constructor(obj);
    hash.set(obj, target);
    return target;
  }

  let target = Array.isArray(obj) ? [] : {}; // 拷贝对象还是数组，创建新的内存地址

  Object.getOwnPropertySymbols(obj).forEach((prop) => {
    // 拷贝所有Symbol属性
    target[prop] = deepClone(obj[prop], hash);
  });

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    // 拷贝自身所有字符串属性
    if (!obj.propertyIsEnumerable(prop)) {
      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(obj, prop));
    } else {
      target[prop] = deepClone(obj[prop]);
    }
  });

  hash.set(obj, target);
  return target;
}

const obj = {
  a: [1, 2, 3],
  b: {
    c: 4,
  },
  d: '122',
};

const symbolPropertyName = Symbol();
obj[symbolPropertyName] = function hello() {
  console.log('hello');
};

const obj1 = {
  a: [1, 2, 3],
  b: {
    c: 4,
  },
  d: '122',
};

const fromObj = deepClone(obj);

console.log(fromObj, fromObj === obj, obj1 === obj);
