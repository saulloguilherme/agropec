import { useState } from "react";
import "./styles/AttractionsCarousel.css";

export default function AttractionsCarousel() {
  const images = [
    {
      src: "/images/felipe_amorim.svg",
      alt: "Felipe Amorim",
      data: "22h",
      descricao: "Grandes sucessos do piseiro."
    },
    {
      src: "/images/marilia_tavares.svg",
      alt: "Marília Tavares",
      data: "20h",
      descricao: "Forró e arrocha para todos."
    },
    {
      src: "/images/natanzinho_lima.svg",
      alt: "Natanzinho Lima",
      data: "19h",
      descricao: "Hits para animar a noite."
    },
    {
      src: "/images/viviane_batidao.svg",
      alt: "Viviane Batidão",
      data: "21h",
      descricao: "A rainha do batidão."
    },
    {
      src: "/images/tambor.jpg",
      alt: "Tambor",
      data: "18h",
      descricao: "Abertura cultural com ritmos regionais."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction: number) => {
    let newSlide = currentSlide + direction;
    if (newSlide < 0) newSlide = images.length - 1;
    else if (newSlide >= images.length) newSlide = 0;
    setCurrentSlide(newSlide);
  };

  if (!images.length) return null;

  return (
    <section className="atracoes-section">
      <h2>Programação de Shows</h2>
      <div className="carousel-container">
        <button className="prev" onClick={() => moveSlide(-1)} aria-label="Anterior">
          ‹
        </button>
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${-currentSlide * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map(({ src, alt, data, descricao }, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={alt} loading="lazy" />
              <div className="legenda-container">
                <p className="legenda">{alt}</p>
                <span className="data-show">- {data}</span>
                <p className="descricao-show">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={() => moveSlide(1)} aria-label="Próximo">
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot${i === currentSlide ? " active" : ""}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  
  );
}
