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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
