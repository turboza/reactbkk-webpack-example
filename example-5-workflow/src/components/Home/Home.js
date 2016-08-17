import React from 'react';
import logo from 'assets/images/logo.png';
import styles from './Home.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>{__EVENT__} {__VERSION__}</h1>
      <div className={styles.Content}>
        <img src={logo} className={styles.Logo} />
      </div>
    </div>
  );
}
