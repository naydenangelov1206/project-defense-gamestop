import styles from "./Catalog.module.css";
import Game from "./Game";

function Catalog() {
  const games = [
    { title: "minecraft", category: "Open World" },
    { title: "minecraft", category: "Open World" },
    { title: "minecraft", category: "Open World" },
    { title: "minecraft", category: "Open World" },
    { title: "minecraft", category: "Open World" },
    { title: "minecraft", category: "Open World" },
  ];

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.catalogTitleContainer}>
        <h2 className={styles.catalogTitle}>All Games 🎮</h2>
      </div>

      <div className={styles.gameCardContainer}>
        {games.length > 0 ? (
          games.map((game, i) => <Game game={game} key={i} />)
        ) : (
          <div className={styles.loadingContainer}>
            <p className={styles.loadingMessage}>Loading ...</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;
