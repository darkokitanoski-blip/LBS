import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";

import { IoGameController } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { RiGame2Fill } from "react-icons/ri";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// komponent där jag skapar Hero för sidan alltså där vikitgast finns, och jag implementa ikon komonent och också använder useState och UseEffect från Reacts library
const openHouseSlides = [
  { date: "TORSDAG 22 OKTOBER", time: "17:00", title: "ÖPPET HUS", text: "Kom och upptäck våra utbildningar, lokaler och kreativa miljöer." },
  { date: "TISDAG 08 DECEMBER", time: "17:00", title: "ÖPPET HUS", text: "Träffa elever och lärare och få en känsla för livet på LBS." },
  { date: "ONSDAG 27 JANUARI", time: "17:00", title: "ÖPPET HUS", text: "Se vad du kan skapa inom game, design, media, AI och utveckling." },
  { date: "ONSDAG 05 MAJ", time: "17:00", title: "ÖPPET HUS", text: "Kom och uppleva din inrikting för en fullt teknisk dag." }
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

  const nextSlide = () => {
    setActive((current) => (current + 1) % openHouseSlides.length);
  };

  return (
    <div className="open-house-carousel" aria-label="Öppet hus">

      <div className="oh-progress">
        {openHouseSlides.map((_, index) => (
          <button
            key={index}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Visa öppet hus ${index + 1}`}
          />
        ))}
      </div>

      <div className="oh-slide" key={active}>
        <div className="oh-date">
          <span>[ {slide.date} ]</span>
          <strong>{slide.time}</strong>
        </div>

        <div>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>

        <ArrowIcon direction="upRight" size="lg" />


      </div>

    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="open-house">
      <div className="icons-floating">
        <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
                <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
                <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
                <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
                <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
                <IoGameController></IoGameController>
        <IoMusicalNotesSharp></IoMusicalNotesSharp>
        <FaCode></FaCode>
        <MdDesignServices></MdDesignServices>
        <RiGame2Fill></RiGame2Fill>
        <PiFilmSlateFill></PiFilmSlateFill>
      </div>

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
        <a href="#openhouse">        
          <OpenHouseCarousel />
        </a>

      </div>
      <div className="hero-bottom"></div>
    </section>
  );
}
