import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const defaultArticle = {
  title: "DET HÄR ÄR EN NYHET FRÅN LBS LUND",
  category: "NYHETER",
  date: "22 SEPTEMBER 2026",
  readTime: "3 MIN",
  excerpt:
    "En kort ingress som sammanfattar nyheten och ger besökaren en tydlig bild av vad artikeln handlar om.",
  image: "",
  imageAlt: "",
  author: "LBS LUND",
  body: [
    {
      type: "paragraph",
      text:
        "Här kan artikelns brödtext ligga. Använd den här ytan för att berätta vad som har hänt, varför det är relevant för eleverna och vad som händer härnäst."
    },
    {
      type: "heading",
      text: "EN RUBRIK I ARTIKELN"
    },
    {
      type: "paragraph",
      text:
        "Fortsätt med mer information, citat eller detaljer från händelsen. Brödtexten använder Onest och hålls luftig för att göra längre artiklar enkla att läsa."
    }
  ],
  tags: ["LBS LUND", "NYHETER"],
  related: [
    {
      title: "UPPTÄCK VAD SOM HÄNDER PÅ LBS LUND",
      category: "NYHETER",
      date: "NYHET"
    },
    {
      title: "LÄS MER OM VÅRA PROGRAM",
      category: "LBS LUND",
      date: "INFORMATION"
    }
  ]
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
  return (
    <div className="news-article__body">
      {body?.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 className="news-article__body-heading reveal" key={index}>
              {block.text}
            </h2>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote className="news-article__quote reveal" key={index}>
              <span className="news-article__quote-mark">“</span>
              <p>{block.text}</p>
            </blockquote>
          );
        }

        return (
          <p className="news-article__paragraph reveal" key={index}>
            {block.text}
          </p>
        );
      })}
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
      window.history.back();
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
          {data.image && (
            <img
              className="news-article__hero-image"
              src={data.image}
              alt={data.imageAlt || ""}
            />
          )}
        </div>

        <div className="news-article__hero-grid" aria-hidden="true" />

        <div className="news-article__hero-content">
          <div className="news-article__meta">
            <span className="news-article__category">{data.category}</span>
            <span className="news-article__meta-dot">/</span>
            <time>{data.date}</time>
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