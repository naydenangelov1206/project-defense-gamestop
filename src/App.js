import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Navigation />
      <main id="gameStopApp">
        <Home />
        <Register />
      </main>
    </>
  );
}

export default App;
