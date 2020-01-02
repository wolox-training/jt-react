import React, { Component } from 'react';

import Logo from '../../assets/logo-wolox.png';

import styles from './styles.module.scss';

class Signup extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  handleSignup = event => {
    event.preventDefault();
    console.log(this.state);
  }

  handleNameChange = event => this.setState({ name: event.target.value });

  handleLastNameChange = event => this.setState({ lastName: event.target.value });

  handleEmailChange = event => this.setState({ email: event.target.value });

  handlePasswordChange = event => this.setState({ password: event.target.value });

  handleRepeatPasswordChange = event => this.setState({ repeatPassword: event.target.value });

  render() {
    return (
      <div className={styles.signupContainer}>
        <div className={styles.signup}>
          <div className={styles.signupLogoContainer}>
            <img className={styles.signupLogo} src={Logo} alt="logo" />
          </div>
          <form className={styles.depressedButtonContainer} onSubmit={this.handleSignup}>
            <label className={`${styles.signupFormText} text-bold`}>Nombre</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handleNameChange} />
            <label className={`${styles.signupFormText} text-bold`}>Apellido</label>
            <input className={styles.signupFormInput} type="text" onChange={this.handleLastNameChange} />
            <label className={`${styles.signupFormText} text-bold`}>Email</label>
            <input className={styles.signupFormInput} type="email" onChange={this.handleEmailChange} />
            <label className={`${styles.signupFormText} text-bold`}>Contraseña</label>
            <input className={styles.signupFormInput} type="password" onChange={this.handlePasswordChange} />
            <label className={`${styles.signupFormText} text-bold`}>Confirmación de contraseña</label>
            <input className={styles.signupFormInput} type="password" onChange={this.handleRepeatPasswordChange} />
            <input className={styles.depressedButton} type="submit" value="Sign Up" />
          </form>
          <button className={styles.button} type="button">Login</button>
        </div>
      </div>
    );
  }
}

export default Signup;
