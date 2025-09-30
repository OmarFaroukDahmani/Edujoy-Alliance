import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons
import logo from "../assets/logo.png";
import "../style/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#team" className="nav-link">Team</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      {/* Mobile Toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
        <li><a href="#team" className="nav-link" onClick={closeMenu}>Team</a></li>
        <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}
