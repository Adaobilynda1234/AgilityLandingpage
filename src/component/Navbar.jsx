import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  // useState for navigation toggle
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <div className="Nav__logo">
            <p>Africa Agility</p>
          </div>
          {/* menu toggle */}
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>Product</li>
            <li>Testimonies</li>
            <li>Contact us </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
