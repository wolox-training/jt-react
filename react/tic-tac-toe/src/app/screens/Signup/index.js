import React from 'react';

import styles from './styles.module.scss';

const Signup = () => (
  <div className={styles.loginContainer}>
    <div className={styles.login}>
      <div className={styles.loginLogoContainer}>
        <img className={styles.loginLogo} src="logo-wolox.png" alt="logo" />
      </div>
      <form>
        <label className={`${styles.loginFormText} ${styles.textBold}`}>Email:</label>
        <input className={`${styles.loginFormEmailInput} ${styles.loginFormInput}`} type="text" />
        <label className={`${styles.loginFormText} ${styles.textBold}`}>Password:</label>
        <input className={`${styles.loginFormPasswordInput} ${styles.loginFormInput}`} type="text" />
      </form>
      <div className={styles.loginButtonContainer}>
        <button className={styles.loginButton} type="button">Login</button>
      </div>
      <button className={styles.signupButton} type="button">Sign Up</button>
    </div>
  </div>);

export default Signup;
