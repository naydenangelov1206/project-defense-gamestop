import styles from "./Details.module.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import { AuthContext } from "../../contexts/AuthContext";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";

function Details() {
  const [gameComment, setComment] = useState({
    comment: "",
  });

  const { gameId } = useParams();
  const { fetchGameDetails, selectGame, gameDelete, addComment } =
    useContext(GameContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const currentGame = selectGame(gameId);
  const isOwner = currentGame?._ownerId === user._id;

  useEffect(() => {
    gameService.getOne(gameId).then(result => {
      fetchGameDetails(gameId, result);
    });
  }, []);

  function gameDeleteHandler(e) {
    const confirmation = window.confirm(
      "Are you sure you want to delete this game"
    );

    if (confirmation) {
      gameService.remove(gameId).then(() => {
        gameDelete(gameId);
        navigate("/games/catalog");
      });
    }
  }

  function addCommentHandler(e) {
    e.preventDefault();

    commentService.create(gameId, gameComment.comment).then(res => {
      addComment(gameId, user.email + ": " + res.text);
    });
  }

  function onCommentChange(e) {
    setComment({ ...gameComment, comment: e.target.value });
  }

  return (
    <section className={styles.detailsPageContainer}>
      <div className={styles.detailsContainer}>
        <img
          src={currentGame.imageUrl}
          alt="someImage"
          className={styles.detailsImage}
        />

        <p>Title: {currentGame.title}</p>
        <p>
          Summary:
          <br />
          {currentGame.summary}
        </p>
        <p>Category: {currentGame.category}</p>
        <p>MaxLevel: {currentGame.maxLevel}</p>

        {isOwner && (
          <div className={styles.buttonContainer}>
            <Link
              to={"/games/edit/" + gameId}
              className={styles.editButtonLink}
            >
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
        {!isOwner && user.accessToken && (
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

        {currentGame.comments &&
          currentGame.comments.map((x, i) => (
            <div className={styles.commentsContainer} key={i}>
              <p className={styles.comments}>{x}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Details;
