import "./styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="navbar">
        <Link to="/">
            <div className="logo"></div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link className="link" to="/eventos">Eventos ▼</Link>
          </li>
          <li>
            <Link className="link" to="/expositores">Expositores ▼</Link>
          </li>
          <li>
            <Link className="link" to="/programacao">Programação ▼</Link>
          </li>
          <li>
            <Link className="link" to="/mapa">Mapa</Link>
          </li>
          <li>
            <Link className="link" to="/contato">Contato</Link>
          </li>
          <li>
            <Link className="link" to="/sobre">Sobre</Link>
          </li>
        </ul>
    </nav>
    )
}