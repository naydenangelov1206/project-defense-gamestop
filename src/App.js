import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main id="gameStopApp">
        <Home />
      </main>
    </>
  );
}

export default App;
