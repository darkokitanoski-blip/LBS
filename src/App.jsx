import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Programs from "./components/Programs.jsx";
import CreativeGallery from "./components/CreativeGallery.jsx";
import SectionTransition from "./components/SectionTransition.jsx";
import News from "./components/News.jsx";
import Schools from "./components/Schools.jsx";
import Footer from "./components/Footer.jsx";
import OpenHouseInteractive from "./components/OpenHouseInteractive.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// här är app.jsx eller filen där alla komponenter implenteras för att bygga huvud sidan
export default function App() {



  useEffect(() => {
    const urlget = window.location.href
    if (urlget === "https://lbs-wine-rho.vercel.app/" || urlget ===  "http://localhost:5173/") {
      return;
    } else {
      window.location.href = urlget
    }
  }, [])


  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Intro />
        <SectionTransition variant="green" />
        <Programs />
        <OpenHouseInteractive></OpenHouseInteractive>
        <CreativeGallery />
        <News />
        <Schools />
        <SectionTransition variant="magenta" />
      </main>
      <Footer />
    </div>
  );
}
