import AsideAdmin from "../../components/AsideAdmin";
import "../../styles/admindashboard.css";

export default function Dashboard() {
  return (
    <div className="page-adm-dashboard" style={{ display: "flex" }}>
      <AsideAdmin />
      <section
        className="dashboard"
        style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#1e1e1e",
          color: "#f9fafb",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#facc15", marginBottom: "0.5rem" }}>
          Bem-vindo(a) ao Painel da AGROPEC 2025
        </h1>
        <p style={{ marginBottom: "2rem" }}>
          Gerencie facilmente as atrações, programação e locais do evento.
        </p>

        {}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <DashboardCard titulo="Total de Atrações" valor="7" />
          <DashboardCard titulo="Dias de Evento" valor="3" />
          <DashboardCard titulo="Locais Cadastrados" valor="4" />
          <DashboardCard titulo="Última Atualização" valor="30/06/2025" />
        </div>

        {}
        <h2 style={{ color: "#facc15", fontSize: "1.5rem", marginBottom: "1rem" }}>
           Próximas atrações
        </h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><strong>10/08:</strong> Abertura Oficial da Feira - 18:00</li>
          <li><strong>10/08:</strong> Show - Viviane Batidão - 19:30</li>
          <li><strong>11/08:</strong> Leilão de Gado - 19:00</li>
        </ul>

        {}
        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button
            style={estiloBotao}
            onClick={() => window.location.href = "/admin/atracoes"}
          >
             Editar Atrações
          </button>
          <button
            style={estiloBotao}
            onClick={() => window.location.href = "/admin/programacao"}
          >
             Editar Programação
          </button>
        </div>
      </section>
    </div>
  );
}

function DashboardCard({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <div
      style={{
        backgroundColor: "#14532d",
        color: "#f9fafb",
        borderRadius: "10px",
        padding: "1.2rem",
        minWidth: "200px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        flex: "1",
      }}
    >
      <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{titulo}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{valor}</p>
    </div>
  );
}

const estiloBotao = {
  backgroundColor: "#22c55e",
  color: "#1e1e1e",
  fontWeight: "bold" as const,
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  width: "250px",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};
