import React from "react";
import {Nav, NavLink, NavMenu}
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-in" activeStyle>
                        Log in
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <div className="signOut">
                    Log out
                </div>
            </Nav>
        </>
    )
        ;
};

export default Navbar;
