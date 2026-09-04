import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";

const openHouseSlides = [
  { date: "LÖR 21 JAN", time: "12:00", title: "ÖPPET HUS", text: "Kom och upptäck våra utbildningar, lokaler och kreativa miljöer." },
  { date: "LÖR 18 FEB", time: "12:00", title: "ÖPPET HUS", text: "Träffa elever och lärare och få en känsla för livet på LBS." },
  { date: "LÖR 18 MAR", time: "12:00", title: "ÖPPET HUS", text: "Se vad du kan skapa inom game, design, media, AI och utveckling." }
];

function OpenHouseCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % openHouseSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = openHouseSlides[active];

  return (
    <div className="open-house-carousel" aria-label="Öppet hus">
      <div className="oh-progress">
        {openHouseSlides.map((_, index) => (
          <button key={index} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Visa öppet hus ${index + 1}`} />
        ))}
      </div>
      <div className="oh-slide" key={active}>
        <div className="oh-date"><span>[ {slide.date} ]</span><strong>{slide.time}</strong></div>
        <div>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>
        <a href="#contact" className="oh-arrow" aria-label="Läs mer"><ArrowIcon direction="upRight" size="lg" /></a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="open-house">
      <div className="hero-pixels hero-pixels-left" />
      <div className="hero-pixels hero-pixels-right" />
      <div className="hero-grid">
        <div className="hero-content">
          <p className="mono-label">[ KREATIVITET + TEKNIK + FRAMTID ]</p>
          <h1>LBS KREATIVA<br />GYMNASIET</h1>
          <p className="hero-copy">Gymnasieutbildningar för dig som vill skapa utifrån dina idéer och utvecklas inom dagens kreativa branscher.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#programs">VÅRA PROGRAM <ArrowIcon size="sm" /></a>
            <a className="button button-outline-light" href="#schools">HÄR FINNS VI <ArrowIcon size="sm" /></a>
          </div>
        </div>
        <OpenHouseCarousel />
      </div>
      <div className="hero-bottom"><span>SCROLLA</span><ArrowIcon direction="down" size="md" className="scroll-arrow" /></div>
    </section>
  );
}
