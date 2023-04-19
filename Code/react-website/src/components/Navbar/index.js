import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activestyle="true">
            Log out
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
