import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="topbar">
      <div className="container topbar-inner">

      
        <Link className="brand" to="/" onClick={closeNav} aria-label="Zerologic home">
          <img
            className="brand-mark-image"
            src="/assets/zerologic-mark.png"
            alt="Zerologic logo symbol"
          />
          <img
            className="brand-wordmark-image"
            src="/assets/zerologic-wordmark.png"
            alt="Zerologic software development company"
          />
        </Link>

        
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
        </button>

       
        <nav
          className={`main-nav ${navOpen ? "nav-open" : ""}`}
          id="primary-nav"
          aria-label="Primary navigation"
        >
          <Link
            to="/services"
            className={isActive("/services") ? "active" : ""}
            onClick={closeNav}
          >
            Services
          </Link>

          <Link
            to="/capability-model"
            className={isActive("/capability-model") ? "active" : ""}
            onClick={closeNav}
          >
            Capability Model
          </Link>

          <Link
            to="/engagement-models"
            className={isActive("/engagement-models") ? "active" : ""}
            onClick={closeNav}
          >
            Engagement Models
          </Link>

          <Link
            to="/industries"
            className={isActive("/industries") ? "active" : ""}
            onClick={closeNav}
          >
            Industries
          </Link>

          <Link
            to="/proof"
            className={isActive("/proof") ? "active" : ""}
            onClick={closeNav}
          >
            Proof
          </Link>

          <Link
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={closeNav}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={closeNav}
          >
            Contact
          </Link>
        </nav>

       
        <Link
          className="button button-primary button-compact"
          to="/contact"
          aria-label="Request a consultation with Zerologic"
          onClick={closeNav}
        >
          Request Consultation
        </Link>

      </div>
    </header>
  );
}