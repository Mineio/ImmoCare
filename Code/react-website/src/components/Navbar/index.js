import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  if (
    window.location.pathname === "/home" ||
    window.location.pathname === "/"
  ) {
    return (
      <>
        <Nav>
          <NavMenu>
            <h1>Liegenschaftsliste</h1>
          </NavMenu>
        </Nav>
      </>
    );
  } else if (window.location.pathname === "/addProperty") {
    return (
      <>
        <Nav>
          <NavMenu>
            <h1>Liegenschaft hinzufügen</h1>
          </NavMenu>
        </Nav>
      </>
    );
  } else if (window.location.pathname === "/clickedProperty") {
    return (
      <>
        <Nav>
          <NavMenu>
            <h1>Liegenschaft bearbeiten</h1>
          </NavMenu>
        </Nav>
      </>
    );
  }
};

export default Navbar;
