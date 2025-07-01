import "./styles/Programacao.css";



interface Program {
  time: string;
  title: string;
}

interface Dia {
  date: string;
  events: Program[];
}

export default function Programacao() {
  const programacao: Dia[] = [
    {
      date: "10 de Agosto (Sábado)",
      events: [
        { time: "18:00", title: "Abertura Oficial da Feira" },
        { time: "19:30", title: "Show - Viviane Batidão" },
        { time: "21:00", title: "Show - Felipe Amorim" },
      ],
    },
    {
      date: "11 de Agosto (Domingo)",
      events: [
        { time: "17:00", title: "Torneio de Tambor" },
        { time: "19:00", title: "Leilão de Gado" },
        { time: "21:00", title: "Show - Natanzinho Lima" },
      ],
    },
    {
      date: "12 de Agosto (Segunda)",
      events: [
        { time: "16:00", title: "Oficina: Tecnologias no Campo" },
        { time: "18:00", title: "Feira de Produtos Regionais" },
        { time: "20:00", title: "Show - Marília Tavares" },
      ],
    },
  ];

  return (
  <section className="programacao-section">
     <div className="programacao-container"> 
      <h2>Programação da Feira Agropecuária</h2>
      <div className="programacao-grid">
        {programacao.map((dia, index) => (
          <div className="programacao-dia" key={index}>
            <h3>{dia.date}</h3>
            <ul>
              {dia.events.map((evento, idx) => (
                <li key={idx}>
                  <span className="hora">{evento.time}</span>
                  <span className="titulo">{evento.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
