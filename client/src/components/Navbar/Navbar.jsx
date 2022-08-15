import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.css';

const Navbar = () => {



return(
  <nav className={styles.mainNav}>
    <ul>
      <li className={styles.li}>
        <a className={styles.a} href="">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;
