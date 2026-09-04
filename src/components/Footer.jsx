import ArrowIcon from "./ArrowIcon.jsx";
const columns = [
  {
    title: "Kontakta oss",
    items: ["KUNGSGATAN 22", "123 45, GÖTEBORG"]
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
            <span className="brand-box">LBS</span>
            <span className="brand-text">KREATIVA<br />GYMNASIET</span>
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
        <h2>LBS KREATIVA GYMNASIET</h2>
        <div className="footer-links">
          <a href="#schools">VÅRA SKOLOR</a>
          <a href="#about">OM OSS</a>
          <a href="#contact">KONTAKTA OSS</a>
          <a href="#programs">VÅRA PROGRAM</a>
          <a href="#open-house">ÖPPET HUS <ArrowIcon size="sm" /></a>
        </div>
      </div>
    </footer>
  );
}