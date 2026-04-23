# WZ Browser Explorer

Browser-only MapleStory `.wz` inspector that runs fully on static hosting.

## Features

- Client-side only: users load local `.wz` files in the browser.
- No backend: works on GitHub Pages, Netlify, Cloudflare Pages.
- Lazy parsing: opens one `.wz` at a time and parses selected `.img` on click.
- Visual inspection: property tree + canvas preview.

## Local Development

```bash
npm install
npm run dev
```

Default dev URL: `http://localhost:4173`.

## Production Build

```bash
npm run build
npm run preview
```

Build output is in `dist/`.

## Deploy to GitHub Pages

1. Create a repo (recommended name: `wz-browser-explorer`).
2. Push this folder as its own repository.
3. Run:

```bash
npm install
npm run build
```

4. Publish `dist/` with your preferred Pages flow (GitHub Actions or `gh-pages` branch).

Expected site URL format:
`https://<username>.github.io/wz-browser-explorer/`

## Security + Privacy

- Files stay local to the browser session.
- No upload or server-side processing is required.

## License

MIT (same as parent project unless you override it here).
