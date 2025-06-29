import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";import "../../styles/adminlogin.css"
// @ts-ignore
import "swiper/css";

export default function AdminLogin() {
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    try {
      const resp = await fetch("/api/login", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, senha }),});
      if (resp.ok) {
        
        navigate("/admin/dashboard");
      } else {
        setErro("Email ou senha inválidos");
      }
    } catch {
      setErro("Erro ao conectar ao servidor");
    }
  }

  return (
    <div className="page-login">
      <section className="container-form">
        <img src="/images/logo_maior.svg"/>
        <p>Acesse a conta!</p>
        <form className="form" onSubmit={handleSubmit}>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input value={senha} type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)}></input>
          <button type="submit">Entrar</button>
          {erro && <div className="error-message">{erro}</div>}
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