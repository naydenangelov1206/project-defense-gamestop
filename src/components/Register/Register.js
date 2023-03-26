import styles from "./Register.module.css";

import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    repass: "",
  });

  const [error, setError] = useState("");

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();

    if (registerInfo.password !== registerInfo.repass) {
      setError("Passwords don't match");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (registerInfo.password.length < 5) {
      setError("Password should have at least 5 characters");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (registerInfo.email.length < 8) {
      setError("Email should have at least 5 characters");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (!emailRegEx.test(registerInfo.email)) {
      setError("Email doesn't exist");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    authService
      .register(registerInfo.email, registerInfo.password)
      .then(authData => {
        userLogin(authData);
        navigate("/");
      })
      .catch(err => {
        setError(err);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
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
      {!error ? null : (
        <div className={styles.registerErrors}>
          <p>{error}</p>
        </div>
      )}

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
          <Link to="/games/login" className={styles.LoginLink}>
            {" "}
            Login here 👈
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
