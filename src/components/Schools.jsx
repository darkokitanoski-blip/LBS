import ArrowIcon from "./ArrowIcon.jsx";
const schools = [
  "Göteborg", "Borås", "Halmstad", "Helsingborg", "Jönköping",
  "Kristianstad", "Kungsbacka", "Linköping", "Malmö", "Nyköping",
  "Stockholm Norra", "Stockholm Södra", "Trollhättan", "Varberg", "Växjö", "Örebro"
];

export default function Schools() {
  return (
    <section className="schools section-dark" id="schools">
      <div className="schools-copy">
        <p className="mono-label">[ HÄR FINNS VI ]</p>
        <h2><span>HÄR FINNS</span><span>VÅRA</span><span>GYMNASIUM</span></h2>
        <p>
          Är du nyfiken på LBS Kreativa Gymnasiet? Klicka dig vidare till
          skolan närmast dig!
        </p>
      </div>

      <div className="school-list">
        {schools.map((school) => (
          <a href="#schools" key={school}>
            <span>{school}</span>
            <ArrowIcon direction="upRight" size="sm" />
          </a>
        ))}
      </div>
    </section>
  );
}