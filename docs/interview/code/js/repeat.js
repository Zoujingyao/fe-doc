function one(func, wait, args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      func.call(this, ...args);
      resolve();
    }, wait);
  });
}

function repeat(func, times, wait) {
  return async function (...args) {
    for (let i = 1; i <= times; i++) {
      await one(func, wait, args);
    }
  };
}

repeat(console.log, 5, 1000)('hello world');
