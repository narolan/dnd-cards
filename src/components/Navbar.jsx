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

    const BASE_URL = import.meta.env.BASE_URL;

    return(
        <Nav>
            <NavMenu>
                <NavLink to="/" className="home">
                    <img src={BASE_URL + "/logo192.png"} alt="logo" width="50" height="50"/>
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