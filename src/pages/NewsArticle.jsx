import React from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const article = {
  category: 'Nyheter',
  date: '30 april 2024',
  readTime: '4 min',
  title: 'Från gymnasiet till den kreativa branschen',
  summary:
    'Tidigare elever från LBS visar hur kreativt arbete, teknik och berättande kan leda till jobb, egna projekt och spännande framtidsvägar.',
  image: '/photo-1593720219276-0b1eacd0aef4.jpg',
  author: 'LBS Studentjournal',
  kicker: 'Alumn',
  content: [
    'Många som går på LBS upptäcker tidigt att de inte bara lär sig ett ämne – de lär sig att tänka i möjligheter. Genom projekt, workshops och samarbete utvecklar eleverna både tekniska färdigheter och ett eget kreativt språk.',
    'När elever lämnar skolan har de ofta byggt en portfölj med arbete som visar hur de tänker, skapar och kommunicerar. Det gör att de kan gå direkt in i arbetslivet, vidareutbildning eller egna företag.',
    'Det som gör LBS unikt är att utbildningen är nära verkligheten. Elever får arbeta med riktiga uppgifter, samarbeta med andra och testa idéer i praktiken innan de står inför sin framtid.',
    'För många blir det avgörande att få möjlighet att hitta sin riktning redan i gymnasiet. Här finns plats för både tekniska lösningar och starka visuella uttryck.'
  ],
  quote:
    'Jag kände direkt att skolan gav mig verktyg att skapa något eget – och det var det som förändrade allt.',
  details: [
    { label: 'Kategori', value: 'Alumn' },
    { label: 'Publicerad', value: '30 april 2024' },
    { label: 'Läsning', value: '4 minuter' }
  ],
  related: [
    {
      title: 'Utforska våra program',
      text: 'Se vilka inriktningar som passar dig bäst om du vill skapa, designa och utveckla.',
      accent: 'cyan'
    },
    {
      title: 'Öppet hus',
      text: 'Kom och upplev skoldagen som elev och möt lärarna, eleverna och programmen.',
      accent: 'green'
    },
    {
      title: 'Framtidens yrken',
      text: 'Läs om de arbetsroller som växer i digitala, kreativa och tekniska branscher.',
      accent: 'yellow'
    }
  ]
};

const NewsArticle = () => {
  return (
    <div className="news-article-page">
      <section className="news-article-hero">
        <div className="news-article-copy">
          <p className="mono-label">[ {article.category.toUpperCase()} ]</p>
          <span className="news-article-kicker">{article.kicker}</span>
          <h1>{article.title}</h1>

          <div className="news-article-meta">
            <span>{article.date}</span>
            <span>{article.author}</span>
            <span>{article.readTime}</span>
          </div>

          <p className="news-article-summary">{article.summary}</p>
        </div>

        <div className="news-article-visual">
          <div className="news-article-image-wrap">
            <ImagePlaceholder alt={article.title} src={article.image} label="[ LBS / NEWS ]" className="news-article-image" />
          </div>
          <div className="news-article-badge">
            <span>Story</span>
            <strong>{article.readTime}</strong>
          </div>
        </div>
      </section>

      <section className="news-article-layout">
        <article className="news-article-body">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <blockquote className="news-article-quote">
            {article.quote}
          </blockquote>
        </article>

        <aside className="news-article-aside">
          <div className="detail-block">
            <p className="mono-label">[ INFO ]</p>
            <div className="article-detail-list">
              {article.details.map((item) => (
                <div key={item.label} className="article-detail-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="news-article-related">
        <div className="section-heading compact-heading">
          <p className="mono-label">[ MERA NYHETER ]</p>
          <h2>
            <span>VÅR</span>
            <span>VÄRLD</span>
          </h2>
        </div>

        <div className="related-grid">
          {article.related.map((item) => (
            <article className={`related-card ${item.accent}`} key={item.title}>
              <div className="related-card-top">
                <span>{item.title.split(' ')[0]}</span>
                <span>NYHET</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsArticle;