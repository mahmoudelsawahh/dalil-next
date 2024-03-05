import React from "react";
import styles from  "../styles/Home.module.scss";

const SplashScreen = () => {
  return (
    <div className={styles.Splash_div}>
      <div  className={styles.test}>
        <div  className={styles.box}>
          <div className={`${styles.b1} ${styles.b}`}></div>
          <div className={`${styles.b2} ${styles.b}`}></div>
          <div className={`${styles.b3} ${styles.b}`}></div>
          <div className={`${styles.b4} ${styles.b}`}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
