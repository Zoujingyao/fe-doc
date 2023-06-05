function fetchUrlMock(url) {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      // resolve(`请求${url}成功，在${rand.toFixed(2)}s后获取响应`);
      if (rand >= 0.5) resolve(`请求${url}成功，在${rand.toFixed(2)}s后获取响应`);
      else reject(`请求${url}在${rand}s后失败`);
    }, rand * 1000);
  });
}

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (typeof promises[Symbol.iterator] !== 'function') {
      // 检查是否是可迭代类型
      // 拼接错误提示字符串，基本数据类型要把值也提示给开发者
      return reject(`Error: ${typeof promises} is not iterable!`);
    }
    let resArr = new Array(promises.length);
    let cnt = 0;
    // Array.from将类数组或可迭代对象转为数据
    Array.from(promises).forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resArr[index] = res;
          cnt++;
          if (cnt === promises.length) resolve(resArr);
        })
        .catch(reject);
    });
  });
}

function asynchronousTask(url) {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand >= 0.5) resolve(`成功√ 请求${url}在${rand.toFixed(2)}s后获取响应`);
      else reject(`请求${url}失败！`);
    }, rand * 1000);
  });
}

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (typeof promises[Symbol.iterator] !== 'function') {
      throw new TypeError(`${promises} isn't iterable!`);
    }
    let finishedTaskNum = 0;
    const resArr = [];
    Array.from(promises).forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resArr[index] = res;
          finishedTaskNum++;
          if (finishedTaskNum === promises.length) resolve(resArr);
        })
        .catch(reject);
    });
  });
}

promiseAll([fetchUrlMock(1), fetchUrlMock(2), fetchUrlMock(3)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

myPromiseAll([fetchUrlMock(1), fetchUrlMock(2), fetchUrlMock(3)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
