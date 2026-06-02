# Next.js Boilerplate

It includes the same architectural patterns for **Tailwind CSS v4**, **Mapbox GL**, and **Intlayer i18n** (Indonesian default + English).

## Features

- **Next.js 16** App Router with React 19
- **Tailwind CSS v4** — CSS-first config with custom `@utility` classes
- **SCSS hybrid styling** — component styles in `public/styles/`
- **Intlayer + next-intlayer** — colocated `.content.js` files, `id` (default) + `en` locales
- **Locale routing** — `/about` (id) vs `/en/about` (en) via custom middleware
- **Mapbox GL** — reusable `MapProvider`, context, zoom & basemap controls
- **Global `$utils`** — locale helpers available in SSR and client

## Quick Start

```bash
cp .env.example .env.local
# Add your Mapbox token to NEXT_PUBLIC_MAPBOX_TOKEN

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Folder Structure

```
nextjs-boilerplate/
├── middleware.js              # Locale URL rewrite (id = no prefix)
├── intlayer.config.mjs        # i18n locales config
├── next.config.mjs            # withIntlayer() wrapper
├── public/
│   ├── assets/                # Static assets
│   └── styles/
│       ├── globals.scss       # SCSS entry point
│       ├── components/        # Feature SCSS (map, header, etc.)
│       └── tailwind-customs/  # Custom @utility classes
└── src/
    ├── app/
    │   ├── globals.css        # Tailwind v4 @theme tokens
    │   ├── [locale]/          # All localized routes
    │   │   ├── layout.jsx     # Root HTML shell + providers
    │   │   ├── page.jsx       # Homepage
    │   │   └── map/           # Mapbox demo route
    │   ├── components/        # UI components
    │   ├── hooks/             # useLocalizedHref, useLocaleSwitcherItems
    │   ├── providers/         # IntlayerProvider
    │   └── utils/             # helpers.js, globals.js ($utils)
    ├── context/               # MapContext
    ├── lib/mapbox/            # MapProvider
    ├── data/                  # Static JSON (map styles)
    └── proxy.js               # Intlayer proxy for Next.js 16
```

## Multilingual (Intlayer)

### Content files

Create colocated content dictionaries:

```js
// src/app/components/Header/header.content.js
import { t } from "intlayer";

export default {
  key: "header-content",
  content: {
    home: t({ en: "Home", id: "Beranda" }),
  },
};
```

### Usage in components

```jsx
"use client";
import { useIntlayer } from "next-intlayer";

const content = useIntlayer("header-content");
return <span>{content.home.value}</span>;
```

### URL convention

| Locale | URL pattern | Example |
|--------|-------------|---------|
| Indonesian (default) | No prefix | `/map` |
| English | `/en` prefix | `/en/map` |

### Locale-aware links

```jsx
import { useLocalizedHref } from "@/app/hooks/useLocalizedHref";

const getHref = useLocalizedHref();
<Link href={getHref("/map")}>Map</Link>
```

## Tailwind CSS v4

- Design tokens in `src/app/globals.css` under `@theme`
- Custom utilities in `public/styles/tailwind-customs/` using `@utility` syntax
- SCSS components loaded via `public/styles/globals.scss`
- `cn()` helper at `src/lib/utils.js` (clsx + tailwind-merge)

## Mapbox

### Setup

1. Get a token from [Mapbox](https://account.mapbox.com/)
2. Set `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local`

### Map route

The demo map lives at `/map` (or `/en/map`).

- `src/lib/mapbox/provider.js` — initializes Mapbox, manages style switching
- `src/context/map-context.jsx` — `useMap()` hook
- `src/data/styles.json` — basemap style URLs

### Extending

To add WMS layers or API-driven data (like the full YKAN MRV map), extend `MapProvider` with fetch logic and add layer utilities in `src/lib/mapbox/utils.js`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | For map | Mapbox access token |
| `NEXT_PUBLIC_API_URL` | Optional | Backend API base URL |
| `NEXT_PUBLIC_GEOSERVER_*` | Optional | GeoServer WMS credentials |

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Derived From

This boilerplate mirrors patterns from the YKAN/KHG Explorer project:

- Tailwind v4 + SCSS hybrid styling
- Intlayer for UI strings + CMS field suffixes for dynamic content
- Custom middleware for clean default-locale URLs
- Mapbox scoped to dedicated map routes
