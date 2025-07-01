import AsideAdmin from "../../components/AsideAdmin";
import { useState } from "react";
import "../../styles/editaratracoes.css";

interface Atracao {
  id: number;
  titulo: string;
  data: string;     
  local: string;
}

const atracoesMock: Atracao[] = [
  { id: 1, titulo: "Show - Viviane Batidão", data: "2025-08-10T19:30:00Z", local: "Palco Principal" },
  { id: 2, titulo: "Show - Felipe Amorim", data: "2025-08-10T21:00:00Z", local: "Palco Principal" },
  { id: 3, titulo: "Show - Natanzinho Lima", data: "2025-08-11T21:00:00Z", local: "Palco Principal" },
  { id: 4, titulo: "Show - Marília Tavares", data: "2025-08-12T20:00:00Z", local: "Palco Principal" },
];

export default function EditarAtracoes() {
  const [atracoes, setAtracoes] = useState<Atracao[]>(atracoesMock);

  const handleChange = (id: number, campo: keyof Atracao, valor: string) => {
    setAtracoes(prev =>
      prev.map(a => (a.id === id ? { ...a, [campo]: valor } : a))
    );
  };

  const handleSalvar = (id: number) => {
    const atracao = atracoes.find(a => a.id === id);
    alert(`Salvar atração:\n${JSON.stringify(atracao, null, 2)}`);
    
  };

  return (
    <div className="page-adm-atracoes" style={{ display: "flex" }}>
      <AsideAdmin />
      <section style={{ flex: 1, padding: "2rem", backgroundColor: "#1e1e1e", color: "#f3f4f6" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#facc15" }}>Editar Atrações</h1>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={estiloTh}>Título</th>
              <th style={estiloTh}>Data</th>
              <th style={estiloTh}>Horário</th>
              <th style={estiloTh}>Local</th>
              <th style={estiloTh}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {atracoes.map(atracao => {
              const [data, hora] = new Date(atracao.data).toISOString().split("T");
              return (
                <tr key={atracao.id}>
                  <td style={estiloTd}>
                    <input
                      type="text"
                      value={atracao.titulo}
                      onChange={e => handleChange(atracao.id, "titulo", e.target.value)}
                      style={estiloInput}
                    />
                  </td>
                  <td style={estiloTd}>
                    <input
                      type="date"
                      value={data}
                      onChange={e => {
                        const novaData = e.target.value + "T" + hora;
                        handleChange(atracao.id, "data", novaData);
                      }}
                      style={estiloInput}
                    />
                  </td>
                  <td style={estiloTd}>
                    <input
                      type="time"
                      value={hora.slice(0, 5)}
                      onChange={e => {
                        const novaData = data + "T" + e.target.value + ":00Z";
                        handleChange(atracao.id, "data", novaData);
                      }}
                      style={estiloInput}
                    />
                  </td>
                  <td style={estiloTd}>
                    <input
                      type="text"
                      value={atracao.local}
                      onChange={e => handleChange(atracao.id, "local", e.target.value)}
                      style={estiloInput}
                    />
                  </td>
                  <td style={{ ...estiloTd, textAlign: "center", verticalAlign: "middle", height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                      <button onClick={() => handleSalvar(atracao.id)} style={estiloBotao}>
                        Salvar
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}


const estiloTh = {
  backgroundColor: "#14532d",
  color: "#f3f4f6",
  padding: "0.75rem",
  border: "1px solid #2d2d2d",
  textAlign: "left" as const,
};

const estiloTd = {
  backgroundColor: "#2a2a2a",
  padding: "0.75rem",
  border: "1px solid #2d2d2d",
};

const estiloInput = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "6px",
  border: "1px solid #444",
  backgroundColor: "#1c1c1c",
  color: "#f3f4f6",
  fontSize: "0.95rem",
};

const estiloBotao = {
  backgroundColor: "#22c55e",
  color: "#1e1e1e",
  fontWeight: "bold" as const,
  border: "none",
  padding: "0.5rem 1.2rem",
  borderRadius: "8px",
  cursor: "pointer",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
