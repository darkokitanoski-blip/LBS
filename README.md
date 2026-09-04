# LBS Kreativa Gymnasiet – Enhanced React implementation

Vite + React implementation based on the supplied LBS Grafisk manual.

## Run

```bash
npm install
npm run dev
```

## Included

- `src/app.jsx` – main page composition
- Big Shoulders Text, Onest and IBM Plex Mono
- LBS color system and monochromatic pair approach
- Pixel-block inspired layouts
- Text blocks and keyboard-symbol details
- Animated Open House carousel
- Reusable `ImagePlaceholder` component
- Dedicated creative image gallery boilerplate
- Rich hover/micro-interactions
- Responsive navigation and layouts
- Swedish-character-friendly typography and line-height

## Add real images

Put images in `public/images/` and use:

```jsx
<ImagePlaceholder
  src="/images/elevprojekt.jpg"
  alt="Elever som arbetar med ett projekt"
/>
```


### Design notes
The page transitions intentionally create larger breathing spaces between major sections, with continuously moving LBS-style typography and subtle floating pixel details. Large Swedish headings use extra line-height and top/bottom breathing room so Å, Ä and Ö are not visually cramped or clipped.
