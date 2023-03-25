import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <main id="gameStopApp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/logout" element={<Logout />} />
            <Route path="/games/create" element={<Create />} />
            <Route path="/games/details/:gameId" element={<Details />} />
            <Route path="/games/edit/:gameId" element={<Edit />} />
            <Route path="/games/register" element={<Register />} />
            <Route path="/games/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
