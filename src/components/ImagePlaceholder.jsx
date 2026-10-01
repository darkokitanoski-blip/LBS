  // komponent där jag skapar Bild - MockUp 

export default function ImagePlaceholder({ label = "[ IMAGE ]", className = "", src = "", alt = "", href = "" }) {
  return (
    <div className={`image-placeholder ${className}`}>
      {src ? (
        href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} />
          </a>
        ) : (
          <img src={src} alt={alt} />
        )
      ) : (
        <div className="image-placeholder-inner"><span>{label}</span></div>
      )}
      <span className="image-corner image-corner-tl">↖</span>
      <span className="image-corner image-corner-br">↘</span>
    </div>
  );
}
