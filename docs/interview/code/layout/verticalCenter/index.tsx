import React from 'react';
import styles from './index.less';

const VerticalCenter: React.FC = () => {
  return (
    <div className={styles.father}>
      <div className={styles.child} />
    </div>
  );
};

export default VerticalCenter;
