import styles from "./Navigation.module.css";

function Navigation() {
  const user = false;

  const hasUser = (
    <>
      <li>
        <a href="/games/create">Create</a>
      </li>
      <li>
        <a href="/games/logout">Logout</a>
      </li>
      <li>
        <p>Welcome, {user.email}</p>
      </li>
    </>
  );

  const noUser = (
    <>
      <li>
        <a href="/games/login">Login</a>
      </li>
      <li>
        <a href="/games/register">Register</a>
      </li>
    </>
  );

  return (
    <header>
      <nav>
        <ul className={styles.navigationBox}>
          <li>
            <a href="/games">GameStop🎮</a>
          </li>
          <li>
            <a href="/games/catalog">Catalog</a>
          </li>
          {user.accessToken ? hasUser : noUser}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
