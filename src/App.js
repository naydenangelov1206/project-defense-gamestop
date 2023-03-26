import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { GameProvider } from "./contexts/GameContext";

import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Catalog from "./components/Catalog/Catalog";
import PrivateGuard from "./components/common/PrivateGuard";
import PublicGuard from "./components/common/PublicGuard";
import GameOwner from "./components/common/GameOwner";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <GameProvider>
          <main id="gameStopApp">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/catalog" element={<Catalog />} />

              <Route path="/games/details/:gameId" element={<Details />} />

              <Route element={<PrivateGuard />}>
                <Route path="/games/create" element={<Create />} />
                <Route path="/games/logout" element={<Logout />} />
              </Route>

              <Route element={<GameOwner />}>
                <Route path="/games/edit/:gameId" element={<Edit />} />
              </Route>

              <Route element={<PublicGuard />}>
                <Route path="/games/register" element={<Register />} />
                <Route path="/games/login" element={<Login />} />
              </Route>

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </GameProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
