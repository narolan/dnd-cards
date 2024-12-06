import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./NavbarElements";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    window.onbeforeunload = function() {
        navigate("/");
    }
    return(
        <Nav>
            <NavMenu>
                <NavLink to="/" className="home">
                    <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="logo" width="50" height="50"/>
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