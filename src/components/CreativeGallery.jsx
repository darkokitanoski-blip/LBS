import ImagePlaceholder from "./ImagePlaceholder.jsx";

  // komponent där jag skapa en sektion för krativitets visande, och jag implementera ImagePlaceholder som komponent
const images = [
  { label: "[ GAME / 01 ]" },
  { label: "[ DESIGN / 02 ]" },
  { label: "[ MEDIA / 03 ]" },
  { label: "[ DEVELOPMENT / 04 ]" }
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
          <ImagePlaceholder key={image.label} label={image.label} className={`gallery-image gallery-${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
