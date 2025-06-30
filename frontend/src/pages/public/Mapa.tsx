import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/mapa.css";

export default function Mapa() {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const svgRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const svgObject = svgRef.current;
    if (!svgObject) return;

    function handleMouseOver(e: any) {
      const target = e.target;
      if (target && target.classList && target.id) {
        const className = target.classList[0];
        const id = target.id;
        setTooltip({
          x: e.clientX,
          y: e.clientY,
          text: `${className} - ${id}`,
        });
      }
    }

    function handleMouseMove(e: any) {
      if (tooltip) {
        setTooltip((prev) => prev && { ...prev, x: e.clientX, y: e.clientY, text: prev.text });
      }
    }

    function handleMouseOut() {
      setTooltip(null);
    }

    function attachListeners() {
      if (!svgObject) return;
      const svgDoc = svgObject.contentDocument;
      if (!svgDoc) return;
      const allBlocks = svgDoc.querySelectorAll("[id][class]");
      allBlocks.forEach((el: any) => {
        el.addEventListener("mouseover", handleMouseOver);
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseout", handleMouseOut);
      });
    }

    svgObject.addEventListener("load", attachListeners);
    return () => {
      svgObject.removeEventListener("load", attachListeners);
    };
  }, [tooltip]);

  return (
    <div>
      <Navbar />
      <section className="map-container">
        <object
          id="svgMap"
          type="image/svg+xml"
          data="/map/map.svg"
          className="event-map"
          ref={svgRef}
        ></object>
        {tooltip && (
          <div
            style={{
              position: "fixed",
              left: tooltip.x + 10,
              top: tooltip.y + 10,
              background: "#222",
              color: "#fff",
              padding: "0.5em 1em",
              borderRadius: "8px",
              pointerEvents: "none",
              zIndex: 1000,
              fontSize: "1em",
              whiteSpace: "nowrap",
            }}
          >
            {tooltip.text}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}