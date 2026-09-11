  // komponent där jag skapar Bild - MockUp 

export default function ImagePlaceholder({ label = "[ IMAGE ]", className = "", src = "", alt = "" }) {
  return (
    <div className={`image-placeholder ${className}`}>
      {src ? <img src={src} alt={alt} /> : <div className="image-placeholder-inner"><span>{label}</span></div>}
      <span className="image-corner image-corner-tl">↖</span>
      <span className="image-corner image-corner-br">↘</span>
    </div>
  );
}
