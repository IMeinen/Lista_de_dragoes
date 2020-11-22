import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.Header_container}>
      <h1 className={styles.Header_title}>Lista de dragões</h1>
    </header>
  )
}

export default Header;