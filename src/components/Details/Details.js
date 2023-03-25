import styles from "./Details.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function Details() {
  const [gameComment, setComment] = useState({
    comment: "",
  });

  const comments = ["pesho@abv.bg: so good", "ivo@abv.bg: i like it"];

  const isOwner = true;
  const accessToken = true;

  function onCommentChange(e) {
    setComment({ ...gameComment, comment: e.target.value });
  }

  function gameDeleteHandler(e) {
    console.log("deleted");
  }

  function addCommentHandler(e) {
    e.preventDefault();
  }

  return (
    <section className={styles.detailsPageContainer}>
      <div className={styles.detailsContainer}>
        <img
          src="../../images/Minecraft.png"
          alt="someImage"
          className={styles.detailsImage}
        />

        <p>Title: gameTitle</p>
        <p>
          Summary:
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum iure
          officiis natus ad inventore molestiae vero neque, explicabo voluptates
          fugiat nam debitis suscipit fuga quo cupiditate odit rem dolor
          provident?
        </p>
        <p>Category: FPS Shooter</p>
        <p>MaxLevel: 69</p>

        {isOwner && (
          <div className={styles.buttonContainer}>
            <Link to="/games/edit/" className={styles.editButtonLink}>
              Edit ✏️
            </Link>
            <button onClick={gameDeleteHandler} className={styles.deleteButton}>
              Delete ❌
            </button>
          </div>
        )}
      </div>

      <h3 className={styles.commentsTitle}>Comments</h3>

      <div className={styles.commentContainer}>
        {!isOwner && accessToken && (
          <form onSubmit={addCommentHandler} className={styles.commentsForm}>
            <h2 className={styles.commentsFormTitle}>Add New Comment</h2>

            <input
              type="text"
              name="comment"
              id="comment"
              onChange={onCommentChange}
            />

            <button className={styles.addCommentButton}>Add Comment</button>
          </form>
        )}

        {comments &&
          comments.map((x, i) => (
            <div className={styles.commentsContainer} key={i}>
              <p className={styles.comments}>{x}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Details;
