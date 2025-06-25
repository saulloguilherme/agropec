import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";

import "../../styles/global.css";

export default function Home() {
  return (
    <div className="hero-wrapper">
      {/* Navbar fixa sobre o carrossel */}
      <nav className="navbar">
        <div className="logo"></div>
          <ul className="nav-links">
            <li><a href="#evento">Evento ▼</a></li>
            <li><a href="#expositores">Expositores ▼</a></li>
            <li><a href="#programacao">Programação ▼</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
      </nav>

      {/* Carrossel de fundo */}
      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >
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
    </div>
  );
}
