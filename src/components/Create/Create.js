import styles from "./Create.module.css";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";

import * as gameService from "../../services/gameService";

function Create() {
  const [createInfo, setCreateInfo] = useState({
    title: "",
    imageUrl: "",
    summary: "",
    category: "",
    maxLevel: "",
  });

  const { gameAdd } = useContext(GameContext);

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    const gameData = {
      title: createInfo.title,
      imageUrl: createInfo.imageUrl,
      summary: createInfo.summary,
      category: createInfo.category,
      maxLevel: createInfo.maxLevel,
    };

    gameService.create(gameData).then(result => {
      gameAdd(result);
      navigate("/games/catalog");
    });
  }

  function onTitleChangeHandler(e) {
    setCreateInfo({ ...createInfo, title: e.target.value });
  }

  function onImageUrlChangeHandler(e) {
    setCreateInfo({ ...createInfo, imageUrl: e.target.value });
  }

  function onSummaryChangeHandler(e) {
    setCreateInfo({ ...createInfo, summary: e.target.value });
  }

  function onLevelChangeHandler(e) {
    setCreateInfo({ ...createInfo, maxLevel: e.target.value });
  }

  function onCategoryChangeHandler(e) {
    setCreateInfo({ ...createInfo, category: e.target.value });
  }

  return (
    <section className={styles.createFormContainer}>
      <form onSubmit={onSubmit} className={styles.createForm}>
        <h2 className={styles.createFormTitle}>Create Game</h2>

        <label htmlFor="title">
          Game Title:
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Call Of Duty"
            onChange={onTitleChangeHandler}
            value={createInfo.title}
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
            value={createInfo.imageUrl}
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
            value={createInfo.maxLevel}
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
            value={createInfo.category}
          />
        </label>

        <label htmlFor="summary">
          Summary:
          <textarea
            className={styles.createFormSummary}
            name="summary"
            id="summary"
            cols="30"
            rows="10"
            placeholder="Very interesting and engaging game"
            onChange={onSummaryChangeHandler}
            value={createInfo.summary}
          ></textarea>
        </label>

        <button className={styles.createFormButton}>Create</button>
      </form>
    </section>
  );
}

export default Create;
