import styles from "./Edit.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext";

import * as gameService from "../../services/gameService";

function Edit() {
  const [editInfo, setEditInfo] = useState({
    title: "",
    imageUrl: "",
    summary: "",
    category: "",
    maxLevel: "",
  });

  const navigate = useNavigate();

  const { gameId } = useParams();
  const { gameEdit } = useContext(GameContext);

  useEffect(() => {
    gameService.getOne(gameId).then(gameData => {
      gameEdit(gameData);
      setEditInfo({
        ...editInfo,
        title: gameData.title,
        imageUrl: gameData.imageUrl,
        summary: gameData.summary,
        category: gameData.category,
        maxLevel: gameData.maxLevel,
      });
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const gameData = {
      title: editInfo.title,
      imageUrl: editInfo.imageUrl,
      summary: editInfo.summary,
      category: editInfo.category,
      maxLevel: editInfo.maxLevel,
    };

    gameService.edit(gameId, gameData).then(result => {
      gameEdit(gameId, result);
      navigate("/games/catalog");
    });
  }

  function onTitleChangeHandler(e) {
    setEditInfo({ ...editInfo, title: e.target.value });
  }

  function onImageUrlChangeHandler(e) {
    setEditInfo({ ...editInfo, imageUrl: e.target.value });
  }

  function onSummaryChangeHandler(e) {
    setEditInfo({ ...editInfo, summary: e.target.value });
  }

  function onLevelChangeHandler(e) {
    setEditInfo({ ...editInfo, maxLevel: e.target.value });
  }

  function onCategoryChangeHandler(e) {
    setEditInfo({ ...editInfo, category: e.target.value });
  }

  return (
    <section className={styles.editFormContainer}>
      <form onSubmit={onSubmit} className={styles.editForm}>
        <h2 className={styles.editFormTitle}>Edit Game</h2>

        <label htmlFor="title">
          Game Title:
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Call Of Duty"
            onChange={onTitleChangeHandler}
            value={editInfo.title}
          />
        </label>

        <label htmlFor="imageUrl">
          Image Url:
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="https://callofduty-blackops.jpg"
            onChange={onImageUrlChangeHandler}
            value={editInfo.imageUrl}
          />
        </label>

        <label htmlFor="level">
          Max Level:
          <input
            type="number"
            id="level"
            name="level"
            placeholder="100"
            onChange={onLevelChangeHandler}
            value={editInfo.maxLevel}
            min={1}
          />
        </label>

        <label htmlFor="category">
          Category:
          <input
            type="text"
            id="category"
            name="category"
            placeholder="FPS Shooter"
            onChange={onCategoryChangeHandler}
            value={editInfo.category}
          />
        </label>

        <label htmlFor="summary">
          Summary:
          <textarea
            className={styles.editFormSummary}
            name="summary"
            id="summary"
            cols="30"
            rows="10"
            placeholder="Very interesting and engaging game"
            onChange={onSummaryChangeHandler}
            value={editInfo.summary}
          ></textarea>
        </label>

        <button className={styles.editFormButton}>Edit</button>
      </form>
    </section>
  );
}

export default Edit;
