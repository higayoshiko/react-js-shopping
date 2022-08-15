import React from 'react';
import Qty from '../Qty/Qty';
import styles from './Products.module.css';
import item1 from '../../images/item.jpg';

const Products = () => {

  return (
    <section className={styles.container}>
      <div className={styles.product__grid}>
      {
        Array.from(
          {length: 9},
          (_, i) => (
            <div key={i} className={styles.product__box}>
              <img className={styles.product__pic}
              src={item1}
              alt="images"
              />
              <p className={styles.product__title}>Sunglasses</p>
              <p className={styles.product__price}>Price:
                <span>$10</span>
              </p>
              <Qty />
              <div className={styles.product__buttonCtn}>
                <button className={styles.product__button}>See More</button>
                <button className={`${styles.product__button} ${styles.product__button_cart}`}>Add to cart</button>
              </div>
            </div>
          )
        )
      }
      </div>
    </section>
  );
}

export default Products;
