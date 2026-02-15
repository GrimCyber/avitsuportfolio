# Avitsu Portfolio Website (GitHub Pages Ready)

Static, responsive portfolio for showcasing Minecraft and Hytale worldbuilding projects (environments, props, characters, animals).

## Folder Structure

```text
.
├── index.html
├── portfolio.html
├── about.html
├── contact.html
├── data/
│   └── portfolio.json
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── particles.js
│   │   └── portfolio.js
│   ├── images/
│   ├── gifs/
│   ├── videos/
│   └── thumbnails/
└── README.md
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` and `/ (root)`
4. Save and wait for deployment.
5. Your site will be live at your GitHub Pages URL.

No build step is required.

## Add New Portfolio Projects

1. Drop media files into:
   - `assets/images/`
   - `assets/gifs/`
   - `assets/videos/`
   - `assets/thumbnails/` (optional dedicated thumbs)
2. Open `data/portfolio.json`.
3. Add a new object with this structure:

```json
{
  "id": 11,
  "title": "Project Title",
  "category": "Environments",
  "type": "image",
  "thumbnail": "./assets/thumbnails/project-thumb.png",
  "full": "./assets/images/project-full.png",
  "description": "Short project summary.",
  "tags": ["minecraft", "hytale", "environment"]
}
```

### Field Notes

- `category` must be one of: `Environments`, `Props`, `Characters`, `Animals`
- `type` can be `image` or `video`
- Use relative paths only (`./assets/...`) for GitHub Pages compatibility

## Edit Text Content

- Homepage intro: `index.html`
- About content: `about.html`
- Contact links/email: `contact.html`
- Project descriptions/tags: `data/portfolio.json`

## Accessibility + Performance Included

- Semantic HTML5
- Responsive/mobile-first layout
- Lazy loading for portfolio thumbnails
- Keyboard closable modal (Esc)
- ARIA labels and alt text support
- Lightweight vanilla JavaScript (no framework)
