import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Beasts from "./pages/Beasts";
import Spells from "./pages/Spells";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/dnd-cards"
          element={<Home />} />
        <Route
         path="/beasts"
         element={<Beasts />} />
        <Route
          path="/spells"
          element={<Spells />}
        />
      </Routes>
    </Router>
  );
}

export default App;
