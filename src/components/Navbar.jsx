import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./NavbarElements.jsx";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    window.onbeforeunload = function(e) {
        e.preventDefault();
        navigate("/");
    }
    return(
        <Nav>
            <NavMenu>
                <NavLink to="/" className="home">
                    <img src="/logo192.png" alt="logo" width="50" height="50"/>
                </NavLink>
                <NavLink to="/beasts">
                    Beasts
                </NavLink>
                <NavLink to="/spells">
                    Spells
                </NavLink>
            </NavMenu>
        </Nav>
    )
};

export default Navbar;