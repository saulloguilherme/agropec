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

      <AttractionsCarousel></AttractionsCarousel>

      <Programacao />

      <img src="/images/logo_maior.svg" className="overlay-logo"/>
      
      <section>
        <Footer />
      </section>

    </div>
  );
}
