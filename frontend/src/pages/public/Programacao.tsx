import Programacao from "../../components/Programacao";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PaginaProgramacao() {
  return (
    <>
      <Navbar />
      <section className="programacao-section">
        <Programacao />
      </section>
      <Footer />
    </>
  );
}
