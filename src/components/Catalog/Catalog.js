import { Link } from "react-router-dom";
import styles from "./Catalog.module.css";

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
          games.map((game, i) => (
            <div className={styles.gameCard} key={i}>
              <img
                src="../../images/Minecraft.png"
                alt="someImage"
                className={styles.gameCardImg}
              />
              <p>Title: {game.title}</p>
              <p>Category: {game.category}</p>

              <Link
                to={"/games/details/" + game._id}
                className={styles.gameCardDetailsLink}
              >
                Details 🛈
              </Link>
            </div>
          ))
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
