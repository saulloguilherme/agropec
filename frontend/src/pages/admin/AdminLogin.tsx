import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";import "../../styles/adminlogin.css"
// @ts-ignore
import "swiper/css";

export default function AdminLogin() {
  return (
    <div className="page">
      <section className="container-form">
        <img src="/images/logo_maior.svg"/>
        <p>Acesse a conta!</p>
        <form className="form">
          <input type="email" placeholder="Email" ></input>
          <input type="password" placeholder="Senha"></input>
          <button type="submit">Entrar</button>
        </form>
      </section>
      <section className="background" style={{ display: "flex", width: "100%", height: "100vh"}}>
        <Swiper loop={true} autoplay={{ delay: 5000 }} modules={[Autoplay]} className="mySwiper" style={{width: "100%"}}>
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
    </div>
  );
}