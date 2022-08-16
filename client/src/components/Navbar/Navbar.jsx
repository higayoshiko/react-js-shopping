import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.css';

const Navbar = () => {



return(
  <nav className={styles.mainNav}>
    <ul>
      <li className={styles.li}>
        <Link to="/Cart" className={styles.a}>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;
