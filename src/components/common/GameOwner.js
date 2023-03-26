import { useContext } from "react";
import { Outlet, useNavigate, useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { GameContext } from "../../contexts/GameContext";

function GameOwner() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { selectGame } = useContext(GameContext);
  const { gameId } = useParams();

  const navigate = useNavigate();

  const currentGame = selectGame(gameId);

  if (!isAuthenticated) {
    return <Navigate to="/games/login" replace />;
  }

  if (!currentGame || currentGame._ownerId !== user._id) {
    navigate("/error", { replace: true });
    return null;
  }

  return <Outlet />;
}

export default GameOwner;
