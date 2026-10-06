import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";



// komponent där jag skapar Header för sidan, och jag implementerar ikon-komponenten och använder useState från React-biblioteket; 
// här okcså gör jag animationen för header när man scrollar.

const navItems = [
  ["Om oss", "#about"],
  ["Våra program", "#programs"],
  ["Anmäl dig", "#form"],
  ["Kontakta oss", "#contact"]
];

export default function Header({ onNavigate, activeSection }) {
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

    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header `}
      style={{
        top: scrollDirection === "down" ? "-50%" : "0%",
        backgroundColor: `${activeSection === "openhouse" ? "var(--dark-cyan)" : Transparent}`,
        width: `${activeSection === "openhouse" ? "100%" : Width}`,
        padding: `${activeSection === "openhouse" ? "0 10%" : Padding}`
      }}
    >
      <a
        className="brand"
        href="/"
        id="brand"
        aria-label="LBS Kreativa Gymnasiet"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("brand");
        }}
      >
        <span className="brand-box">
          <img src="/lbslogosvg.svg" alt="LBS" />
        </span>

      </a>


      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        aria-expanded={open}
      >
        <span>[</span>

        <span className={`menu-icon ${open ? "menu-icon-open" : ""}`}>
          {open ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </span>

        <span>]</span>
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        {navItems.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className={activeSection === href.slice(1) ? "is-active" : undefined}
            aria-current={activeSection === href.slice(1) ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              onNavigate(href.slice(1));
            }}
          >
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#openhouse"
          aria-current={activeSection === "openhouse" ? "page" : undefined}
          data-active={activeSection === "openhouse" || undefined}
          onClick={(event) => {
            event.preventDefault();
            setOpen(false);
            onNavigate("openhouse");
          }}
        >
          SKOL KARTA <ArrowIcon size="sm" />
        </a>
      </nav>
    </header>
  );
}