import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return(
        <Nav>
            <NavMenu>
                <NavLink to="/" >
                    Home
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