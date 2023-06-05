function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj; // 不是对象不拷贝直接返回
  if (hash.has(obj)) {
    // 如果哈希表中有这个对象的记录，取出并返回
    return hash.get(obj);
  }

  // 函数 正则 日期 ES6新对象,执行构造题，返回新的对象
  const constructor = obj.constructor;
  const SpecialObjTypeReg = /^(Function|RegExp|Date|Map|Set)$/i;
  if (SpecialObjTypeReg.test(constructor.name)) {
    const target = new constructor(obj);
    hash.set(obj, target);
    return target;
  }

  let target = Array.isArray(obj) ? [] : {}; // 拷贝对象还是数组，创建新的内存地址

  Object.getOwnPropertySymbols(obj).forEach((prop) => {
    target[prop] = deepClone(obj[prop], hash);
  });

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (!obj.propertyIsEnumerable(prop)) {
      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(obj, prop));
    } else {
      target[prop] = deepClone(obj[prop]);
    }
  });

  hash.set(obj, target);
  return target;
}

export default () => {
  return 'deepClone';
};
