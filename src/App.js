import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Navigation />
      <main id="gameStopApp">
        <Home />
        <Register />
        <Login />
      </main>
    </>
  );
}

export default App;
