import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";

// komponent där jag skapar Header för sidan, och jag implementerar ikon-komponenten och använder useState från React-biblioteket; 
// här okcså gör jag animationen för header när man scrollar.

const navItems = [
  ["Våra skolor", "#schools"],
  ["Om oss", "#about"],
  ["Kontakta oss", "#contact"],
  ["Våra program", "#programs"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [Transparent, setTransparent] = useState("transparent")
  const [scrollDirection, setScrollDirection] = useState("up");
  const [Width, setWidth] = useState("min(100% - 48px, var(--max))")
  const [Padding, setPadding] = useState("0% 0%")

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setTransparent("var(--dark-cyan)")
      setWidth("101%")
      setPadding("0% 10%")
      if (currentScrollY === 0) {
        setScrollDirection("up");
        previousScrollY = currentScrollY;
        setTransparent("transparent")
        setWidth("min(100% - 48px, var(--max))")
        setPadding("0% 0%")
        return;
      }

      setScrollDirection(currentScrollY > previousScrollY ? "down" : "up");
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="header"
      style={{ top: scrollDirection === "down" ? "-10%" : "0%", backgroundColor: Transparent, width: Width, padding: Padding }}
    >
      <a className="brand" href="#" aria-label="LBS Kreativa Gymnasiet">
        <span className="brand-box">
          <img src="/lbslogosvg.svg" alt="LBS" />
        </span>

      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Öppna meny"
        aria-expanded={open}
      >
        <span>[</span><span>MENY</span><span>]</span>
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#open-house" onClick={() => setOpen(false)}>
          ÖPPET HUS <ArrowIcon size="sm" />
        </a>
      </nav>
    </header>
  );
}