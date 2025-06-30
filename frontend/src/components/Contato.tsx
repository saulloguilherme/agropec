import { motion } from "framer-motion";
import "./styles/Contato.css";

export default function Contato() {
  return (
    <div className="contato-background">
      <div className="contato-overlay">
        <motion.div
          className="contato-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="contato-titulo">
            <h1>Quer falar com a gente?</h1>
            <p>
              Envie sua mensagem pelo formulário abaixo para conversarmos sobre
              parcerias, dúvidas ou sugestões.
            </p>
          </header>

          <div className="contato-box">
            <div className="contato-info">
              <p>📧 agropec2025@contato.com</p>
              <p>📍 Paragominas - PA</p>
              <p>📞 (91) 99999-9999</p>

              <div className="contato-redes">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">WhatsApp</a>
              </div>
            </div>

            <form className="contato-form">
              <input type="text" placeholder="Nome*" required />
              <input type="email" placeholder="E-mail*" required />
              <textarea placeholder="Como podemos ajudar?*" rows={5} required />
              <button type="submit">ENVIAR</button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
