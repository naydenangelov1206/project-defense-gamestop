import styles from "./Catalog.module.css";
import Game from "./Game";

import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

function Catalog() {
  const { games } = useContext(GameContext);

  return (
    <section className={styles.catalogContainer}>
      <div className={styles.catalogTitleContainer}>
        <h2 className={styles.catalogTitle}>All Games 🎮</h2>
      </div>

      <div className={styles.gameCardContainer}>
        {games.length > 0 ? (
          games.map(game => <Game game={game} key={game._id} />)
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
