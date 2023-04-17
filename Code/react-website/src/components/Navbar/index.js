import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/log-in" activestyle="true">
            Log in
          </NavLink>
          <NavLink to="/sign-up" activestyle="true">
            Sign Up
          </NavLink>
          <NavLink to="/log-out" activestyle="true">
            Log out
          </NavLink>
        </NavMenu>
        <div className="signOut">Log out</div>
      </Nav>
    </>
  );
};

export default Navbar;
