import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import "../style/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); 
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li><button onClick={() => scrollToSection("home")} className="nav-link">Home</button></li>
        <li><button onClick={() => scrollToSection("about")} className="nav-link">About</button></li>
        <li><button onClick={() => scrollToSection("team")} className="nav-link">Team</button></li>
        <li><button onClick={() => scrollToSection("events")} className="nav-link">Events</button></li>
        <li><button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button></li>
      </ul>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <li><button onClick={() => scrollToSection("home")} className="nav-link">Home</button></li>
        <li><button onClick={() => scrollToSection("about")} className="nav-link">About</button></li>
        <li><button onClick={() => scrollToSection("team")} className="nav-link">Team</button></li>
        <li><button onClick={() => scrollToSection("events")} className="nav-link">Events</button></li>
        <li><button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button></li>
      </ul>
    </nav>
  );
}
