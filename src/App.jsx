import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Programs from "./components/Programs.jsx";
import CreativeGallery from "./components/CreativeGallery.jsx";
import SectionTransition from "./components/SectionTransition.jsx";
import News from "./components/News.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import OpenHouseInteractive from "./components/OpenHouseInteractive.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// här är app.jsx eller filen där alla komponenter implenteras för att bygga huvud sidan
const sectionComponents = {
  about: Intro,
  programs: Programs,
  form: Form,
  contact: Footer,
  openhouse: OpenHouseInteractive
};

export default function App() {
  const [activeSection, setActiveSection] = useState("brand");
  const [navigationVersion, setNavigationVersion] = useState(0);



  useEffect(() => {
    const urlget = window.location.href
    if (urlget === "https://lbs-wine-rho.vercel.app/" || urlget === "http://localhost:5173/") {
      return;
    } else {
      window.location.href = urlget
    }
  }, [])

  const SelectedSection = sectionComponents[activeSection];
  const isSingleSectionView = Boolean(SelectedSection);
  const handleNavigate = (section) => {
    setActiveSection(section);
    setNavigationVersion((version) => version + 1);
  };
  const loadingClass = navigationVersion === 0
    ? ""
    : navigationVersion % 2 === 0
      ? "section-loading-b"
      : "section-loading-a";

  console.log("Active Section:", activeSection);

  return (
    <div className="site">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <main className={`${loadingClass} ${isSingleSectionView ? "single-section-view" : ""}`}>
        {SelectedSection ? (
          <SelectedSection />
        ) : (
          <>
            <Hero onNavigate={handleNavigate} />
            {/* {/* <Intro />
            <SectionTransition variant="green" />
            <Programs />
            <OpenHouseInteractive />
            <CreativeGallery />
            <SectionTransition variant="yellow" />
            <Form />
            <News /> */}

          </>
        )}
        {activeSection === "about" ? <News></News> : null}
        <SectionTransition variant={activeSection === "brand" ? "magenta" : activeSection === "contact" ? "black" : activeSection === "openhouse" ? "magenta" : activeSection === "form" ? "yellow" : activeSection === "programs" ? "green" : activeSection === "about" ? "green" : undefined} /> 
      </main>

      {activeSection !== "contact" && activeSection !== "brand" && activeSection !== "openhouse" && activeSection !== "form" && activeSection !== "programs" && activeSection !== "about" ? <Footer /> : null}
    </div>
  );
}
