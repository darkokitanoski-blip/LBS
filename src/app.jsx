import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Programs from "./components/Programs.jsx";
import CreativeGallery from "./components/CreativeGallery.jsx";
import SectionTransition from "./components/SectionTransition.jsx";
import News from "./components/News.jsx";
import Schools from "./components/Schools.jsx";
import Footer from "./components/Footer.jsx";

// här är app.jsx eller filen där alla komponenter implenteras för att bygga huvud sidan
export default function App() {
  return (
    <div className="site">

      <Header />
      <main>
        <Hero />
        <Intro />
        <SectionTransition variant="green" />
        <Programs />
        <CreativeGallery />

        <News />
        <Schools />
        <SectionTransition variant="magenta" />
      </main>
      <Footer />
    </div>
  );
}
