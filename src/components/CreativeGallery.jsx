import ImagePlaceholder from "./ImagePlaceholder.jsx";

  // komponent där jag skapa en sektion för krativitets visande, och jag implementera ImagePlaceholder som komponent
const images = [
  { label: "[ GAME / 01 ]", src: "Screenshot 2026-10-01 212434.png", href: "https://bokbank.store/omoss"},
  { label: "[ DESIGN / 02 ]", src: "d6345-7689-graphic-design-1280X720.webp"},
  { label: "[ MEDIA / 03 ]", src: "IMG_2349-1024x768.jpeg" },
];

export default function CreativeGallery() {
  return (
    <section className="gallery section">
      <div className="gallery-heading">
        <p className="mono-label dark">[ ELEVERS SKAPANDE ]</p>
        <h2>SKAPA.<span>TESTA.</span>UTVECKLA.</h2>
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <ImagePlaceholder key={image.label} href={image.href} src={image.src} label={image.label} className={`gallery-image gallery-${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
