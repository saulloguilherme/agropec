import { useState } from "react";
import "./styles/AttractionsCarousel.css";

export default function AttractionsCarousel() {
  const images = [
    { src: "/images/felipe_amorim.svg", alt: "Felipe Amorim" },
    { src: "/images/marilia_tavares.svg", alt: "Marília Tavares" },
    { src: "/images/natanzinho_lima.svg", alt: "Natanzinho Lima" },
    { src: "/images/viviane_batidao.svg", alt: "Viviane Batidão" },
    { src: "/images/tambor.png", alt: "tambor" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction: number) => {
    let newSlide = currentSlide + direction;
    if (newSlide < 0) newSlide = images.length - 1;
    else if (newSlide >= images.length) newSlide = 0;
    setCurrentSlide(newSlide);
  };

  return (
    <section className="atracoes-section">
      <h2>Atrações da Feira</h2>
      <div className="carousel-container">
        <button className="prev" onClick={() => moveSlide(-1)}>‹</button>
        <div
          className="carousel-track"
          style={{
            display: "flex",
            transform: `translateX(${-currentSlide * 100}%)`,
            transition: "transform 0.4s ease",
            width: `${images.length * 100}%`,
          }}
        >
          {images.map(({ src, alt }, i) => (
            <div
              className="slide"
              key={i}
              style={{ minWidth: `${100 / images.length}%`, boxSizing: "border-box" }}
            >
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
        <button className="next" onClick={() => moveSlide(1)}>›</button>
      </div>
    </section>
  );
}
