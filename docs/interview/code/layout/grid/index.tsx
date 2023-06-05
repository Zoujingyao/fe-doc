import React from 'react';
import styles from './index.less';

// TODO 学习grid布局 https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
const BoxLayout: React.FC = (props) => {
  const num = 5;
  const boxes = new Array(num).fill(0).map((item, index) => ({
    key: index,
  }));

  console.log(boxes);

  return (
    <div className={styles.container}>
      {boxes.map((box) => (
        <div key={box.key} className={styles.box} />
      ))}
    </div>
  );
};

export default BoxLayout;
