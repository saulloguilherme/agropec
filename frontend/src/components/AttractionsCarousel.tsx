import { useState } from "react";
import "./styles/AttractionsCarousel.css";

type Props = {
  attractionType: string;
};


export default function AttractionsCarousel({ attractionType } : Props ) {
  const images = [
    { src: "/images/felipe_amorim.svg", nome: "Felipe Amorim" },
    { src: "/images/marilia_tavares.svg", nome: "Marília Tavares" },
    { src: "/images/natanzinho_lima.svg", nome: "Natanzinho Lima" },
    { src: "/images/viviane_batidao.svg", nome: "Viviane Batidão" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction:number) => {
    let newSlide = currentSlide + direction;
    if (newSlide < 0) newSlide = images.length - 1;
    else if (newSlide >= images.length) newSlide = 0;
    setCurrentSlide(newSlide);
  };

  if (!images.length) return null;

  return (
      <section className="atracoes-section">
        <div className="container-atracoes">
            <p className="attraction-type">{attractionType}</p>
                {images.map(({ src, nome }, i) => (
                  <div className="images" >
                    <img src={src} loading="lazy" key={i}/>
                    <p className="img-name">{nome}</p>
                  </div>
              ))}
        </div>
      </section> 
  );
}
