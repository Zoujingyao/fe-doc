const object = {
  a: [
    {
      b: {
        c: 3,
      },
    },
  ],
};

console.log(_get(object, 'a[0].b.c'));
// => 3
console.log(_get(object, ['a', '0', 'b', 'c']));
// => 3
console.log(_get(object, 'a.b.c', 'default')); // 第三个参数如果值是undefined，则返回第三个参数
// => 'default'

/**
 *
 * @param {*} object
 * @param {*} key [] | string
 * @param {*} defaultVal 如果值是undefined，则返回第三个参数
 */
function _get(object, key, defaultVal = undefined) {
  if (!Array.isArray(key)) {
    key = key
      .trim()
      .replace(/\[(.*)\]/g, function (letter, match) {
        return `.${match}`;
      })
      .split('.');
  }
  for (const keyItem of key) {
    object = object[keyItem];
    if (!object) return defaultVal;
  }
  return object | defaultVal;
}
