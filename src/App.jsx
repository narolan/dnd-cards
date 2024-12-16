import './App.css';
import Navbar from "./components/Navbar.jsx";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Monsters from "./pages/monsters/Monsters.jsx";
import Spells from "./pages/spells/Spells.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import version from "../package.json";

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
                        path="/monsters"
                        element={<Monsters/>}/>
                    <Route
                        path="/spells"
                        element={<Spells/>}
                    />
                </Routes>
            </Router>
            <footer className="footer">
                <div className="copywright">v{version.version} | ©2024 DnD Cards | All Rights Reserved</div>
            </footer>
        </>
    );
}

export default App;
