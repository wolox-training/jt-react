import React, { Component } from 'react'
import styles from 'styles.scss'

class Signup extends Component {
  render() {
    return (
      <div class={styles.loginContainer}>
        <div class={styles.login}>
          <div class={styles.loginLogoContainer}>
            <img class={styles.loginLogo} src="images/LogoWolox.png" alt="logo">
          </div>
          <form>
            <label class="login-form-text text-bold">Email:</label>
            <input class="login-form-email-input login-form-input" type="text">
            <label class="login-form-text text-bold">Password:</label>
            <input class="login-form-password-input login-form-input" type="text">
          </form>
          <div class="login-button-container">
            <button class="login-button">Login</button>
          </div>
          <button class="sign-up-button">Sign Up</button>
        </div>
     </div>
    )
  }  
}
