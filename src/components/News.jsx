import ArrowIcon from "./ArrowIcon.jsx";
import SectionTransition from "./SectionTransition.jsx";
import * as React from "react"
import ImagePlaceholder from "./ImagePlaceholder.jsx";

import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

// komponent där jag skapr Nyhet sektion för sidan, och jag implementa ikon komponent och SectionTransition komponent för att göra carousel typ av funktionallitet 
const news = [
  {
    date: "12 mars 2026",
    type: "ELEVINTERVJU",
    title: "Från LBS till eget växande företag ",
    src: "https://lbs.se/wp-content/uploads/2026/03/lbsalumnnathalie-andersson2026-600x669.jpg",
    text: "”Idag driver jag eget företag där jag jobbar med content creation, sociala medier och skapar film åt företag, samtidigt som jag bygger mitt eget varumärke på TikTok där jag skapar högenergiskt, humoristiskt och kreativt innehåll.”"
  },
  {
    date: "7 maj 2026",
    type: "ELEVINTERVJU",
    title: "Från LBS till senior 3D-artist",
    src: "https://lbs.se/wp-content/uploads/2026/05/profilbild-ny-1-600x490.jpg",
    text: "Från spelintresserad gymnasieelev till senior 3D-artist inom bilindustrin. Sebastian Ladan har genom passion och hårt arbete byggt en karriär inom 3D-visualisering. Idag arbetar han med projekt för bland annat Polestar och Volvo."
  },
  {
    date: "30 april 2024",
    type: "ELEVINTERVJU",
    title: "Började arbeta som Grafisk Design",
    src: "https://lbs.se/wp-content/uploads/2024/04/simon-bjorck-scaled-e1714466605822-600x591.jpeg",
    text: "Simon Björck tog studenten från LBS Helsingborg 2019 och jobbade därefter tre år som grafisk designer på Ninjas in Pyjamas. Efter att ha gjort uppdrag från NIP under gymnasietiden fick han jobb där nästan direkt och blev sedan..."
  }
];

export default function News() {
  return (
    <section className="news section" id="news">
      <div className="ticker">
        <div className="ticker-track">
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
          <span> ÖPPET HUS 19 NOV KL.18</span>
        </div>
      </div>

      <div className="news-heading">
        <p className="mono-label dark">[ SENASTE ]</p>
        <h2>WHAT'S NEW?</h2>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <article className="news-card" key={item.title} onClick={() => window.location.href = `/news/${item.title}`}>
            <div className="news-image pixel-frame">
              <div className="news-image-inner" style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "transform 0.4s ease",
              }}>
              </div>
            </div>

            <div className="news-content">
              <span className="meta">[ {item.date} ]</span>
              <span className="meta">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#news" className="absolute bottom-6 flex items-center">
                LÄS MER <ArrowIcon size="sm" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <Carousel opts={{
        loop: true,
      }} className="carousel-news-mobile-port w-full max-w-[100%]">
        <CarouselContent>
          {news.map((item) => (
            <CarouselItem key={item.title}>
              <article className="news-card" onClick={() => window.location.href = `/news/${item.title}`}>

                <div className="news-image pixel-frame">
                  <div className="news-image-inner" style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "transform 0.4s ease",
                  }}>
                  </div>
                </div>

                <div className="news-content">
                  <span className="meta">[ {item.date} ]</span>
                  <span className="meta">{item.type}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <a href="#news" className="absolute bottom-6 flex items-center">
                    LÄS MER <ArrowIcon size="sm" />
                  </a>
                </div>

              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <a className="news-more" href="#news">
        SE ALLA NYHETER <ArrowIcon size="md" />
      </a>

    </section>
  );
}