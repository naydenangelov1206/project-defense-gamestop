import { createContext, useEffect, useReducer } from "react";

import * as gameService from "../services/gameService";

export const GameContext = createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_GAMES":
      return action.payload.map(x => ({ ...x, comments: [] }));
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

  return (
    <GameContext.Provider
      value={{
        games,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
