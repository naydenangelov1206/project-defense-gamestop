import { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    repass: "",
  });

  function onSubmit(e) {
    e.preventDefault();
  }

  function onEmailChangeHandler(e) {
    setRegisterInfo({ ...registerInfo, email: e.target.value });
  }

  function onPasswordChangeHandler(e) {
    setRegisterInfo({ ...registerInfo, password: e.target.value });
  }

  function onRepassChangeHandler(e) {
    setRegisterInfo({ ...registerInfo, repass: e.target.value });
  }

  function onUsernameChangeHandler(e) {
    setRegisterInfo({ ...registerInfo, username: e.target.value });
  }

  function onAvatarChangeHandler(e) {
    setRegisterInfo({ ...registerInfo, avatar: e.target.value });
  }

  return (
    <section className={styles.registerFormContainer}>
      <form onSubmit={onSubmit} className={styles.registerForm}>
        <h2 className={styles.registerFormTitle}>Register</h2>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            onChange={onEmailChangeHandler}
            placeholder="peter@abv.bg"
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            onChange={onPasswordChangeHandler}
            placeholder="Enter password"
          />
        </label>

        <label htmlFor="repass">
          Confirm Password:
          <input
            type="password"
            id="repass"
            name="repass"
            onChange={onRepassChangeHandler}
            placeholder="Repeat password"
          />
        </label>

        <button className={styles.registerFormButton}>Register</button>

        <p className={styles.gotoLogin}>
          If you have an account{" "}
          <a href="/games/login" className={styles.LoginLink}>
            {" "}
            Login here 👈
          </a>
        </p>
      </form>
    </section>
  );
}

export default Register;
