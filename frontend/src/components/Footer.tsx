import "./styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Sobre a Feira */}
        <div className="footer-section">
          <h3>Sobre a Feira</h3>
          <p>
            A Agropec 2025 é um dos maiores eventos do setor agropecuário no Pará, 
            reunindo expositores, atrações culturais e oportunidades de negócios.
          </p>
          <p className="signature">— Organização Agropec</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <ul className="social-links">
            <li><FaFacebook /> <a href="#">Facebook</a></li>
            <li><FaTwitter /> <a href="#">Twitter</a></li>
            <li><FaInstagram /> <a href="#">Instagram</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Marabá - PA</li>
            <li><FaPhone /> (94) 99999-0000</li>
            <li><FaEnvelope /> contato@agropec2025.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Agropec. Todos os direitos reservados.
      </div>
    </footer>
  );
}
