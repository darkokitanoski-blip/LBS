import ArrowIcon from "./ArrowIcon.jsx";
const news = [
  {
    date: "30 APRIL 2024",
    type: "ALUMN",
    title: "BÖRJADE ARBETA DIREKT",
    text: "Från gymnasiet till den kreativa branschen – upptäck vad tidigare elever gör idag."
  },
  {
    date: "04 DEC 2024",
    type: "NYHETER",
    title: "EN FRAMTID I SPELBRANSCHEN",
    text: "Spelbranschen växer och kreativa digitala kompetenser blir allt viktigare."
  },
  {
    date: "29 APRIL 2024",
    type: "NYHETER",
    title: "UPPTÄCK MÖJLIGHETERNA",
    text: "Fem exempel på hur LBS skapar möjligheter för din framtid."
  }
];

export default function News() {
  return (
    <section className="news section" id="news">
      <div className="ticker">
        <span><ArrowIcon size="sm" /> ÖPPET HUS 19 NOV KL.18</span>
        <span><ArrowIcon size="sm" /> ÖPPET HUS 19 NOV KL.18</span>
        <span><ArrowIcon size="sm" /> ÖPPET HUS 19 NOV KL.18</span>
      </div>

      <div className="news-heading">
        <p className="mono-label dark">[ SENASTE ]</p>
        <h2>WHAT'S NEW?</h2>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <article className="news-card" key={item.title}>
            <div className="news-image pixel-frame">
              <div className="news-image-inner">
                <span>[ IMAGE ]</span>
              </div>
            </div>
            <div className="news-content">
              <span className="meta">[ {item.date} ]</span>
              <span className="meta">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#news">LÄS MER <ArrowIcon size="sm" /></a>
            </div>
          </article>
        ))}
      </div>

      <a className="news-more" href="#news">SE ALLA NYHETER <ArrowIcon size="md" /></a>
    </section>
  );
}