import React from "react";
import {Nav, NavLink, NavMenu}
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activestyle="true">
                        Home
                    </NavLink>
                    <NavLink to="/contact" activestyle="true">
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-in" activestyle="true">
                        Log in
                    </NavLink>
                    <NavLink to="/sign-up" activestyle="true">
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
