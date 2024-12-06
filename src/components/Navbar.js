import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = (props) => {
    const {loggedIn, setLoggedIn} = props;

    const logOut = () => {
        setLoggedIn(false);
    }

    return(
        <Nav>
            <Bars />
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