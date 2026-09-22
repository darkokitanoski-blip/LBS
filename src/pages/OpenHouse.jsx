import React from "react";

/**
 * OpenHouse.jsx
 * LBS Kreativa Gymnasiet Malmö – Open House landing page.
 *
 * Design direction follows the supplied LBS graphic manual:
 * - Big Shoulders Text Black for headlines
 * - Onest for readable copy
 * - IBM Plex Mono for labels / UI accents
 * - Dark + light monochrome colour pairs
 * - Offset text blocks, pixel-style details and keyboard symbols
 *
 * The page intentionally avoids inventing a detailed event schedule.
 * The official Open House dates and school information are based on
 * LBS Malmö's current public information.
 */

const openHouseDates = [
  {
    date: "11 NOV",
    weekday: "ONSDAG",
    time: "17:00–19:00",
    year: "2026",
  },
  {
    date: "10 DEC",
    weekday: "TORSDAG",
    time: "17:00–19:00",
    year: "2026",
  },
  {
    date: "19 JAN",
    weekday: "TISDAG",
    time: "17:00–19:00",
    year: "2027",
  },
  {
    date: "05 MAJ",
    weekday: "ONSDAG",
    time: "17:00–19:00",
    year: "2027",
  },
];

const programs = [
  {
    title: "AI & WEBBUTVECKLING",
    program: "TEKNIKPROGRAMMET",
    direction: "INFORMATIONS- OCH MEDIETEKNIK",
    text: "Skapa med kod, digital teknik och AI och bygg lösningar för webben.",
    symbol: "</>",
    tone: "cyan",
  },
  {
    title: "SPELEN OCH UTVECKLING",
    program: "TEKNIKPROGRAMMET",
    direction: "DESIGN OCH PRODUKTUTVECKLING",
    text: "Utveckla spel och kombinera programmering, teknik och kreativ problemlösning.",
    symbol: "[]",
    tone: "green",
  },
  {
    title: "SPEL­GRAFIK",
    program: "ESTETISKA PROGRAMMET",
    direction: "BILD OCH FORMGIVNING",
    text: "Skapa visuella världar och arbeta med 3D, grafik och digitalt skapande.",
    symbol: "✦",
    tone: "orange",
  },
  {
    title: "GRAFISK DESIGN",
    program: "ESTETISKA PROGRAMMET",
    direction: "BILD OCH FORMGIVNING",
    text: "Utveckla idéer till visuella uttryck genom digital design och bildskapande.",
    symbol: "◫",
    tone: "yellow",
  },
  {
    title: "FOTO OCH FILM",
    program: "ESTETISKA PROGRAMMET",
    direction: "ESTETIK OCH MEDIA",
    text: "Berätta med kamera, bild och film och utveckla ditt visuella berättande.",
    symbol: "REC",
    tone: "magenta",
  },
  {
    title: "E-SPORT",
    program: "ESTETISKA PROGRAMMET",
    direction: "ESTETIK OCH MEDIA",
    text: "Utforska e-sport och medieinnehåll i en kreativ och digital miljö.",
    symbol: "→",
    tone: "cyan",
  },
];

const visitItems = [
  {
    number: "01",
    title: "TRÄFFA ELEVER & LÄRARE",
    text: "Prata med personer som kan berätta om vardagen, utbildningarna och livet på LBS.",
  },
  {
    number: "02",
    title: "SE VÅRA LOKALER",
    text: "Ta en rundtur och se miljöerna där du kommer att arbeta med dina idéer.",
  },
  {
    number: "03",
    title: "UPPTÄCK PROGRAMMEN",
    text: "Få en tydligare bild av profilerna och vilket program som passar dina intressen.",
  },
  {
    number: "04",
    title: "STÄLL DINA FRÅGOR",
    text: "Fråga om gymnasievalet, behörighet, undervisningen och vad som händer efter studenten.",
  },
];

function PixelCorner({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`open-house__pixel-corner ${className}`}
    />
  );
}

function OpenHouse() {
  return (
    <div className="open-house">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@900&family=IBM+Plex+Mono:wght@500&family=Onest:wght@400;500;700&display=swap');

        .open-house {
          --black: #111111;
          --white: #ffffff;

          --dark-cyan: #002736;
          --cyan: #00ffff;

          --dark-green: #002d22;
          --green: #00e676;

          --dark-yellow: #2a250f;
          --yellow: #ffeb3b;

          --dark-orange: #3b1404;
          --orange: #ff8800;

          --dark-magenta: #330026;
          --magenta: #ff0079;

          color: var(--black);
          background: var(--white);
          font-family: "Onest", Arial, sans-serif;
          overflow: hidden;
        }

        .open-house *,
        .open-house *::before,
        .open-house *::after {
          box-sizing: border-box;
        }

        .open-house a {
          color: inherit;
          text-decoration: none;
        }

        .open-house__mono {
          font-family: "IBM Plex Mono", monospace;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .open-house__container {
          width: min(1500px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* -----------------------------------------------------------
           Header
        ----------------------------------------------------------- */

        .open-house__header {
          position: relative;
          z-index: 10;
          background: var(--dark-cyan);
          color: var(--white);
          min-height: 86px;
          display: flex;
          align-items: center;
        }

        .open-house__header-inner {
          width: min(1500px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .open-house__brand {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .open-house__brand-mark {
          width: 42px;
          height: 42px;
          border: 2px solid var(--white);
          display: grid;
          place-items: center;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 25px;
          line-height: 1;
        }

        .open-house__brand-name {
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(23px, 2vw, 31px);
          line-height: .8;
          text-transform: uppercase;
          letter-spacing: .02em;
        }

        .open-house__brand-name span {
          display: block;
          color: var(--cyan);
        }

        .open-house__header-nav {
          display: flex;
          align-items: center;
          gap: 28px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
        }

        .open-house__header-nav a {
          opacity: .86;
          transition: opacity .2s ease;
        }

        .open-house__header-nav a:hover {
          opacity: 1;
        }

        .open-house__header-cta {
          background: var(--cyan);
          color: var(--dark-cyan);
          padding: 14px 20px;
          font-weight: 700;
          white-space: nowrap;
        }

        /* -----------------------------------------------------------
           Hero
        ----------------------------------------------------------- */

        .open-house__hero {
          position: relative;
          min-height: 710px;
          background: var(--dark-cyan);
          color: var(--white);
          display: flex;
          align-items: stretch;
        }

        .open-house__hero-grid {
          width: min(1500px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(390px, .85fr);
          min-height: 710px;
        }

        .open-house__hero-copy {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 40px 110px 0;
        }

        .open-house__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--cyan);
          font-family: "IBM Plex Mono", monospace;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .1em;
          margin-bottom: 24px;
        }

        .open-house__eyebrow::before {
          content: "→";
          font-size: 18px;
        }

        .open-house__hero-title {
          max-width: 950px;
          margin: 0;
          font-family: "Big Shoulders Text", Impact, sans-serif;
          font-weight: 900;
          font-size: clamp(78px, 11vw, 170px);
          line-height: .76;
          letter-spacing: -.025em;
          text-transform: uppercase;
        }

        .open-house__hero-title .light {
          color: var(--cyan);
        }

        .open-house__hero-lead {
          max-width: 650px;
          margin: 38px 0 0;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.5;
          color: rgba(255,255,255,.9);
        }

        .open-house__hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 38px;
        }

        .open-house__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 22px;
          font-family: "IBM Plex Mono", monospace;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .open-house__button--primary {
          background: var(--cyan);
          color: var(--dark-cyan);
        }

        .open-house__button--outline {
          color: var(--white);
          border-color: rgba(255,255,255,.5);
        }

        .open-house__hero-corner {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 130px;
          height: 130px;
          background:
            linear-gradient(var(--cyan), var(--cyan)) 0 0 / 40px 40px no-repeat,
            linear-gradient(var(--cyan), var(--cyan)) 40px 40px / 40px 40px no-repeat,
            linear-gradient(var(--cyan), var(--cyan)) 80px 80px / 40px 40px no-repeat;
          opacity: .9;
        }

        .open-house__hero-event {
          position: relative;
          background: var(--cyan);
          color: var(--dark-cyan);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 42px;
          min-height: 710px;
        }

        .open-house__hero-event::before {
          content: "";
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(0,39,54,.45);
          pointer-events: none;
        }

        .open-house__event-label {
          font-family: "IBM Plex Mono", monospace;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 14px;
        }

        .open-house__event-date {
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(80px, 10vw, 145px);
          line-height: .72;
          text-transform: uppercase;
          margin: 0;
        }

        .open-house__event-time {
          margin-top: 22px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 17px;
          text-transform: uppercase;
        }

        .open-house__event-place {
          margin-top: 42px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,39,54,.5);
          font-size: 16px;
          line-height: 1.55;
        }

        .open-house__event-place strong {
          display: block;
          font-family: "Big Shoulders Text", sans-serif;
          text-transform: uppercase;
          font-size: 31px;
          line-height: .95;
          margin-bottom: 8px;
        }

        /* -----------------------------------------------------------
           Intro / visit
        ----------------------------------------------------------- */

        .open-house__intro {
          padding: 110px 0;
          background: var(--white);
        }

        .open-house__intro-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
          align-items: start;
        }

        .open-house__section-kicker {
          color: var(--dark-cyan);
          font-family: "IBM Plex Mono", monospace;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: .08em;
          margin-bottom: 20px;
        }

        .open-house__section-title {
          margin: 0;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(58px, 7vw, 105px);
          line-height: .78;
          text-transform: uppercase;
        }

        .open-house__section-title span {
          color: var(--dark-cyan);
        }

        .open-house__intro-copy {
          max-width: 720px;
          font-size: 20px;
          line-height: 1.65;
          margin: 0;
        }

        .open-house__intro-copy strong {
          font-weight: 700;
        }

        .open-house__visit-list {
          margin-top: 52px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #d6d6d6;
        }

        .open-house__visit-item {
          position: relative;
          padding: 28px 28px 28px 0;
          border-bottom: 1px solid #d6d6d6;
        }

        .open-house__visit-item:nth-child(even) {
          padding-left: 28px;
          border-left: 1px solid #d6d6d6;
        }

        .open-house__visit-number {
          color: var(--dark-cyan);
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
        }

        .open-house__visit-title {
          margin: 16px 0 10px;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 34px;
          line-height: .95;
          text-transform: uppercase;
        }

        .open-house__visit-text {
          margin: 0;
          line-height: 1.6;
          font-size: 15px;
          max-width: 420px;
        }

        /* -----------------------------------------------------------
           Campus
        ----------------------------------------------------------- */

        .open-house__campus {
          background: var(--dark-green);
          color: var(--white);
          padding: 110px 0;
        }

        .open-house__campus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .open-house__campus-title {
          margin: 0;
          color: var(--green);
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(70px, 9vw, 135px);
          line-height: .73;
          text-transform: uppercase;
        }

        .open-house__campus-copy {
          font-size: 18px;
          line-height: 1.65;
          max-width: 630px;
          margin: 34px 0 0;
        }

        .open-house__campus-note {
          margin-top: 34px;
          padding: 22px;
          border: 1px solid rgba(0,230,118,.5);
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .open-house__campus-note-symbol {
          color: var(--green);
          font-family: "IBM Plex Mono", monospace;
          font-size: 22px;
          line-height: 1;
        }

        .open-house__campus-note p {
          margin: 0;
          line-height: 1.5;
        }

        .open-house__campus-graphic {
          min-height: 500px;
          position: relative;
          background: var(--green);
          color: var(--dark-green);
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .open-house__campus-graphic::before,
        .open-house__campus-graphic::after {
          content: "";
          position: absolute;
          border: 2px solid var(--dark-green);
          transform: rotate(45deg);
        }

        .open-house__campus-graphic::before {
          width: 290px;
          height: 290px;
        }

        .open-house__campus-graphic::after {
          width: 180px;
          height: 180px;
        }

        .open-house__campus-map-label {
          position: relative;
          z-index: 2;
          padding: 18px 22px;
          background: var(--dark-green);
          color: var(--green);
          font-family: "IBM Plex Mono", monospace;
          text-transform: uppercase;
          font-size: 13px;
          text-align: center;
        }

        .open-house__campus-map-label strong {
          display: block;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 37px;
          line-height: .9;
          margin-bottom: 6px;
        }

        /* -----------------------------------------------------------
           Programs
        ----------------------------------------------------------- */

        .open-house__programs {
          padding: 110px 0 120px;
          background: var(--white);
        }

        .open-house__programs-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 40px;
          margin-bottom: 55px;
        }

        .open-house__programs-title {
          margin: 0;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(68px, 9vw, 130px);
          line-height: .73;
          text-transform: uppercase;
        }

        .open-house__programs-title span {
          color: var(--magenta);
        }

        .open-house__programs-intro {
          max-width: 460px;
          margin: 0;
          line-height: 1.6;
        }

        .open-house__program-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .open-house__program {
          position: relative;
          min-height: 315px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid transparent;
          transition: transform .2s ease;
        }

        .open-house__program:hover {
          transform: translateY(-5px);
        }

        .open-house__program--cyan {
          background: var(--cyan);
          color: var(--dark-cyan);
        }

        .open-house__program--green {
          background: var(--green);
          color: var(--dark-green);
        }

        .open-house__program--orange {
          background: var(--orange);
          color: var(--dark-orange);
        }

        .open-house__program--yellow {
          background: var(--yellow);
          color: var(--dark-yellow);
        }

        .open-house__program--magenta {
          background: var(--magenta);
          color: var(--dark-magenta);
        }

        .open-house__program-symbol {
          position: absolute;
          right: 20px;
          top: 18px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 13px;
          border: 1px solid currentColor;
          padding: 6px 8px;
        }

        .open-house__program-title {
          max-width: 85%;
          margin: 54px 0 10px;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 44px;
          line-height: .84;
          text-transform: uppercase;
        }

        .open-house__program-meta {
          font-family: "IBM Plex Mono", monospace;
          font-size: 10px;
          text-transform: uppercase;
          line-height: 1.55;
        }

        .open-house__program-text {
          margin: auto 0 0;
          padding-top: 24px;
          font-size: 14px;
          line-height: 1.5;
          max-width: 420px;
        }

        /* -----------------------------------------------------------
           Dates
        ----------------------------------------------------------- */

        .open-house__dates {
          background: var(--dark-magenta);
          color: var(--white);
          padding: 100px 0 110px;
        }

        .open-house__dates-heading {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: end;
          margin-bottom: 55px;
        }

        .open-house__dates-title {
          margin: 0;
          color: var(--magenta);
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(72px, 9vw, 135px);
          line-height: .72;
          text-transform: uppercase;
        }

        .open-house__dates-copy {
          margin: 0;
          max-width: 600px;
          font-size: 17px;
          line-height: 1.65;
        }

        .open-house__date-list {
          border-top: 1px solid rgba(255,0,121,.55);
        }

        .open-house__date {
          display: grid;
          grid-template-columns: 140px 1fr 180px;
          align-items: center;
          gap: 30px;
          min-height: 120px;
          border-bottom: 1px solid rgba(255,255,255,.2);
        }

        .open-house__date-number {
          color: var(--magenta);
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 58px;
          line-height: .8;
        }

        .open-house__date-day {
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 7px;
          opacity: .7;
        }

        .open-house__date-time {
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 38px;
          line-height: .9;
          text-transform: uppercase;
        }

        .open-house__date-year {
          text-align: right;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          opacity: .75;
        }

        /* -----------------------------------------------------------
           CTA
        ----------------------------------------------------------- */

        .open-house__cta {
          background: var(--yellow);
          color: var(--dark-yellow);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .open-house__cta-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 70px;
          align-items: center;
        }

        .open-house__cta-title {
          margin: 0;
          font-family: "Big Shoulders Text", sans-serif;
          font-size: clamp(70px, 10vw, 150px);
          line-height: .7;
          text-transform: uppercase;
        }

        .open-house__cta-title span {
          display: block;
          color: var(--dark-yellow);
          -webkit-text-stroke: 1px var(--dark-yellow);
          color: transparent;
        }

        .open-house__cta-copy {
          margin: 0 0 28px;
          font-size: 18px;
          line-height: 1.6;
        }

        .open-house__cta-button {
          background: var(--dark-yellow);
          color: var(--yellow);
        }

        .open-house__cta-decoration {
          position: absolute;
          right: -70px;
          bottom: -110px;
          width: 330px;
          height: 330px;
          background:
            linear-gradient(var(--orange), var(--orange)) 0 0 / 110px 110px no-repeat,
            linear-gradient(var(--orange), var(--orange)) 110px 110px / 110px 110px no-repeat,
            linear-gradient(var(--orange), var(--orange)) 220px 220px / 110px 110px no-repeat;
          opacity: .8;
        }

        /* -----------------------------------------------------------
           Footer
        ----------------------------------------------------------- */

        .open-house__footer {
          background: var(--black);
          color: var(--white);
          padding: 60px 0;
        }

        .open-house__footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 50px;
        }

        .open-house__footer-brand {
          font-family: "Big Shoulders Text", sans-serif;
          font-size: 43px;
          line-height: .8;
          text-transform: uppercase;
        }

        .open-house__footer-brand span {
          display: block;
          color: var(--magenta);
        }

        .open-house__footer-label {
          color: #999;
          font-family: "IBM Plex Mono", monospace;
          font-size: 10px;
          text-transform: uppercase;
          margin-bottom: 13px;
        }

        .open-house__footer-text {
          margin: 0;
          line-height: 1.6;
          font-size: 14px;
        }

        .open-house__footer-link {
          display: inline-block;
          margin-top: 5px;
          border-bottom: 1px solid rgba(255,255,255,.45);
        }

        .open-house__pixel-corner {
          position: absolute;
          width: 80px;
          height: 80px;
          background:
            linear-gradient(currentColor, currentColor) 0 0 / 26px 26px no-repeat,
            linear-gradient(currentColor, currentColor) 26px 26px / 26px 26px no-repeat,
            linear-gradient(currentColor, currentColor) 52px 52px / 26px 26px no-repeat;
          pointer-events: none;
        }

        /* -----------------------------------------------------------
           Responsive
        ----------------------------------------------------------- */

        @media (max-width: 1100px) {
          .open-house__hero-grid {
            grid-template-columns: 1fr;
          }

          .open-house__hero {
            min-height: auto;
          }

          .open-house__hero-copy,
          .open-house__hero-event {
            min-height: 600px;
          }

          .open-house__hero-copy {
            padding-right: 0;
          }

          .open-house__program-grid {
            grid-template-columns: 1fr 1fr;
          }

          .open-house__campus-grid,
          .open-house__cta-inner {
            grid-template-columns: 1fr;
          }

          .open-house__campus-graphic {
            min-height: 390px;
          }
        }

        @media (max-width: 800px) {
          .open-house__container,
          .open-house__header-inner,
          .open-house__hero-grid {
            width: min(100% - 32px, 1500px);
          }

          .open-house__header {
            min-height: 72px;
          }

          .open-house__header-nav {
            display: none;
          }

          .open-house__header-cta {
            padding: 11px 14px;
            font-size: 10px;
          }

          .open-house__hero-copy {
            min-height: 570px;
            padding: 75px 0 90px;
          }

          .open-house__hero-title {
            font-size: clamp(70px, 18vw, 125px);
          }

          .open-house__hero-event {
            min-height: 470px;
            padding: 30px;
          }

          .open-house__event-date {
            font-size: clamp(80px, 23vw, 130px);
          }

          .open-house__intro,
          .open-house__campus,
          .open-house__programs,
          .open-house__dates,
          .open-house__cta {
            padding: 75px 0;
          }

          .open-house__intro-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .open-house__visit-list {
            grid-template-columns: 1fr;
          }

          .open-house__visit-item,
          .open-house__visit-item:nth-child(even) {
            padding-left: 0;
            border-left: 0;
          }

          .open-house__programs-heading,
          .open-house__dates-heading {
            grid-template-columns: 1fr;
            display: grid;
            gap: 28px;
          }

          .open-house__programs-heading {
            align-items: start;
          }

          .open-house__program-grid {
            grid-template-columns: 1fr;
          }

          .open-house__date {
            grid-template-columns: 80px 1fr;
            gap: 18px;
            min-height: 105px;
          }

          .open-house__date-year {
            display: none;
          }

          .open-house__date-number {
            font-size: 43px;
          }

          .open-house__date-time {
            font-size: 30px;
          }

          .open-house__footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        @media (max-width: 480px) {
          .open-house__brand-name {
            font-size: 20px;
          }

          .open-house__brand-mark {
            width: 35px;
            height: 35px;
            font-size: 21px;
          }

          .open-house__header-cta {
            display: none;
          }

          .open-house__hero-title {
            font-size: 72px;
          }

          .open-house__hero-lead {
            font-size: 17px;
          }

          .open-house__hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .open-house__button {
            width: 100%;
          }

          .open-house__event-place strong {
            font-size: 28px;
          }

          .open-house__section-title,
          .open-house__programs-title,
          .open-house__dates-title,
          .open-house__cta-title {
            font-size: 67px;
          }

          .open-house__campus-title {
            font-size: 72px;
          }

          .open-house__program {
            min-height: 290px;
          }
        }
      `}</style>

      <header className="open-house__header">
        <div className="open-house__header-inner">
          <a href="/" className="open-house__brand" aria-label="LBS Kreativa Gymnasiet">
            <span className="open-house__brand-mark">LBS</span>
            <span className="open-house__brand-name">
              LBS
              <span>KREATIVA GYMNASIET</span>
            </span>
          </a>

          <nav className="open-house__header-nav" aria-label="Huvudnavigation">
            <a href="#besok">Besöket</a>
            <a href="#program">Program</a>
            <a href="#datum">Datum</a>
            <a href="#campus">Campus</a>
          </nav>

          <a className="open-house__header-cta" href="#datum">
            Boka öppet hus →
          </a>
        </div>
      </header>

      <main>
        <section className="open-house__hero" aria-labelledby="open-house-title">
          <div className="open-house__hero-grid">
            <div className="open-house__hero-copy">
              <div className="open-house__eyebrow">LBS MALMÖ / ÖPPET HUS</div>

              <h1 id="open-house-title" className="open-house__hero-title">
                KOM IN.
                <br />
                <span className="light">SKAPA.</span>
                <br />
                FRAMÅT.
              </h1>

              <p className="open-house__hero-lead">
                Kom och upplev LBS Kreativa Gymnasiet Malmö. Träffa elever och
                lärare, se våra lokaler och upptäck utbildningarna inom teknik,
                spel, design, foto och media.
              </p>

              <div className="open-house__hero-actions">
                <a className="open-house__button open-house__button--primary" href="#datum">
                  Se kommande datum →
                </a>
                <a className="open-house__button open-house__button--outline" href="#program">
                  Utforska programmen
                </a>
              </div>

              <span className="open-house__hero-corner" aria-hidden="true" />
            </div>

            <aside className="open-house__hero-event" aria-label="Nästa öppna hus">
              <div className="open-house__event-label">NÄSTA ÖPPNA HUS</div>
              <p className="open-house__event-date">
                11
                <br />
                NOV
              </p>
              <div className="open-house__event-time">17:00 → 19:00 / 2026</div>

              <div className="open-house__event-place">
                <strong>LBS MALMÖ</strong>
                Tuborgsgatan 2
                <br />
                Malmö Kreativa Campus
              </div>
            </aside>
          </div>
        </section>

        <section id="besok" className="open-house__intro">
          <div className="open-house__container open-house__intro-grid">
            <div>
              <div className="open-house__section-kicker">[ BESÖK OSS ]</div>
              <h2 className="open-house__section-title">
                MER ÄN
                <br />
                <span>EN VISNING.</span>
              </h2>
            </div>

            <div>
              <p className="open-house__intro-copy">
                Ett öppet hus är ett tillfälle att känna efter om LBS Malmö är
                rätt för dig. <strong>Prata med elever och lärare</strong>,
                se skolans lokaler och få svar på dina frågor om utbildningen
                och gymnasievalet.
              </p>

              <div className="open-house__visit-list">
                {visitItems.map((item) => (
                  <article className="open-house__visit-item" key={item.number}>
                    <div className="open-house__visit-number">{item.number}</div>
                    <h3 className="open-house__visit-title">{item.title}</h3>
                    <p className="open-house__visit-text">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="campus" className="open-house__campus">
          <div className="open-house__container open-house__campus-grid">
            <div>
              <div className="open-house__section-kicker" style={{ color: "var(--green)" }}>
                [ NYTT CAMPUS ]
              </div>

              <h2 className="open-house__campus-title">
                MALMÖ
                <br />
                KREATIVA
                <br />
                CAMPUS
              </h2>

              <p className="open-house__campus-copy">
                LBS Malmö finns på Malmö Kreativa Campus på Tuborgsgatan 2 i
                centrala Malmö. Här har LBS egna lokaler som är anpassade efter
                skolans utbildningar och kreativa arbetssätt.
              </p>

              <div className="open-house__campus-note">
                <div className="open-house__campus-note-symbol">↘</div>
                <p>
                  På campuset delar LBS gemensamma ytor med Designgymnasiet och
                  Rytmus Musikgymnasium.
                </p>
              </div>
            </div>

            <div className="open-house__campus-graphic" aria-hidden="true">
              <div className="open-house__campus-map-label">
                <strong>TUBORGSGATAN 2</strong>
                CENTRALA MALMÖ
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="open-house__programs">
          <div className="open-house__container">
            <div className="open-house__programs-heading">
              <h2 className="open-house__programs-title">
                HITTA
                <br />
                <span>DITT</span>
                <br />
                SPÅR.
              </h2>

              <p className="open-house__programs-intro">
                Alla LBS Malmös utbildningar är högskoleförberedande. På öppet
                hus kan du prata med oss om skillnaderna mellan program,
                inriktningar och profiler.
              </p>
            </div>

            <div className="open-house__program-grid">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className={`open-house__program open-house__program--${program.tone}`}
                >
                  <span className="open-house__program-symbol">
                    {program.symbol}
                  </span>

                  <h3 className="open-house__program-title">
                    {program.title}
                  </h3>

                  <div className="open-house__program-meta">
                    {program.program}
                    <br />
                    {program.direction}
                  </div>

                  <p className="open-house__program-text">{program.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="datum" className="open-house__dates">
          <div className="open-house__container">
            <div className="open-house__dates-heading">
              <h2 className="open-house__dates-title">
                NÄR
                <br />
                SES VI?
              </h2>

              <p className="open-house__dates-copy">
                Välj ett av våra kommande öppna hus och kom förbi LBS Malmö.
                Du får möjlighet att lära känna skolan, programmen och
                människorna som går här.
              </p>
            </div>

            <div className="open-house__date-list">
              {openHouseDates.map((event) => (
                <a
                  href="https://lbs.se/malmo/oppet-hus/"
                  target="_blank"
                  rel="noreferrer"
                  className="open-house__date"
                  key={`${event.date}-${event.year}`}
                  aria-label={`Öppet hus ${event.date} ${event.year}, ${event.time}`}
                >
                  <div className="open-house__date-number">{event.date}</div>

                  <div>
                    <div className="open-house__date-day">{event.weekday}</div>
                    <div className="open-house__date-time">{event.time}</div>
                  </div>

                  <div className="open-house__date-year">{event.year} →</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="open-house__cta">
          <div className="open-house__container open-house__cta-inner">
            <h2 className="open-house__cta-title">
              KANSKE
              <br />
              <span>NU?</span>
              KANSKE
              <br />
              DU?
            </h2>

            <div>
              <p className="open-house__cta-copy">
                Vill du få en känsla för LBS Malmö innan du bestämmer dig?
                Kom på öppet hus – eller boka en personlig visning om du vill
                se skolan vid ett annat tillfälle.
              </p>

              <a
                className="open-house__button open-house__cta-button"
                href="https://lbs.se/malmo/oppet-hus/"
                target="_blank"
                rel="noreferrer"
              >
                Anmäl dig till öppet hus →
              </a>
            </div>
          </div>

          <div className="open-house__cta-decoration" aria-hidden="true" />
        </section>
      </main>

      <footer className="open-house__footer">
        <div className="open-house__container open-house__footer-grid">
          <div>
            <div className="open-house__footer-brand">
              LBS
              <span>KREATIVA GYMNASIET</span>
            </div>
          </div>

          <div>
            <div className="open-house__footer-label">Besöksadress</div>
            <p className="open-house__footer-text">
              Tuborgsgatan 2
              <br />
              Malmö Kreativa Campus
              <br />
              Malmö
            </p>
          </div>

          <div>
            <div className="open-house__footer-label">Kontakt</div>
            <p className="open-house__footer-text">
              040 98 82 80
              <br />
              <a className="open-house__footer-link" href="mailto:malmo@lbs.se">
                malmo@lbs.se
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OpenHouse;
