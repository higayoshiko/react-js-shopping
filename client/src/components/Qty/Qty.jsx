import React, { useState } from 'react';
import styles from './Qty.module.css';

const Qty = () => {

let [count, setCount] = useState(0);

console.log(count)

  return (
    <div className={styles.qtyCounter__ctn}>
      <button className={styles.qtyCounter__btn}
      onClick={() => {(count > 0) ? setCount(count - 1) : count = 0}}>
        <span className={styles.absolute}>-</span>
      </button>
      <p> {count} </p>
      <button className={styles.qtyCounter__btn}
      onClick={() => setCount(count + 1)}>
        <span className={styles.absolute}>+</span>
      </button>
    </div>
  );
}

export default Qty;
