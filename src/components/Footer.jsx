import ArrowIcon from "./ArrowIcon.jsx";

  // komponent för en footer där jag också implemnetera ikon komponenten jag skapa.
const columns = [
  {
    title: "Kontakta oss",
    items: ["BREDGATAN 10", "222 21, LUND"]
  },
  {
    title: "Kvalitet",
    items: ["VÅRT KVALITETSARBETE", "LÄMNA SYNPUNKTER", "SE ALLA SKOLOR"]
  },
  {
    title: "Organisationen",
    items: ["SCHOOLSOFT", "JOBBA HOS OSS", "KONTAKTA OSS", "EN DEL AV ACADEMEDIA"]
  }
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-box">
              <img src="/lbslogosvg.svg" alt="LBS" />
            </span>
          </div>
        </div>

        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h4>{column.title}</h4>
            {column.items.map((item) => (
              <a href="#contact" key={item}>{item}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <h2 style={{ textAlign: 'center' }}>LBS KREATIVA GYMNASIET</h2>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <a href="/#schools">VÅRA SKOLOR</a>
          <a href="/#about">OM OSS</a>
          <a href="/#contact">KONTAKTA OSS</a>
          <a href="/#programs">VÅRA PROGRAM</a>
          <a href="/#openhouse" style={{ position: 'relative' }}>ÖPPET HUS <ArrowIcon size="sm" /></a>

        </div>
      </div>
    </footer>
  );
}