import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./NavbarElements.jsx";
import {NavDropdown} from "react-bootstrap";


const Navbar = () => {

    const BASE_URL = import.meta.env.BASE_URL;

    return (
        <Nav>
            <NavMenu>
                <NavLink to="/" className="home">
                    <img src={BASE_URL + "/logo192.png"} alt="logo" width="50" height="50"/>
                </NavLink>
                <NavLink to="/monsters">
                    Monsters
                </NavLink>
                <NavLink to="/spells">
                    Spells
                </NavLink>
                <NavDropdown style={{color: "white", textDecoration: "none"}} title="Other Apps" id="nav-dropdown">
                    <NavDropdown.Item href="https://smarinade.github.io/looters" target="_blank">Looters</NavDropdown.Item>
                </NavDropdown>
            </NavMenu>
        </Nav>
    )
};

export default Navbar;