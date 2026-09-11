import ArrowIcon from "./ArrowIcon.jsx";
const programs = [
  { title: "GAME", desc: "Spelutveckling, spelgrafik och digitala upplevelser.", color: "cyan" },
  { title: "GRAFISK DESIGN", desc: "Visuell kommunikation, form och kreativt skapande.", color: "green" },
  { title: "AI OCH UTVECKLING", desc: "Kod, AI, teknik och framtidens digitala lösningar.", color: "yellow" },
  { title: "APP- OCH WEBBUTVECKLING", desc: "Design och utveckling av moderna digitala produkter.", color: "orange" },
  { title: "MEDIA", desc: "Foto, film, innehåll och berättande för digitala medier.", color: "magenta" },
  { title: "ESTETIK", desc: "Kreativa uttryck, bild, form och digital produktion.", color: "cyan" },
];

  // komponent där jag skapar sektion för programmer i skolan, och implemnterar ikon komponent 

export default function Programs() {
  return (
    <section className="programs section-dark" id="programs">
      <div className="section-heading">
        <p className="mono-label">[ VÅRA PROGRAM ]</p>
        <h2><span>VÅRA</span><br />PROGRAM <span className="heading-arrow"><ArrowIcon size="md" /></span></h2>
      </div>

      <div className="program-grid">
        {programs.map((program, index) => (
          <article className={`program-card ${program.color}`} key={program.title}>
            <div className="card-top">
              <span>0{index + 1}</span>
              <ArrowIcon direction="upRight" size="sm" />
            </div>
            <div>
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
            </div>
            <div className="card-pixel" />
          </article>
        ))}
      </div>
    </section>
  );
}