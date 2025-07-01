import AsideAdmin from "../../components/AsideAdmin";
import { useState } from "react";

interface Evento {
  id: number;
  data: string;
  titulo: string;
  horario: string;
  local: string;
}

const eventosMock: Evento[] = [
  { id: 1, data: "10 de Agosto (Sábado)", titulo: "Abertura Oficial da Feira", horario: "18:00", local: "Palco Principal" },
  { id: 2, data: "10 de Agosto (Sábado)", titulo: "Show - Viviane Batidão", horario: "19:30", local: "Palco Principal" },
  { id: 3, data: "10 de Agosto (Sábado)", titulo: "Show - Felipe Amorim", horario: "21:00", local: "Palco Principal" },

  { id: 4, data: "11 de Agosto (Domingo)", titulo: "Torneio de Tambor", horario: "17:00", local: "Arena de Eventos" },
  { id: 5, data: "11 de Agosto (Domingo)", titulo: "Leilão de Gado", horario: "19:00", local: "Pavilhão Central" },
  { id: 6, data: "11 de Agosto (Domingo)", titulo: "Show - Natanzinho Lima", horario: "21:00", local: "Palco Principal" },

  { id: 7, data: "12 de Agosto (Segunda)", titulo: "Oficina: Tecnologias no Campo", horario: "16:00", local: "Auditório Rural" },
  { id: 8, data: "12 de Agosto (Segunda)", titulo: "Feira de Produtos Regionais", horario: "18:00", local: "Área da Feira" },
  { id: 9, data: "12 de Agosto (Segunda)", titulo: "Show - Marília Tavares", horario: "20:00", local: "Palco Principal" },
];

export default function EditarProgramacao() {
  const [eventos, setEventos] = useState<Evento[]>(eventosMock);

  const handleChange = (id: number, campo: keyof Evento, valor: string) => {
    setEventos(prev =>
      prev.map(evento =>
        evento.id === id ? { ...evento, [campo]: valor } : evento
      )
    );
  };

  const handleSalvar = (id: number) => {
    const evento = eventos.find(e => e.id === id);
    alert(`Salvando edição do evento:\n\n${JSON.stringify(evento, null, 2)}`);
  };

  const eventosPorData = eventos.reduce<Record<string, Evento[]>>((acc, evento) => {
    if (!acc[evento.data]) acc[evento.data] = [];
    acc[evento.data].push(evento);
    return acc;
  }, {});

  
  const styles = {
    content: {
      flex: 1,
      padding: "2rem",
      backgroundColor: "#1e1e1e",
      color: "#f3f4f6",
      fontFamily: "Segoe UI, sans-serif",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "2rem",
      color: "#facc15",
    },
    daySection: {
      marginBottom: "3rem",
    },
    dayTitle: {
      marginTop: "2rem",
      fontSize: "1.4rem",
      color: "#22c55e",
      borderBottom: "2px solid #14532d",
      paddingBottom: "0.5rem",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "1rem",
    },
    th: {
      backgroundColor: "#14532d",
      color: "#f3f4f6",
      fontWeight: 600,
      padding: "0.75rem",
      border: "1px solid #2d2d2d",
      textAlign: "left",
    },
    td: {
      backgroundColor: "#2a2a2a",
      padding: "0.75rem",
      border: "1px solid #2d2d2d",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "6px",
      border: "1px solid #444",
      backgroundColor: "#1c1c1c",
      color: "#f3f4f6",
      fontSize: "0.95rem",
    },
    button: {
      backgroundColor: "#22c55e",
      color: "#1e1e1e",
      fontWeight: "bold",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <AsideAdmin />
      <section style={styles.content}>
        <h1 style={styles.title}>Editar Programação</h1>
        {Object.entries(eventosPorData).map(([data, eventosDia]) => (
          <div key={data} style={styles.daySection}>
            <h2 style={styles.dayTitle}>{data}</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Título</th>
                  <th style={styles.th}>Horário</th>
                  <th style={styles.th}>Local</th>
                  <th style={styles.th}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {eventosDia.map(evento => (
                  <tr key={evento.id}>
                    <td style={styles.td}>
                      <input
                        type="text"
                        value={evento.titulo}
                        onChange={e => handleChange(evento.id, "titulo", e.target.value)}
                        style={styles.input}
                      />
                    </td>
                    <td style={styles.td}>
                      <input
                        type="time"
                        value={evento.horario}
                        onChange={e => handleChange(evento.id, "horario", e.target.value)}
                        style={styles.input}
                      />
                    </td>
                    <td style={styles.td}>
                      <input
                        type="text"
                        value={evento.local}
                        onChange={e => handleChange(evento.id, "local", e.target.value)}
                        style={styles.input}
                      />
                    </td>
                    <td style={{ ...styles.td, textAlign: "center" }}>
                      <button onClick={() => handleSalvar(evento.id)} style={styles.button}>
                        Salvar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </div>
  );
}
