import styles from "./Navigation.module.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Navigation() {
  const { user } = useContext(AuthContext);

  const hasUser = (
    <>
      <li>
        <Link to="/games/create">Create</Link>
      </li>
      <li>
        <Link to="/games/logout">Logout</Link>
      </li>
      <li>
        <p className={styles.welcomeMessage}>Welcome, {user.email}</p>
      </li>
    </>
  );

  const noUser = (
    <>
      <li>
        <Link to="/games/login">Login</Link>
      </li>
      <li>
        <Link to="/games/register">Register</Link>
      </li>
    </>
  );

  return (
    <header>
      <nav>
        <ul className={styles.navigationBox}>
          <li>
            <Link to="/">GameStop🎮</Link>
          </li>
          <li>
            <Link to="/games/catalog">Catalog</Link>
          </li>
          {user.accessToken ? hasUser : noUser}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
