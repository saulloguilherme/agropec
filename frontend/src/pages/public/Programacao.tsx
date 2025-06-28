import Programacao from "../../components/Programacao";
import Navbar from "../../components/Navbar";

export default function PaginaProgramacao() {
  return (
    <>
      <Navbar />
      <section className="programacao-section">
        <Programacao />
      </section>
    </>
      
  );
}
