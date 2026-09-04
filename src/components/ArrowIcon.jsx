export default function ArrowIcon({ direction = "right", size = "md", className = "" }) {
  const transforms = {
    right: "",
    upRight: "rotate(-45 12 12)",
    down: "rotate(90 12 12)",
  };

  return (
    <svg
      className={`arrow-icon arrow-icon-${size} ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <g transform={transforms[direction]}>
        <path d="M3 12h17" />
        <path d="M13 5l7 7-7 7" />
      </g>
    </svg>
  );
}
