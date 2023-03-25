import { createContext, useEffect, useReducer } from "react";

import * as gameService from "../services/gameService";

export const GameContext = createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_GAMES":
      return action.payload.map(x => ({ ...x, comments: [] }));
    case "FETCH_GAME_DETAILS":
      return state.map(x => (x._id === action.gameId ? action.payload : x));
    case "ADD_GAME":
      return [...state, action.payload];
    case "EDIT_GAME":
      return state.map(x => (x._id === action.gameId ? action.payload : x));
    case "REMOVE_GAME":
      return state.filter(x => x._id != action.gameId);
    case "ADD_COMMENT":
      return state.map(x =>
        x._id === action.gameId
          ? {
              ...x,
              comments: [...x.comments, action.payload],
            }
          : x
      );
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [games, gameDispatcher] = useReducer(gameReducer, []);

  useEffect(() => {
    gameService.getAll().then(result => {
      gameDispatcher({ type: "ADD_GAMES", payload: result });
    });
  }, []);

  function fetchGameDetails(gameId, gameDetails) {
    gameDispatcher({
      type: "FETCH_GAME_DETAILS",
      payload: {
        ...gameDetails,
        comments: selectGame(gameId)?.comments || {},
      },
      gameId,
    });
  }

  function gameAdd(gameData) {
    gameDispatcher({
      type: "ADD_GAME",
      payload: {
        ...gameData,
        comments: [],
      },
    });
  }

  function gameEdit(gameId, gameData) {
    gameDispatcher({
      type: "EDIT_GAME",
      payload: {
        ...gameData,
        comments: selectGame(gameId)?.comments || {},
      },
      gameId,
    });
  }

  function gameDelete(gameId) {
    gameDispatcher({ type: "REMOVE_GAME", gameId });
  }

  function addComment(gameId, comment) {
    gameDispatcher({ type: "ADD_COMMENT", payload: comment, gameId });
  }

  function selectGame(gameId) {
    return games.find(x => x._id === gameId);
  }

  return (
    <GameContext.Provider
      value={{
        games,
        fetchGameDetails,
        selectGame,
        gameAdd,
        gameEdit,
        gameDelete,
        addComment,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
