import './App.css';
import Navbar from "./components/Navbar.jsx";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Beasts from "./pages/beasts/Beasts.jsx";
import Spells from "./pages/spells/Spells.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import version from "../package.json";
import Coffee from "./components/Coffee";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}/>
                    <Route
                        path="/dnd-cards"
                        element={<Home/>}/>
                    <Route
                        path="/beasts"
                        element={<Beasts/>}/>
                    <Route
                        path="/spells"
                        element={<Spells/>}
                    />
                </Routes>
            </Router>
            <footer className="footer">
                <Coffee/>
                <div className="copywright">v{version.version} | ©2024 DnD Cards | All Rights Reserved</div>
            </footer>
        </>
    );
}

export default App;
