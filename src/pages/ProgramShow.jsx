

import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import News from "../components/News";
import { useParams } from "react-router-dom";
import {
  IoGameController,
  IoMusicalNotesSharp,
} from "react-icons/io5";
import {
  MdDesignServices,
} from "react-icons/md";
import {
  FaCode,
} from "react-icons/fa";
import {
  RiGame2Fill,
} from "react-icons/ri";
import {
  PiFilmSlateFill,
} from "react-icons/pi";

const themeColors = {
  cyan: {
    light: "#00FFFF",
    dark: "#002736",
  },
  green: {
    light: "#00E676",
    dark: "#002D22",
  },
  yellow: {
    light: "#FFEB3B",
    dark: "#2A250F",
  },
  orange: {
    light: "#FF8800",
    dark: "#3B1404",
  },
  magenta: {
    light: "#FF0079",
    dark: "#330026",
  },
};


const programs = {
  spelutveckling: {
    title: (
      <>
        <span>SPEL</span>
        <span>UTVECKLING</span>
      </>
    ),
    slug: "spelutveckling",
    link: "/program/spelutveckling",
    src: "/k9OGU1J3yEkbYHcp0MEfwTulRhiwZDgMBtSY0n0G.jpg",
    icon: <IoGameController className="card-pixel" />,
    desc: "Spelutveckling, spelgrafik och digitala upplevelser; djupdyka i spelprogrammering.",
    programtitle: "Teknikprogrammet",
    programroute: "Design och produktutveckling",
    color: "cyan",

    intro:
      "Utveckla spel, digitala upplevelser och interaktiva idéer genom programmering, design och kreativt skapande.",

    description:
      "På Spelutveckling får du kombinera teknik och kreativitet. Du arbetar med programmering, spelmekanik och digitalt skapande för att utveckla egna idéer till fungerande spel och upplevelser.",

    highlights: [
      "Spelprogrammering",
      "Speldesign och spelmekanik",
      "Digitalt skapande",
      "Interaktiva upplevelser",
    ],

    projects: [
      "Utveckla egna spel från idé till färdig prototyp",
      "Skapa spelmekanik och interaktioner",
      "Arbeta med programmering och problemlösning",
      "Utveckla digitala upplevelser tillsammans med andra",
    ],

    courses: [
      {
        title: "Programmering",
        text: "Arbeta med programmering och logik för att skapa funktionella och interaktiva lösningar.",
      },
      {
        title: "Spelutveckling",
        text: "Arbeta praktiskt med spel, spelmekanik och utvecklingsprocessen från idé till färdig produkt.",
      },
      {
        title: "Digitalt skapande",
        text: "Skapa och utveckla digitalt material som kan användas i dina spel och projekt.",
      },
    ],

    future: [
      "Spelutvecklare",
      "Spelprogrammerare",
      "Game designer",
      "Level designer",
      "Teknik- och IT-utbildningar",
    ],
  },

  grafiskdesign: {
    title: (
      <>
        <span>GRAFISK</span>
        <span>DESIGN</span>
      </>
    ),

    slug: "grafiskdesign",
    link: "/program/grafiskdesign",

    src: "/64634450ff050318e95e473e_AdobeStock_317223249.webp",

    icon: <MdDesignServices className="card-pixel" />,

    desc: "Visuell kommunikation, form och kreativt skapande.",

    programtitle: "Estetiska programmet",
    programroute: "Bild och Formgivning",

    color: "green",

    intro:
      "Utforska grafisk design, visuell kommunikation och kreativt skapande genom praktiska projekt.",

    description:
      "På Grafisk design får du arbeta med hur idéer kommuniceras visuellt. Du får utveckla ditt kreativa uttryck genom form, typografi, bild och digital design.",

    highlights: [
      "Grafisk design",
      "Visuell kommunikation",
      "Typografi och form",
      "Digitalt skapande",
    ],

    projects: [
      "Skapa grafiska identiteter och visuella koncept",
      "Arbeta med layout, typografi och bild",
      "Utveckla affischer och digital kommunikation",
      "Skapa egna designprojekt från idé till färdig produktion",
    ],

    courses: [
      {
        title: "Grafisk design",
        text: "Arbeta med form, layout och visuella uttryck för olika typer av kommunikation.",
      },
      {
        title: "Visuell kommunikation",
        text: "Lär dig hur färg, form, typografi och bild kan användas för att kommunicera idéer.",
      },
      {
        title: "Digitalt skapande",
        text: "Utveckla digitala produktioner och experimentera med olika kreativa verktyg.",
      },
    ],

    future: [
      "Grafisk designer",
      "Art director",
      "Kommunikatör",
      "Digital designer",
      "Design- och mediautbildningar",
    ],
  },

  aiwebutveckling: {
    title: (
      <>
        <span>AI &</span>
        <span>WEBUTVECKLING</span>
      </>
    ),

    slug: "aiwebutveckling",
    link: "/program/aiwebutveckling",

    src: "/photo-1593720219276-0b1eacd0aef4.jpg",

    icon: <FaCode className="card-pixel" />,

    desc: "Teknikutbildning som kombinerar programmering och webbutveckling med AI.",

    programtitle: "Teknikprogrammet",
    programroute: "Informations- och medieteknik",

    color: "yellow",

    intro:
      "Kombinera programmering, webbutveckling och moderna AI-verktyg för att bygga digitala lösningar.",

    description:
      "På AI & Webbutveckling får du arbeta tekniskt och kreativt med webben. Du utvecklar förståelse för programmering, digitala system och hur AI kan användas som ett verktyg i utvecklingsprocessen.",

    highlights: [
      "Webbutveckling",
      "Programmering",
      "AI och digital teknik",
      "Problemlösning",
    ],

    projects: [
      "Bygg egna webbplatser och digitala tjänster",
      "Utveckla interaktiva webbapplikationer",
      "Arbeta med programmering och databaser",
      "Experimentera med AI i egna projekt",
    ],

    courses: [
      {
        title: "Webbutveckling",
        text: "Lär dig bygga moderna webbplatser och digitala gränssnitt.",
      },
      {
        title: "Programmering",
        text: "Utveckla problemlösningsförmåga genom programmering och logiskt tänkande.",
      },
      {
        title: "AI och digital teknik",
        text: "Utforska hur AI och andra digitala tekniker kan användas för att skapa nya lösningar.",
      },
    ],

    future: [
      "Webbutvecklare",
      "Programmerare",
      "Systemutvecklare",
      "UX/UI-designer",
      "IT- och teknikutbildningar",
    ],
  },

  spelgrafik: {
    title: (
      <>
        <span>SPEL</span>
        <span>GRAFIK</span>
      </>
    ),

    slug: "spelgrafik",
    link: "/program/spelgrafik",

    src: "/blog_header-skills_you_need_for_a_career_in_game_design.png",

    icon: <RiGame2Fill className="card-pixel" />,

    desc: "På Spelgrafik får du lära dig skapa karaktärer, grafik och hela världar till spel.",

    programtitle: "Estetiska programmet",
    programroute: "Bild och Formgivning",

    color: "orange",

    intro:
      "Skapa karaktärer, miljöer och visuella världar för spel och digitala upplevelser.",

    description:
      "På Spelgrafik får du kombinera konstnärligt skapande med spelutveckling. Du arbetar med visuella uttryck, karaktärer, miljöer och digital grafik.",

    highlights: [
      "Karaktärsdesign",
      "Spelgrafik",
      "Miljöer och världsskapande",
      "Digital illustration",
    ],

    projects: [
      "Skapa egna spelkaraktärer",
      "Designa miljöer och spelvärldar",
      "Arbeta med digital illustration",
      "Utveckla visuella koncept för spel",
    ],

    courses: [
      {
        title: "Spelgrafik",
        text: "Utveckla visuella element som karaktärer, miljöer och objekt för spel.",
      },
      {
        title: "Bild och form",
        text: "Arbeta med konstnärliga metoder, form och visuellt uttryck.",
      },
      {
        title: "Digitalt skapande",
        text: "Skapa digital grafik och visuellt material med digitala verktyg.",
      },
    ],

    future: [
      "Game artist",
      "3D-grafiker",
      "Character artist",
      "Concept artist",
      "Grafik- och designutbildningar",
    ],
  },

  fotofilm: {
    title: (
      <>
        <span>FOTO &</span>
        <span>FILM</span>
      </>
    ),

    slug: "fotofilm",
    link: "/program/fotofilm",

    src: "/IMG_7471-1024x819.jpg",

    icon: <PiFilmSlateFill className="card-pixel" />,

    desc: "Foto, film, innehåll och berättande för digitala medier.",

    programtitle: "Estetiska programmet",
    programroute: "Estetik och media",

    color: "magenta",

    intro:
      "Berätta med bild och film och utveckla ditt kreativa uttryck för digitala medier.",

    description:
      "På Foto & Film får du arbeta praktiskt med fotografi, film och visuellt berättande. Du får utveckla idéer och skapa innehåll som kommunicerar med en publik.",

    highlights: [
      "Fotografi",
      "Filmproduktion",
      "Visuellt berättande",
      "Digitala medier",
    ],

    projects: [
      "Planera och genomföra egna filmproduktioner",
      "Fotografera och arbeta med bildberättande",
      "Skapa innehåll för digitala medier",
      "Arbeta med idé, inspelning och efterbearbetning",
    ],

    courses: [
      {
        title: "Fotografi",
        text: "Arbeta med fotografiskt berättande, bildkomposition och visuellt uttryck.",
      },
      {
        title: "Filmproduktion",
        text: "Utveckla idéer och arbeta med filmens olika delar från planering till färdig produktion.",
      },
      {
        title: "Digitala medier",
        text: "Skapa innehåll och arbeta med kommunikation i digitala kanaler.",
      },
    ],

    future: [
      "Fotograf",
      "Filmproducent",
      "Videograf",
      "Content creator",
      "Media- och kommunikationsutbildningar",
    ],
  },

  musikproduktion: {
    title: (
      <>
        <span>MUSIK</span>
        <span>PRODUKTION</span>
      </>
    ),

    slug: "musikproduktion",
    link: "/program/musikproduktion",

    src: "/a4a785c1-5b6d-41b6-8b3c-375a3d7156ab.png",

    icon: <IoMusicalNotesSharp className="card-pixel" />,

    desc: "Jobba kreativt med ljud och lära dig att spela, skapa och producera musik.",

    programtitle: "Estetiska programmet",
    programroute: "Musik",

    color: "cyan",

    intro:
      "Skapa, spela in och producera musik samtidigt som du utvecklar ditt eget musikaliska uttryck.",

    description:
      "På Musikproduktion får du arbeta kreativt med musik och ljud. Du får möjlighet att utveckla idéer, skapa produktioner och experimentera med olika musikaliska uttryck.",

    highlights: [
      "Musikproduktion",
      "Ljud och inspelning",
      "Musikskapande",
      "Kreativt uttryck",
    ],

    projects: [
      "Skapa egna musikproduktioner",
      "Arbeta med inspelning och ljud",
      "Producera musik tillsammans med andra",
      "Utveckla egna musikaliska idéer",
    ],

    courses: [
      {
        title: "Musikproduktion",
        text: "Arbeta med att skapa och producera musik i en digital produktionsmiljö.",
      },
      {
        title: "Musik",
        text: "Utveckla ditt musikaliska uttryck genom skapande och praktiskt arbete.",
      },
      {
        title: "Ljudproduktion",
        text: "Utforska inspelning, ljudbearbetning och hur ljud kan användas kreativt.",
      },
    ],

    future: [
      "Musikproducent",
      "Ljudtekniker",
      "Artist",
      "Låtskrivare",
      "Musik- och medieutbildningar",
    ],
  },
};

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function PixelShape() {
  return (
    <div className="program-show__pixel-shape" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function CornerMarks() {
  return (
    <div className="program-show__corners" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

export default function ProgramShow({
  onApply,
  onVisit,
}) {
  const pageRef = useRef(null);
  const { programmename } = useParams();
  const data = programs[programmename];

  if (!data) {
    return (
      <main className="program-show" style={{ "--program-light": themeColors.cyan.light, "--program-dark": themeColors.cyan.dark }}>
        <div className="program-show__container" style={{ padding: "4rem 1.5rem" }}>
          <h1>Program hittades inte.</h1>
        </div>
      </main>
    );
  }

  const colors = themeColors[data.color] || themeColors.cyan;

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const revealElements = page.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [data.title]);

  const scrollTo = (id) => {
    pageRef.current
      ?.querySelector(`#${id}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const [fixed, setFixed] = useState("absolute")

  window.addEventListener("scroll", (e) => {
    console.log(window.scrollY)
    if (window.scrollY < 799 || window.scrollY > 4350) {
      setFixed("absolute")
    } else {
      setFixed("fixed")
    }
  })

  return (
    <main
      ref={pageRef}
      className="program-show"
      style={{
        "--program-light": colors.light,
        "--program-dark": colors.dark,
      }}
    >
      <style>{`
      
      `}</style>

      <section className="program-show__hero" id="top">
        <div
          className={`program-show__hero-image ${data.src ? "has-image" : ""
            }`}
          style={{
            "--program-image": data.src
              ? `url("${data.src}")`
              : undefined,
          }}
          aria-hidden="true"
        />

        <div className="program-show__grid" aria-hidden="true" />
        <PixelShape />
        <CornerMarks />

        <div className="program-show__container program-show__hero-content">
          <button
            className="program-show__back"
            onClick={() => window.history.back()}
          >
            ← TILLBAKA TILL PROGRAM
          </button>

          <div data-reveal>
            <div className="program-show__eyebrow">
              {data.programtitle} / {data.programroute}
            </div>

            <h1 className="program-show__title">
              {data.title}
            </h1>

            <p className="program-show__intro">{data.intro}</p>

            <div className="program-show__hero-bottom">

              <div className="program-show__hero-info">
                <span className="program-show__hero-info-label">
                  Utbildning
                </span>
                <span className="program-show__hero-info-value">
                  {data.programtitle}
                </span>
              </div>

              <div className="program-show__hero-info">
                <span className="program-show__hero-info-label">
                  Typ
                </span>
                <span className="program-show__hero-info-value">
                  Högskoleförberedande
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section
        className="program-show__section"
        id="om"
      >

        <nav className="program-show__quick-nav " style={{ position: fixed }}>
          <div className="program-show__container program-show__quick-nav-inner">
            <span className="program-show__quick-label">
              {data.title}
            </span>

            <div className="program-show__quick-links">
              <button
                className="program-show__quick-link"
                onClick={() => scrollTo("om")}
              >
                OM PROGRAMMET
              </button>

              <button
                className="program-show__quick-link"
                onClick={() => scrollTo("innehall")}
              >
                INNEHÅLL
              </button>

              <button
                className="program-show__quick-link"
                onClick={() => scrollTo("projekt")}
              >
                PROJEKT
              </button>

              <button
                className="program-show__quick-link"
                onClick={() => scrollTo("kurser")}
              >
                KURSER
              </button>

              <button
                className="program-show__quick-link"
                onClick={() => scrollTo("framtid")}
              >
                EFTER GYMNASIET
              </button>
            </div>
          </div>
        </nav>
        <div className="program-show__container">
          <div
            className="program-show__section-heading"
            data-reveal
          >
            <div className="program-show__section-number">
              01 / OM PROGRAMMET
            </div>

            <div>
              <h2 className="program-show__heading">
                Skapa.
                <br />
                <span>Utveckla.</span>
                <br />
                Utforska.
              </h2>

              <p className="program-show__lead">
                {data.description}
              </p>
            </div>
          </div>

          <div
            className="program-show__highlight-grid"
            id="innehall"
          >
            {data.highlights.map((item, index) => (
              <article
                key={item}
                className="program-show__highlight"
                data-number={`0${index + 1}`}
                data-reveal
              >
                <span className="program-show__highlight-index">
                  [{String(index + 1).padStart(2, "0")}]
                </span>

                <h3 className="program-show__highlight-title">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="program-show__projects"
        id="projekt"
      >
        <div
          className="program-show__projects-visual"
          data-reveal="left"
        >
          <CornerMarks />
        </div>

        <div
          className="program-show__projects-content"
          data-reveal="right"
        >
          <div className="program-show__section-number">
            02 / PRAKTISKT SKAPANDE
          </div>

          <h2 className="program-show__heading">
            Från idé
            <br />
            till <span>projekt.</span>
          </h2>

          <p className="program-show__lead">
            En programme-sida bör visa vad eleven faktiskt får göra.
            Här kan du lägga in riktiga elevprojekt, bilder och exempel
            från LBS Lund.
          </p>

          <ul className="program-show__project-list">
            {data.projects.map((project) => (
              <li
                className="program-show__project-item"
                key={project}
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="program-show__section program-show__section--grey"
        id="kurser"
      >
        <div className="program-show__container">
          <div
            className="program-show__section-heading"
            data-reveal
          >
            <div className="program-show__section-number">
              03 / KURSER
            </div>

            <div>
              <h2 className="program-show__heading">
                Vad <span>läser</span> du?
              </h2>

              <p className="program-show__lead">
                Visa de viktigaste delarna av utbildningen här. En
                komplett poängplan kan länkas separat om sidan behöver
                innehålla alla kurser och poäng.
              </p>
            </div>
          </div>

          <div className="program-show__course-list">
            {data.courses.map((course, index) => (
              <article
                className="program-show__course"
                key={course.title}
                data-reveal
              >
                <div className="program-show__course-button">
                  <span className="program-show__course-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="program-show__course-title">
                    {course.title}
                  </span>

                  <span className="program-show__course-arrow">
                    →
                  </span>
                </div>

                <p className="program-show__course-text">
                  {course.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FUTURE ==================== */}

      <section
        className="program-show__section program-show__future"
        id="framtid"
      >
        <div className="program-show__container">
          <div
            className="program-show__section-heading"
            data-reveal
          >
            <div className="program-show__section-number">
              04 / EFTER GYMNASIET
            </div>

            <div>
              <h2 className="program-show__heading">
                Ta det
                <br />
                <span>vidare.</span>
              </h2>

              <p className="program-show__lead">
                Programmet är högskoleförberedande. Den här delen kan
                visa exempel på yrkesområden och vidare studier som
                passar programmets innehåll.
              </p>
            </div>
          </div>

          <div className="program-show__future-grid">
            {data.future.map((item, index) => (
              <article
                className="program-show__future-card"
                data-reveal
                key={item}
              >
                <span className="program-show__future-index">
                  [{String(index + 1).padStart(2, "0")}]
                </span>

                <h3 className="program-show__future-title">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <News></News>

      {/* ==================== FOOTER ==================== */}

      <Footer></Footer>
    </main>
  );
}