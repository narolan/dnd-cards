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
import Looters from "./pages/looters/Looters.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import version from "../package.json";
import Characters from "./pages/characters/Characters";

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
                    <Route
                        path="/characters"
                        element={<Characters/>}
                    />
                    <Route
                        path="/looters"
                        element={<Looters/>}
                    />
                </Routes>
            </Router>
            <footer className="footer">
                <div className="copywright">v{version.version} | ©2024 DnD Cards</div>
            </footer>
        </>
    );
}

export default App;
