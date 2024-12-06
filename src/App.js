import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { useState } from 'react'
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
