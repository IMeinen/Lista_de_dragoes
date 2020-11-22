import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (<footer className={styles.Footer_container}>
    <h1 className={styles.Footer_title}> Feito por Artur Meinen </h1>
  </footer>)
}

export default Footer;