import React from 'react';
import styles from './PriceCart.module.css';

const PriceCart = () => {

return(
  <div>
    <h4>Order Summary</h4>
    <div className={styles.generalFees}>
      <p>Cart Subtotal</p>
      <p>100</p>
    </div>
    <div className={styles.generalFees}>
      <p>Shipping</p>
      <p>200</p>
    </div>
    <div className={styles.generalFees}>
      <p>Tax</p>
      <p>10</p>
    </div>
    <div className={styles.generalFees}>
      <p className={styles.orderTotal}>Order Total</p>
      <p className={styles.orderTotal}>10</p>
    </div>
  </div>
  );
}

export default PriceCart;
