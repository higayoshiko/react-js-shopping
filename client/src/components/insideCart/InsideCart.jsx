import React from 'react';
// import PropTypes from "prop-types";
import styles from './InsideCart.module.css';

const InsideCart = () => {

  return(
    <div className={styles.listCtn}>
      <div>
        <p className={styles.itemName}>Name</p>
        <p className={styles.itemPrice}>Price</p>
        <p className={styles.itemQtn}>1</p>
      </div>
      <div>
        <p className={styles.itemName}>Name</p>
        <p className={styles.itemPrice}>Price</p>
        <p className={styles.itemQtn}>1</p>
      </div>
      <div>
        <p className={styles.itemName}>Name</p>
        <p className={styles.itemPrice}>Price</p>
        <p className={styles.itemQtn}>1</p>
      </div>
    </div>
  );
  }

export default InsideCart;
