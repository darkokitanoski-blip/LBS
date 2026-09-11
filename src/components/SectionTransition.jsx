import ArrowIcon from "./ArrowIcon.jsx";
const messages = [
  "SKAPA.",
  "TESTA.",
  "UTVECKLA.",
  "LBS KREATIVA GYMNASIET",
];


  // komponent där jag skapar Carousel animation för all de delarna som behöer det i sidan, och jag implementa ikon komonent
export default function SectionTransition({ variant = "green" }) {
  return (
    <section className={`section-transition transition-${variant}`} aria-hidden="true">
      <div className="transition-marquee">
        <div className="transition-track">
          {[...messages, ...messages, ].map((message, index) => (
            <span key={`${message}-${index}`}>
              {message} <b><ArrowIcon size="md" /></b>
            </span>
          ))}
        </div>
      </div>

      <div className="transition-pixels">
        <i />
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}
