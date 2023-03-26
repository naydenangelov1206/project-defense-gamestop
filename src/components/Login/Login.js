import styles from "./Login.module.css";

import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    authService
      .login(loginInfo.email, loginInfo.password)
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
    setLoginInfo({ ...loginInfo, email: e.target.value });
  }

  function onPasswordChangeHandler(e) {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  }

  return (
    <section className={styles.loginFormContainer}>
      {error ? (
        <div className={styles.errorMessageContainer}>
          <p className={styles.errorMessage}>{error}</p>
        </div>
      ) : null}

      <form onSubmit={onSubmit} className={styles.formLogin}>
        <h2 className={styles.loginFormTitle}>Login</h2>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={loginInfo.email}
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
            value={loginInfo.password}
            onChange={onPasswordChangeHandler}
            placeholder="Enter password"
          />
        </label>

        <button className={styles.loginFormButton}>Login</button>

        <p className={styles.gotoRegister}>
          If you don't have an account
          <Link to="/games/register" className={styles.registerLink}>
            {" "}
            Register here 👈
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
