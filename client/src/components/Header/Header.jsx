import React from 'react';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Shopping</h1>
      <Navbar/>
      <Main />
    </header>
  );
};

export default Header;
