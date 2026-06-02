# Naming Standards

> **Catalyze Frontend Standardization** — naming conventions for the Next.js boilerplate.  
> Agents and contributors must follow these rules when adding or modifying code in this project.

---

## Quick Reference

| Category | Convention | Example |
|----------|------------|---------|
| Variables | camelCase | `userName`, `totalPrice` |
| Booleans | prefix `is`, `has`, `can`, `should` | `isLoading`, `hasPermission` |
| Functions | verb + noun (camelCase) | `fetchUsers()`, `handleSubmit()` |
| React components | PascalCase | `UserCard`, `MapLayerControl` |
| Component files | PascalCase folder + `index.jsx` | `UserCard/index.jsx` |
| Utility files | kebab-case | `format-date.js`, `api-client.js` |
| Page / route folders | kebab-case | `user-management/`, `map/` |
| Folders | lowercase kebab-case | `map-controls/`, `auth-services/` |
| SCSS classes | BEM (block__element--modifier) | `.user-card__title`, `.user-card--featured` |
| Tailwind utilities | kebab-case in `@utility` | `.btn-primary` |
| Event handlers | `handle` + action | `handleClick`, `handleSubmit` |
| React state | `[value, setValue]` pairs | `[isLoading, setIsLoading]` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_UPLOAD_SIZE`, `DEFAULT_MAP_ZOOM` |
| Intlayer content | kebab-case key + `.content.js` | `header-content`, `header.content.js` |
| Hooks | `use` + PascalCase | `useLocalizedHref`, `useMap` |
| Context | PascalCase + `Context` | `MapContext`, `useMap()` |
| Env variables | SCREAMING_SNAKE_CASE + prefix | `NEXT_PUBLIC_MAPBOX_TOKEN` |

---

## 1. Variables

Use **camelCase**. Names must describe purpose — never use single letters or vague names.

```js
// Good
const userName = "Fahmi";
const totalPrice = 100;
const isLoggedIn = true;

// Bad
const x = "Fahmi";
const data = 100;
const flag = true;
```

---

## 2. Boolean Naming

Always use readable prefixes:

| Prefix | Use when |
|--------|----------|
| `is` | State or condition (`isLoading`, `isVisible`) |
| `has` | Possession or existence (`hasPermission`, `hasError`) |
| `can` | Capability (`canSubmit`, `canEdit`) |
| `should` | Recommendation or trigger (`shouldRefresh`, `shouldRedirect`) |

```js
const isLoading = true;
const isVisible = false;
const hasPermission = user.role === "admin";
const canSubmit = !isLoading && formIsValid;
const shouldRefresh = staleTime > THRESHOLD;
```

---

## 3. Function Naming

Use **verb + noun** in camelCase.

| Verb | Typical use |
|------|-------------|
| `fetch`, `get`, `load` | Read data |
| `create`, `update`, `save`, `set` | Write data |
| `remove`, `delete`, `clear` | Remove data |
| `handle` | Event callbacks (see §9) |
| `toggle` | Boolean flip |
| `format`, `parse`, `build`, `generate` | Transform data |

```js
// Good
fetchUsers();
getProfile();
updateCart();
removeItem();
handleSubmit();
toggleSidebar();

// Bad
users();
data();
buttonClick();
process();
```

---

## 4. React Component Naming

Use **PascalCase** for component names and primary export.

```
src/app/components/
├── UserCard/
│   └── index.jsx          → export default function UserCard()
├── ProductList/
│   └── index.jsx          → export default function ProductList()
├── NavbarMenu/
│   └── index.jsx
├── LoginForm/
│   └── index.jsx
├── DashboardSidebar/
│   └── index.jsx
└── maps/
    └── Controls/
        └── index.jsx      → export default function MapControls()
```

```jsx
// Good
LoginForm.jsx
DashboardSidebar.jsx
MapLayerControl.jsx

// Bad
Card1.jsx
BoxComponent.jsx
Thing.jsx
```

### Sub-components

Private sub-components in the same file may use PascalCase:

```jsx
function ZoomControl() { ... }
function BasemapControl() { ... }

export default function MapControls() { ... }
```

---

## 5. File Naming

| File type | Convention | Example |
|-----------|------------|---------|
| React component folder | PascalCase | `UserCard/` |
| Component entry | `index.jsx` | `UserCard/index.jsx` |
| Intlayer content | `{scope}.content.js` or `.content.jsx` | `header.content.js` |
| Utility / helper | kebab-case | `format-date.js`, `api-client.js` |
| Hook | camelCase with `use` prefix | `useLocalizedHref.js` |
| Context | kebab-case file, PascalCase export | `map-context.jsx` → `MapContext` |
| Provider | PascalCase | `IntlayerProvider.jsx` |
| Page (App Router) | `page.jsx`, `layout.jsx` | `[locale]/map/page.jsx` |
| Static data | kebab-case | `styles.json`, `map-layers.json` |
| SCSS partial | `_kebab-case.scss` | `_map.scss`, `_controls.scss` |
| SCSS index | `_index.scss` | `components/map/_index.scss` |

---

## 6. Folder Naming

Use **lowercase kebab-case** only.

```
// Good
user-management/
map-controls/
shared-components/
auth-services/
peatland-pathways/

// Bad
UserManagement/
MapControls/
my Folder/
```

### Boilerplate folder map

```
src/
├── app/
│   ├── [locale]/              # Dynamic locale segment (Next.js convention)
│   ├── components/            # Feature UI components (PascalCase subfolders)
│   ├── hooks/                 # Custom hooks
│   ├── providers/             # React context providers
│   └── utils/                 # App-level helpers
├── context/                   # Shared React contexts
├── lib/                       # Framework-agnostic libraries (mapbox, utils)
└── data/                      # Static JSON / config

public/
├── assets/                    # Images, fonts, icons (kebab-case subfolders)
└── styles/
    ├── components/            # Feature SCSS (kebab-case folders)
    ├── utilities/             # Shared SCSS utilities
    └── tailwind-customs/      # Tailwind @utility definitions
```

---

## 7. Pages & Routes (Next.js App Router)

Route **folders** use kebab-case. Special files follow Next.js conventions.

```
src/app/[locale]/
├── page.jsx                   # /
├── layout.jsx
├── map/
│   ├── page.jsx               # /map
│   └── layout.jsx
└── user-management/
    └── page.jsx               # /user-management
```

| URL (id default) | URL (en) | Folder |
|------------------|----------|--------|
| `/` | `/en` | `[locale]/page.jsx` |
| `/map` | `/en/map` | `[locale]/map/page.jsx` |
| `/about-us` | `/en/about-us` | `[locale]/about-us/page.jsx` |

---

## 8. CSS / SCSS Naming

Use **BEM** (Block Element Modifier), optionally combined with Tailwind via `@apply`.

```scss
.user-card { }                    // Block
.user-card__title { }             // Element
.user-card__image { }             // Element
.user-card--featured { }          // Modifier
```

### Boilerplate examples (already in use)

```scss
.header { }                        // Block
.header__inner { }                 // Element
.header__nav { }                   // Element
.header__link { }                  // Element

.mrv-controls { }                  // Block
.mrv-controls-zoom { }             // Element (single hyphen for compound)
.mrv-controls-basemap-panel { }    // Element
```

### SCSS file naming

- Partials: `_block-name.scss`
- Folder index: `_index.scss`
- Forward from parent: `@forward "./map/index";`

---

## 9. Tailwind + SCSS Hybrid

Define reusable patterns as `@utility` in `public/styles/tailwind-customs/`:

```css
@utility btn-primary {
    @apply cta-btn-1 text-khg-benthic-blue bg-khg-mist-white;

    &:hover, &:active, &:focus {
        @apply bg-khg-leaf-green text-khg-white;
    }
}
```

| Layer | Location | Naming |
|-------|----------|--------|
| Design tokens | `src/app/globals.css` → `@theme` | `--color-khg-*`, `--font-*` |
| Custom utilities | `public/styles/tailwind-customs/utilities/` | kebab-case: `btn-primary`, `link-dark` |
| Component SCSS | `public/styles/components/` | BEM classes matching JSX `className` |

Use `cn()` from `src/lib/utils.js` to merge Tailwind classes in JSX.

---

## 10. Event Handler Naming

Prefix with **`handle`** + action/event name.

```jsx
const handleClick = () => { ... };
const handleSubmit = (event) => { ... };
const handleDelete = (id) => { ... };
const handleStyleChange = (style) => { ... };
```

In JSX:

```jsx
<button onClick={handleClick}>...</button>
<form onSubmit={handleSubmit}>...</form>
```

---

## 11. React State Naming

Use destructured pairs: **`[noun, setNoun]`** — setter prefix is always `set`.

```jsx
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const [activeStyle, setActiveStyle] = useState(styles[0]);
```

For `useRef`:

```jsx
const mapContainerRef = useRef(null);
const mapRef = useRef(null);
```

---

## 12. Constants

Use **SCREAMING_SNAKE_CASE** for module-level constants and env-backed config.

```js
const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;
const DEFAULT_MAP_ZOOM = 6;
const API_TIMEOUT = 30000;
const USER_ROLE_ADMIN = "admin";

// middleware.js
const DEFAULT_LOCALE = "id";
const LOCALE_REGEX = /^[a-z]{2}(-[A-Z]{2})?$/;
```

Environment variables follow the same pattern:

```
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_MAPBOX_TOKEN
NEXT_PUBLIC_API_URL
```

---

## 13. Intlayer / i18n Naming

### Content dictionary files

Colocate with the component, named `{feature}.content.js`:

```
Header/
├── index.jsx
└── header.content.js        # key: "header-content"

maps/Controls/
├── index.jsx
└── control.content.jsx      # key: "control-content"
```

### Content key format

Use **kebab-case** for the dictionary `key`:

```js
import { t } from "intlayer";

const content = {
    key: "header-content",           // kebab-case, unique project-wide
    content: {
        home: t({ en: "Home", id: "Beranda" }),
        map: t({ en: "Map", id: "Peta" }),
    },
};

export default content;
```

### Usage

```jsx
const content = useIntlayer("header-content");
content.home.value;
```

### Locale helpers

| Function | Purpose |
|----------|---------|
| `getLocalizedHref(path, locale)` | Build locale-aware internal links |
| `getLocalized(page, field, locale)` | CMS field: `title` / `title_id` |
| `getLocalizedComponents(page, locale)` | CMS components array by locale |
| `useLocalizedHref()` | Hook wrapper for links |
| `useLocaleSwitcherItems()` | Language switcher menu data |

---

## 14. Mapbox Module Naming

```
src/
├── lib/mapbox/
│   ├── provider.js            → MapProvider (default export)
│   └── utils.js               → addWmsLayer(), etc.
├── context/
│   └── map-context.jsx        → MapContext, useMap()
├── data/
│   └── styles.json            → basemap style config
└── app/
    ├── [locale]/map/
    │   ├── layout.jsx         → map shell + MapProvider
    │   └── page.jsx
    └── components/maps/
        └── Controls/
            ├── index.jsx      → MapControls
            ├── Zoom.jsx       → optional split files
            └── control.content.jsx
```

| Symbol | Naming |
|--------|--------|
| Provider | `MapProvider` |
| Context hook | `useMap()` |
| Map instance ref | `mapRef` |
| Container ref | `mapContainerRef` |
| View config object | `initialViewState` |
| Style list | `styles` / `activeStyle` |
| Style switch fn | `changeStyle()` |

---

## 15. Import Aliases

Always use the `@/` alias mapped to `src/`:

```js
import MapProvider from "@/lib/mapbox/provider";
import { useMap } from "@/context/map-context";
import { useLocalizedHref } from "@/app/hooks/useLocalizedHref";
import { cn } from "@/lib/utils";
```

Never use deep relative paths like `../../../../lib/...` when `@/` is available.

---

## 16. Agent Checklist

Before finishing any task in this boilerplate, verify:

- [ ] Variables and functions use camelCase with descriptive names
- [ ] Booleans use `is`, `has`, `can`, or `should` prefixes
- [ ] New components are PascalCase in PascalCase folders with `index.jsx`
- [ ] New folders are kebab-case
- [ ] New routes live under `src/app/[locale]/` with kebab-case segments
- [ ] UI strings use Intlayer `.content.js` with kebab-case `key`
- [ ] SCSS uses BEM; new utilities use `@utility` in `tailwind-customs/`
- [ ] Event handlers start with `handle`
- [ ] Constants use SCREAMING_SNAKE_CASE
- [ ] Imports use `@/` alias
- [ ] No vague names: `data`, `x`, `flag`, `thing`, `temp`, `process`

---

## Source

Derived from **Catalyze Frontend Standardization** (`standard naming.pptx`) and adapted for this Next.js boilerplate (Tailwind v4, Mapbox, Intlayer i18n).
