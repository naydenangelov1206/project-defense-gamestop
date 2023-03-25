import styles from "./Home.module.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h2 className={styles.title}>Welcome to our Website</h2>

      <Link to="/games/catalog" className={styles.exploreLink}>
        Go and explore some Games 🎮
      </Link>
    </section>
  );
}

export default Home;
