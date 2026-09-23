import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const defaultArticle = {
  ["Började arbeta som Grafisk Design"]: {
    date: "30 april 2024",
    type: "ELEVINTERVJU",
    title: "Började arbeta som Grafisk Design",
    src: "https://lbs.se/wp-content/uploads/2024/04/simon-bjorck-scaled-e1714466605822-600x591.jpeg",
    text: "Simon Björck tog studenten från LBS Helsingborg 2019 och jobbade därefter tre år som grafisk designer på Ninjas in Pyjamas. – Det var riktigt kul faktiskt. Det var en bra och öppen skola med öppna människor. Jag hade också jättebra lärare. Det var väldigt spännande i början då jag i högstadiet satt och ritade i smyg på lektionerna medan jag på LBS faktiskt blev ombedd att göra det. – Eftersom jag redan hade börjat designa sedan innan hade jag en bra grund rent tekniskt och kreativt. På LBS lärde jag mig disciplin genom att ha deadlines. Jag utvecklades också rent tekniskt och lärde mig Illustrator som jag har användning av även idag i mitt jobb. – En viktig grej är att kunna jobba under press, det är ofta väldigt korta deadlines. Våra kanaler har också mycket följare och det finns en förväntan på att det man gör ska vara väldigt bra. Att kunna skifta i sin stil är också viktigt, att man har bredd. Sen såklart att man har den tekniska färdigheten och kan använda så många program som möjligt. Varje duktig designer måste också vara bra på att marknadsföra sig. Jag lägger ofta ut nya grejer jag gjort och är aktiv på sociala medier. Det är alltid bra att skapa nya kontakter och få fler följare."
  },
  ["Från LBS till senior 3D-artist"]: {
    date: "7 maj 2026",
    type: "ELEVINTERVJU",
    title: "Från LBS till senior 3D-artist",
    src: "https://lbs.se/wp-content/uploads/2026/05/profilbild-ny-1-600x490.jpg",
    text: "Mitt namn är Sebastian Ladan, jag gick på LBS i Jönköping och läste spelgrafik. Idag jobbar jag på distans som senior 3D-artist på ett företag i Göteborg som heter Brickland. På Brickland jobbar jag med visualiseringar inom bilbranschen. Jag arbetar i projekt för bland annat Polestar, Volvo och Nio. Jag är senior artist på Brickland, vilket betyder att jag har lite mer ansvar och jobbar med mer tekniska delar. Jag håller också på mycket med förarbete inför produktionsstart. Jag minns det ganska bra faktiskt. Jag har alltid gillat att spela tv-spel. Så jag tänkte att om jag gillar spel, hur skulle jag kunna jobba med det? Då kändes spelgrafik i Jönköping som ett perfekt val. Det var så jag bestämde mig för att söka till LBS i Jönköping. Den bästa lärdomen som jag fick från LBS var för mig kunskapen kring 3D. Det var det som jag kände redan då att jag ville jobba med. Men det handlade inte bara om tekniken, utan också om arbetssättet. Vi hade projekt där vi jobbade som ett företag och gjorde ett spel tillsammans. I dessa projekt hade man olika roller och fick följa ett projekt från koncept till produktion, vidare till musik och andra delar, vilket till slut resulterade i en färdig produkt. Det är väldigt likt hur jag jobbar idag. Man utgår från koncept, går in i produktion, finslipar och levererar. Att få jobba på det här sättet redan då, förberedde mig för hur arbetslivet skulle komma att se ut. Min resa har varit lång, och den har inte varit helt lätt. Men den började redan på LBS. Jag hade två vänner där som hade kommit långt inom 3D och det inspirerade mig mycket. De höll också på med eget vid sidan av, och då började jag själv lära mig mer på fritiden utöver det vi gjorde i skolan. Efter studenten började jag på högskola och läste vidare inom visualisering på Campus i12 i Eksjö. Där började jag kombinera mitt intresse för bilar med 3D. Här började jag bygga upp en riktigt bra portfolio online.  Efter mina studier hade jag inte ett jobb inom 3D som stod och väntade på mig. Så jag fick jobba med lite blandade jobb på lager och butik för att få in en inkomst, samtidigt som jag började frilansa. Under ungefär fem år kombinerade jag ett halvtidsjobb med frilansarbete. Under denna period fick jag ett frilansuppdrag av Brickland där jag jobbar idag. "
  },
  ["Från LBS till eget växande företag"]: {
    date: "12 mars 2026",
    type: "ELEVINTERVJU",
    title: "Från LBS till eget växande företag ",
    src: "https://lbs.se/wp-content/uploads/2026/03/lbsalumnnathalie-andersson2026-600x669.jpg",
    text: "Jag heter Nathalié och är filmkreatör. Jag älskar högt tempo, humor, kreativt kaos, storytelling och starka visuella uttryck – både framför och bakom kameran. Jag utforskar helst området utanför boxen och försöker alltid pusha på kreativa och psykiska begränsningar för att utvecklas inom filmskapandet. Jag valde LBS för att de jobbade med branschprogram och hade ett tydligt fokus på verklighetsnära och professionellt skapande, vilket lockade mig väldigt mycket. Jag gillade också att skolan var relativt liten och kändes mer personlig och anpassningsbar efter varje individ. Oavsett om man hade mycket förkunskaper eller var helt nybörjare fanns det alltid möjlighet att utvecklas, få stöd och utmanas på sin egen nivå – och det kändes väldigt motiverande. Bäst! Jag trivdes otroligt bra – både i skolan, med människorna, lärarna och min inriktning. Miljön var trygg, vilket gjorde att jag vågade testa nya idéer, växa och framför allt våga ta plats och visa vem jag var. Lärarna spelade en enorm roll i det. Jag hade lärare som verkligen såg mig, pushade mig när det behövdes och stöttade mig när det var tufft. De förstod både de kreativa processerna och de personliga utmaningarna. Samtidigt var de personer att se upp till – inte minst tack vare deras erfarenhet från branschen, men också genom sitt sätt att vara som människor och kreativa personligheter. De inspirerade, utmanade och trodde på oss, vilket gjorde att man vågade."
  },
};

const Arrow = ({ direction = "right" }) => (
  <span
    className={`news-article__arrow news-article__arrow--${direction}`}
    aria-hidden="true"
  >
    {direction === "left" ? "←" : "→"}
  </span>
);

function ArticleBody({ body }) {
    const urlname = useParams()
  const title = urlname.slug
  const dataReal = defaultArticle[`${title}`]
  return (
    <div className="news-article__body">
      {dataReal.text}
    </div>
  );
}


export default function NewsArticle({
  article = defaultArticle,
  onBack,
  onRelatedClick,
  backLabel = "ALLA NYHETER"
}) {
  const [progress, setProgress] = useState(0);
  const pageRef = useRef(null);
  const data = {
    ...defaultArticle,
    ...article,
    body: article?.body || defaultArticle.body,
    tags: article?.tags || [],
    related: article?.related || []
  };
  const urlname = useParams()
  const title = urlname.slug
  console.log(title)
  const dataReal = defaultArticle[`${title}`]
  useEffect(() => {
    const updateProgress = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const nextProgress =
        documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [data]);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    if (window.history.length > 1) {
      window.location.href = "/#news";
    }
  };

  return (
    <main ref={pageRef} className="news-article">

      <div
        className="news-article__progress"
        aria-hidden="true"
        style={{ "--progress": `${progress / 100}` }}
      >
        <div className="news-article__progress-bar" />
      </div>

      <header className="news-article__hero">
        <div className="news-article__hero-media">
          {dataReal.src && (
            <img
              className="news-article__hero-image"
              src={dataReal.src}
              alt={data.imageAlt || ""}
            />
          )}
        </div>

        <div className="news-article__hero-grid" aria-hidden="true" />

        <div className="news-article__hero-content">
          <div className="news-article__meta">
            <span className="news-article__category">{data. category}</span>
            <span className="news-article__meta-dot">/</span>
            <time>{dataReal.date}</time>
            <span className="news-article__meta-dot">/</span>
            <span>{data.readTime}</span>
          </div>

          <h1 className="news-article__title">{title}</h1>

          <p className="news-article__intro">{data.excerpt}</p>

          <div className="news-article__hero-footer">
            <span className="news-article__author">
              TEXT: {data.author || "LBS LUND"}
            </span>

            <span className="news-article__scroll">
              LÄS VIDARE
              <span className="news-article__scroll-line" />
              ↓
            </span>
          </div>
        </div>
      </header>

      <section className="news-article__content">
        <button className="news-article__back" type="button" onClick={handleBack}>
          <span className="news-article__back-arrow">←</span>
          {backLabel}
        </button>

        <ArticleBody body={data.body} />

        {data.tags.length > 0 && (
          <div className="news-article__tags reveal">
            {data.tags.map((tag) => (
              <span className="news-article__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      {data.related.length > 0 && (
        <section className="news-article__related">
          <div className="news-article__related-inner">
            <span className="news-article__section-kicker">
              [ MER FRÅN LBS LUND ]
            </span>

            <h2 className="news-article__related-title">
              VAD HÄNDER HÄRNÄST?
            </h2>

            <div className="news-article__related-grid">
              {data.related.map((item, index) => (
                <button
                  className="news-article__related-card"
                  type="button"
                  key={`${item.title}-${index}`}
                  onClick={() => onRelatedClick?.(item, index)}
                >
                  <div className="news-article__related-meta">
                    <span>{item.category || "NYHETER"}</span>
                    <span>{item.date || ""}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <span className="news-article__related-arrow">
                    <Arrow />
                  </span>
                </button>
              ))}
            </div>


          </div>
        </section>
      )}
      <Footer></Footer>
    </main>
  );
}