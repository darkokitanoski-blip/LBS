import ArrowIcon from "./ArrowIcon.jsx";
import { useEffect, useState } from "react";

const sections = [
  { id: "open-house", label: "START" },
  { id: "about", label: "OM LBS" },
  { id: "programs", label: "PROGRAM" },
  { id: "news", label: "NYHETER" },
  { id: "schools", label: "SKOLOR" },
  { id: "contact", label: "KONTAKT" },
];

export default function ScrollNavigator() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = 0;
      const marker = window.scrollY + window.innerHeight * 0.32;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= marker) current = index;
      });

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const jumpTo = (id, index) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(index);
  };

  return (
    <aside className="scroll-navigator" aria-label="Sidnavigation">
      <div className="scroll-navigator-top"><strong>{String(active + 1).padStart(2, "0")}</strong></div>

      <div className="scroll-rail">
        <div className="scroll-rail-fill" style={{ height: `${progress}%` }} />
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`scroll-dot ${active === index ? "is-active" : ""}`}
            style={{ top: `${(index / (sections.length - 1)) * 100}%`, left: "30%" }}
            onClick={() => jumpTo(section.id, index)}
            aria-label={`Gå till ${section.label.toLowerCase()}`}
            aria-current={active === index ? "location" : undefined}
          >
            <span className="scroll-dot-mark" />
            <span className="scroll-dot-label">{section.label}</span>
          </button>
        ))}
      </div>

      <div className="scroll-navigator-bottom"><ArrowIcon direction="down" size="sm" className="scroll-navigator-arrow" /></div>
    </aside>
  );
}
