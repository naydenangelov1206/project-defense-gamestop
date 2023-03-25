import { createContext, useEffect, useReducer } from "react";

import * as gameService from "../services/gameService";

export const GameContext = createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_GAMES":
      return action.payload.map(x => ({ ...x, comments: [] }));
    case "FETCH_GAME_DETAILS":
      return state.map(x => (x._id === action.gameId ? action.payload : x));
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

  function selectGame(gameId) {
    return games.find(x => x._id === gameId);
  }

  return (
    <GameContext.Provider
      value={{
        games,
        fetchGameDetails,
        selectGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
