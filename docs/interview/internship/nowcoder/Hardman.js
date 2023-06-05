// Tencent笔试

const HardMan = function (name) {
  this.tasks = [() => console.log(`I am ${name}`)];

  this.rest = function (time) {
    this.tasks.push(this.sleep(time));
    return this;
  };
  this.restFirst = function (time) {
    this.tasks.unshift(this.sleep(time));
    return this;
  };
  this.learn = function (something) {
    this.tasks.push(() => console.log('Learning ' + something));
    return this;
  };
  this.sleep = function (time) {
    // 用Promise保证sleep阻塞执行，不然任务就不会按照tasks中的顺序执行
    return () =>
      new Promise((resolve) =>
        setTimeout(() => {
          console.log(`Start learning after ${time} second`);
          resolve();
        }, time * 1000),
      );
  };
  this.run = function () {
    setTimeout(async () => {
      for (let task of this.tasks) {
        await task();
      }
    }, 0);
    return this;
  };
  return this.run();
};

/*
Start learning after 4 second
I am jack
Learning chinese
*/
HardMan('jack').restFirst(4).learn('chinese');
