const obj = {
  a_bc_dd: 1,
  d_addd_e: 2,
};

function toHump(str) {
  return str.replace(/_(\w)/g, function (s, letter) {
    return letter.toUpperCase();
  });
}

// 将对象中的下划线属性都改成驼峰
for (let key of Object.keys(obj)) {
  console.log(key);
  obj[toHump(key)] = obj[key];
  delete obj[key];
}

console.log(obj);

function toLine(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const sHump = 'aBddFw';
console.log(toLine(sHump));
