import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";

function GameDetails() {
  const { selectGame } = useContext(GameContext);
  const { gameId } = useParams();

  const currentGame = selectGame(gameId);
  if (currentGame?._ownerId) {
    return <Outlet />;
  }
}

export default GameDetails;
