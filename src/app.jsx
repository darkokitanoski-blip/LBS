import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Programs from "./components/Programs.jsx";
import CreativeGallery from "./components/CreativeGallery.jsx";
import SectionTransition from "./components/SectionTransition.jsx";
import News from "./components/News.jsx";
import Schools from "./components/Schools.jsx";
import Footer from "./components/Footer.jsx";
import ScrollNavigator from "./components/ScrollNavigator.jsx";

export default function App() {
  console.log("kom in aldrig här ☢️☢️☢️☢️⛔📵❌📛💔🏳️‍⚧️🏳️‍🌈🚧💉🧪🦠🦠🦠🦠")
  return (
    <div className="site">
      <ScrollNavigator />
      <Header />
      <main>
        <Hero />
        <Intro />
        <SectionTransition variant="green" />
        <Programs />
        <CreativeGallery />
        <SectionTransition variant="cyan" />
        <News />
        <Schools />
        <SectionTransition variant="magenta" />
      </main>
      <Footer />
    </div>
  );
}
