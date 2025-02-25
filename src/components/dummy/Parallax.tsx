import React from 'react';
import styles from './Parallax.module.css';

const Parallax = () => {
  return (
    <div className={styles.parallaxContainer}>
      <div className={`${styles.layer} ${styles.layer1}`}></div>
      <div className={`${styles.layer} ${styles.layer2}`}></div>
      <div className={`${styles.layer} ${styles.layer3}`}></div>
      <div className={styles.content}>
        <h1>3D Parallax Effect</h1>
        <p>Scroll down to experience the 3D effect.</p>
      </div>
    </div>
  );
};

export default Parallax;
