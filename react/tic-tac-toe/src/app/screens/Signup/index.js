import React, { Component } from 'react';

import styles from './styles.module.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleRepeatPasswordChange(event) {
    this.setState({ repeatPassword: event.target.value });
  }

  render() {
    return (
      <div className={styles.signupContainer}>
        <div className={styles.signup}>
          <div className={styles.signupLogoContainer}>
            <img className={styles.signupLogo} src="../../assets/logo-wolox.png" alt="logo" />
          </div>
          <form onSubmit={this.handleSignup}>
            <label className={`${styles.signupFormText} ${styles.textBold}`}>Nombre</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handleNameChange} />
            <label className={`${styles.signupFormText} ${styles.textBold}`}>Apellido</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handleLastNameChange} />
            <label className={`${styles.signupFormText} ${styles.textBold}`}>Email</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handleEmailChange} />
            <label className={`${styles.signupFormText} ${styles.textBold}`}>Contraseña</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handlePasswordChange} />
            <label className={`${styles.signupFormText} ${styles.textBold}`}>Confirmación de contraseña</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handleRepeatPasswordChange} />
            <input type="submit" value="submit" />
          </form>
          <div className={styles.signupButtonContainer}>
            <button className={styles.depressedButton} type="button">Sign Up</button>
          </div>
          <button className={styles.button} type="button">Login</button>
        </div>
      </div>
    );
  }
}

export default Signup;
