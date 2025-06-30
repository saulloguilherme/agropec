import { motion } from "framer-motion";
import "./styles/sobre.css";

export default function Sobre() {
  return (
    <motion.div
      className="sobre-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="sobre-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Sobre a Agropec 2025
        </motion.h1>
        <p>
          A Agropec 2025 é realizada em Paragominas e une tradição, inovação e
          oportunidades de negócios.
        </p>
      </header>
      <motion.section
        className="sobre-bloco sindicato"
        whileHover={{ scale: 1.1 }}
      >
        <h2>SPRP - Sindicato dos Produtores Rurais de Paragominas</h2>
        <div className="sindicato-content">
          <p>
            O Sindicato dos Produtores Rurais de Paragominas (SPR) é uma entidade
            fundamental na realização da Agropec 2025, representando os interesses
            dos produtores e contribuindo para o desenvolvimento sustentável do
            agronegócio local.
          </p>
          <div className="sindicato-logo">
            <img src="/images/sprp.png" alt="Logo Sindicato dos Produtores Rurais de Paragominas" />
          </div>
        </div>
      </motion.section>
        

      <motion.section className="sobre-bloco" whileHover={{ scale: 1.1 }}>
        <h2>Missão</h2>
        <p>
          Promover o desenvolvimento do agronegócio regional por meio da troca
          de conhecimentos, inovação tecnológica e integração entre produtores,
          expositores e a comunidade.
        </p>
      </motion.section>

      <motion.section
        className="sobre-bloco verde"
        whileHover={{ scale: 1.1 }}
      >
        <h2>Visão</h2>
        <p>
          Ser referência no Norte do Brasil como o principal evento
          agropecuário, contribuindo para o fortalecimento da economia rural e
          regional.
        </p>
      </motion.section>

    <motion.section className="sobre-bloco valores" whileHover={{ scale: 1.1 }}>
        <h2>Valores</h2>
        <ul>
          <li>🌱 Compromisso com o produtor rural</li>
          <li>💡 Inovação e tecnologia no campo</li>
          <li>🌍 Responsabilidade socioambiental</li>
          <li>🎭 Inclusão e valorização cultural</li>
        </ul>
      </motion.section>

      <motion.section
        className="expositores-bloco"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Expositores Parceiros</h2>
        <p>Empresas que estarão presentes na Agropec 2025:</p>
        <div className="expositores-grid">
          <motion.div whileHover={{ scale: 1.07 }}>
            <img src="/images/viale.svg" alt="Viale" />
            <span>Viale</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.07 }}>
            <img src="images/sellagro.svg" alt="Expositor 2" />
            <span>SellAgro</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.07 }}>
            <img src="/images/arbaza.svg" alt="Expositor 3" />
            <span>Arbaza</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.07 }}>
            <img src="/images/shineray.png" alt="Expositor 4" />
            <span>Shineray</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="sobre-bloco organizacao"
        whileHover={{ scale: 1.1 }}
      >
        <h2>Organização</h2>
        <p>
          A Agropec é organizada por profissionais e instituições comprometidas
          com o avanço do agronegócio no Pará.
        </p>
      </motion.section>
    </motion.div>
  );
}
