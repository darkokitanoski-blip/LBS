import ArrowIcon from "./ArrowIcon.jsx";
import ImagePlaceholder from "./ImagePlaceholder.jsx";


  // komponent där jag Header för sidan, och jag implementa ikon komponent och ImagePlaceholder komponent
export default function Intro() {
  return (
    <section className="intro section" id="about">
      <div className="intro-visual pixel-frame"><ImagePlaceholder label="[ LBS / CREATIVE ]" className="intro-image" /></div>
      <div className="intro-copy">
        <p className="mono-label dark">[ LBS KREATIVA GYMNASIET ]</p>
        <h2><span className="text-block dark-block">SKAPA</span>{" "}<span className="text-block outline-block">FRAMTIDEN</span></h2>
        <p className="lead">LBS Kreativa Gymnasiet utbildar dig för att lyckas i dagens kreativa branscher. Här finns gymnasieutbildningar för dig som är intresserad av digitalt skapande och som vill ha högskolebehörighet efter gymnasiet.</p>
        <a className="button button-dark" href="#schools">LÄS MER <ArrowIcon size="sm" /></a>
      </div>
    </section>
  );
}
