import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activestyle="true">
            Go Back
          </NavLink>
          <NavLink to="/clickedProperty" activestyle="true">
            Last Property
          </NavLink>
          <NavLink to="/addProperty" activestyle="true">
            Liegenschaft Hinzufügen
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
