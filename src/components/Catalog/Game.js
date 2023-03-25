import styles from "./Catalog.module.css";

import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <div className={styles.gameCard}>
      <img src={game.imageUrl} alt="someImage" className={styles.gameCardImg} />
      <p>Title: {game.title}</p>
      <p>Category: {game.category}</p>

      <Link
        to={"/games/details/" + game._id}
        className={styles.gameCardDetailsLink}
      >
        Details 🛈
      </Link>
    </div>
  );
}

export default Game;
