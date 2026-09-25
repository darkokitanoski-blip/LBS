import ArrowIcon from "./ArrowIcon.jsx";

// komponent för en footer där jag också implemnetera ikon komponenten jag skapa.
const columns =

{

  title: "Kontakta oss:",

  items: [
    { tel: "046-12 44 50", func: "tel:046124450" },
    { email: "lund@lbs.se", func: "mailto:lund@lbs.se" },
    {
      text: "BREDGATAN 10, 222 21 LUND",
      func: "https://www.google.com/maps/search/?api=1&query=Bredgatan+10%2C+222+21+Lund"
    }
  ]

}



export default function Footer() {
  console.log(columns.items)
  columns.items.forEach((item) => {
    console.log(item)
  })
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

        <div className="footer-column" key="aboutus">
          <h4>{columns.title}</h4>

          {columns.items.map((item) => (
            <a href={item.func} key={item.func}>
              {item.tel || item.email || item.text}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <h2 style={{ textAlign: 'center' }}>LBS KREATIVA GYMNASIET</h2>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <a href="/#about">OM OSS</a>
          <a href="/#programs">VÅRA PROGRAM</a>
          <a href="/#schools">ANMÄL DIG</a>
          <a href="/#contact">KONTAKTA OSS</a>
          <a href="/#openhouse" style={{ position: 'relative' }}>ÖPPET HUS <ArrowIcon size="sm" /></a>

        </div>
      </div>
    </footer>
  );
}