// 栈的先入后出，两个火车进站出站次序
function check(arr1, arr2) {
  let p1 = 0,
    p2 = 0;
  const stack = [];
  debugger;
  while (p2 < arr2.length) {
    // console.log(arr2[p2], stack[stack.length - 1]);
    if (stack.length > 0 && stack[stack.length - 1] === arr2[p2]) {
      stack.pop();
      p2++;
    } else if (p1 < arr1.length) {
      stack.push(arr1[p1]);
      p1++;
    } else {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 3],
  arr2 = [3, 2, 1];
console.log(check(arr1, arr2));
