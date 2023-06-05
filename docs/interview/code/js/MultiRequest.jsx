// 模拟请求
function fetchUrlMock(url) {
  return new Promise((resolve, reject) => {
    const time = Math.random() * 1000;
    setTimeout(() => resolve(`任务${url}在${time}ms后拿到返回`), time);
  });
}

function multiRequest(urls = [], maxNum) {
  // 请求总数量
  const len = urls.length;
  // 根据请求数量创建一个数组来保存请求的结果
  const result = new Array(len).fill(false);
  // 当前完成的数量
  let count = 0;

  return new Promise((resolve, reject) => {
    // 请求maxNum个
    while (count < maxNum) {
      run();
    }

    function run() {
      let current = count++;
      // 处理边界条件
      if (current >= len) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        resolve(result);
        return;
      }
      const url = urls[current];
      console.log(`开始 ${current}`, new Date().toLocaleString());
      fetchUrlMock(url)
        .then((res) => {
          // 保存请求结果
          result[current] = res;
          console.log(`成功完成 ${current}`, new Date().toLocaleString());
        })
        .catch((err) => {
          console.log(`异常结束 ${current}`, new Date().toLocaleString());
          result[current] = err;
        })
        .finally(() => {
          // 请求没有全部完成, 就递归
          if (current < len) {
            run();
          }
        });
    }
  });
}

multiRequest(['/a', '/b', '/c'], 2).then((res) => console.log(res));

export default () => {
  return 'MultiRequest';
};
