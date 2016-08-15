import React from 'react';
import logo from 'assets/images/logo.png';
import styles from './Home.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>ReactJS Bangkok 1.0.0</h1>
      <div className={styles.Content}>
        <img src={logo} className={styles.Logo} />
      </div>
    </div>
  );
}
