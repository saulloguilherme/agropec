import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo"></div>
      </Link>

      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir ou fechar menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link className="link" to="/mapa" onClick={() => setMenuOpen(false)}>Mapa Interativo</Link>
        </li>
        <li>
          <Link className="link" to="/programacao" onClick={() => setMenuOpen(false)}>Programação </Link>
        </li>
        <li>
          <Link className="link" to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
        </li>
        <li>
          <Link className="link" to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
