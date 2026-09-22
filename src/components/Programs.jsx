import ArrowIcon from "./ArrowIcon.jsx";
import { IoGameController } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { RiGame2Fill } from "react-icons/ri";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoMusicalNotesSharp } from "react-icons/io5";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import { Link } from "react-router-dom";
const programs = [
  {
    title: <><span>SPEL</span><span>UTVECKLING</span></>,
    link: "/program/spelutveckling",
    src: "/k9OGU1J3yEkbYHcp0MEfwTulRhiwZDgMBtSY0n0G.jpg",
    icon: <IoGameController className="card-pixel" />,
    desc: "Spelutveckling, spelgrafik och digitala upplevelser; djupdyka i spelprogrammering.",
    programtitle: "Teknikprogrammet",
    programroute: "Design och produktutveckling",
    color: "cyan"
  },
  {
    title: <><span>GRAFISK</span><span>DESIGN</span></>,
    link: "/program/grafiskdesign",
    src: "/64634450ff050318e95e473e_AdobeStock_317223249.webp",
    icon: <MdDesignServices className="card-pixel" />,
    desc: "Visuell kommunikation, form och kreativt skapande.",
    programtitle: "Estetiska programmet",
    programroute: "Bild och Formgivning",
    color: "green"
  },
  {
    title: <><span>AI &</span><span>WEBUTVECKLING</span></>,
    link: "/program/aiwebutveckling",
    src: "/photo-1593720219276-0b1eacd0aef4.jpg",
    icon: <FaCode className="card-pixel" />,
    desc: "Teknikutbildning som kombinerar programmering och webbutveckling med AI.",
    programtitle: "Teknikprogrammet",
    programroute: "Informations- och medieteknik",
    color: "yellow"
  },
  {
    title: <><span>SPEL</span><span>GRAFIK</span></>,
    link: "/program/spelgrafik",
    src:"/blog_header-skills_you_need_for_a_career_in_game_design.png",
    icon: <RiGame2Fill className="card-pixel" />,
    desc: "På Spelgrafik får du lära dig skapa karaktärer, grafik och hela världar till spel.",
    programtitle: "Estetiska programmet",
    programroute: "Bild och Formgivning",
    color: "orange"
  },
  {
    title: <><span>FOTO &</span><span>FILM</span></>,
    link: "/program/fotofilm",
    src: "/IMG_7471-1024x819.jpg",
    icon: <PiFilmSlateFill className="card-pixel" />,
    desc: "Foto, film, innehåll och berättande för digitala medier.",
    programtitle: "Estetiska programmet",
    programroute: "Estetik och media",
    color: "magenta"
  },
  {
    title: <><span>MUSIK</span><span>PRODUKTION</span></>,
    link: "/program/musikproduktion",
    src: "/a4a785c1-5b6d-41b6-8b3c-375a3d7156ab.png",
    icon: <IoMusicalNotesSharp className="card-pixel" />,
    desc: "Jobba kreativt med ljud och lära dig att spela, skapa och producera musik.",
    programtitle: "Estetiska programmet",
    programroute: "Musik",
    color: "cyan"
  }
];

// komponent där jag skapar sektion för programmer i skolan, och implemnterar ikon komponenter 

export default function Programs() {
  return (
    <section className="programs section-dark" id="programs">
      <div className="section-heading">
        <p className="mono-label">[ VÅRA PROGRAM ]</p>
        <h2><span>VÅRA</span><br />PROGRAM <span className="heading-arrow"><ArrowIcon size="md" /></span></h2>
      </div>

      <div className="program-grid">
        {programs.map((program, index) => (

          <article className={`program-card ${program.color}`} key={program.title} onClick={() => {window.location.href = program.link}}>
            <div className="card-top">
              <span>0{index + 1}</span>
              <ArrowIcon direction="upRight" size="sm" />
            </div>

            <div>
              <h3>{program.title}</h3>
              <p >{program.desc}</p>
              {/* <b>Program:</b> <span>{program.programtitle}</span>
              <br />
              <b>Inriktning:</b> <span>{program.programroute}</span> */}
            </div>
            <div className="intro-visual pixel-frame"><ImagePlaceholder alt="bild" src={program.src} label="[ LBS / CREATIVE ]" className="intro-image" /></div>
            {program.icon}

          </article>

        ))}
      </div>
    </section>
  );
}