import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h2 className={styles.title}>Welcome to our Website</h2>

      <a href="/games/catalog" className={styles.exploreLink}>
        Go and explore some Games 🎮
      </a>
    </section>
  );
}

export default Home;
