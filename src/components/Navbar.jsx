import React from "react";
import {Nav, NavLink, NavMenu,} from "./NavbarElements.jsx";
import {NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

    const BASE_URL = import.meta.env.BASE_URL;

    return (
        <Nav>
            <NavMenu>
                <NavLink to="/" className="home">
                    <img src={BASE_URL + "/logo192.png"} alt="logo" width="50" height="50"/>
                </NavLink>
                <NavLink to="/spells" className="desktop">
                    Spells
                </NavLink>
                <NavDropdown className="desktop" style={{color: "white", textDecoration: "none", margin: "auto 1rem"}} title="Other Apps" id="nav-dropdown">
                    <NavDropdown.Item href={BASE_URL + "#/looters"}>Looters</NavDropdown.Item>
                </NavDropdown>
            </NavMenu>
            <NavMenu className="justify-content-end mobile" style={{ marginRight: ".5rem" }}>
                <NavDropdown
                    title={<FontAwesomeIcon style={{color: "white"}} icon={faBars}/>}
                    id="collasible-nav-dropdown"
                    style={{ color: 'white' }}
                >
                    <NavDropdown.Item href={BASE_URL + "#/spells"}>Spells</NavDropdown.Item>
                    <NavDropdown.Item href={BASE_URL + "#/characters"}>Characters</NavDropdown.Item>
                    <NavDropdown.Item href={BASE_URL + "#/monsters"}>Monsters</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item
                        href="https://smarinade.github.io/looters" target="_blank"
                    >
                        Looters
                    </NavDropdown.Item>
                </NavDropdown>

            </NavMenu>
        </Nav>
    )
};

export default Navbar;