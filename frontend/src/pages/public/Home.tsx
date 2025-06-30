import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AttractionsCarousel from "../../components/AttractionsCarousel";
import "../../styles/home.css";
import "../../styles/global.css";
// @ts-ignore
import "swiper/css";
import Navbar from "../../components/Navbar";
import Programacao from "../../components/Programacao";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section style={{ display: "flex", width: "100%", height: "100vh" }}>
        <Swiper loop={true} autoplay={{ delay: 5000 }} modules={[Autoplay]} className="mySwiper" style={{ width: "100%" }}>
          <SwiperSlide>
            <img src="/images/rodeio.jpg" alt="Rodeio" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/palco.jpg" alt="Palco" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/fogos.jpg" alt="Fogos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/feira.jpg" alt="Feira" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/boi_leilão.jpg" alt="Leilão" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="atracoes-section" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", backgroundColor: "#f8f8f8",}}>
        <AttractionsCarousel />
      </section>

      <img src="/images/logo_maior.svg" className="overlay-logo"/>

      <section>
        <Programacao />
      </section>
      
      <section>
        <Footer />
      </section>

    </div>
  );
}
