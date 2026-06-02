# Agent Guide

When working in this boilerplate, read and follow **[NAMING-STANDARDS.md](./NAMING-STANDARDS.md)** before creating or renaming any file, component, variable, class, or route.

## Priority docs

| File | Purpose |
|------|---------|
| [NAMING-STANDARDS.md](./NAMING-STANDARDS.md) | Catalyze frontend naming conventions (required) |
| [README.md](./README.md) | Setup, folder structure, Tailwind / Mapbox / Intlayer usage |

## Stack reminders

- **Next.js 16** App Router — routes under `src/app/[locale]/`
- **Tailwind v4** — tokens in `src/app/globals.css`, utilities in `public/styles/tailwind-customs/`
- **SCSS** — BEM components in `public/styles/components/`
- **Intlayer** — UI strings in colocated `*.content.js` files, locales `id` (default) + `en`
- **Mapbox** — `src/lib/mapbox/provider.js`, demo at `/map`

## Naming quick rules

- Components → **PascalCase** (`MapControls`, `UserCard`)
- Folders & routes → **kebab-case** (`map-controls/`, `user-management/`)
- Variables & functions → **camelCase** (`isLoading`, `fetchUsers`)
- Constants → **SCREAMING_SNAKE_CASE** (`DEFAULT_MAP_ZOOM`)
- SCSS → **BEM** (`.header__link`)
- Never use vague names: `data`, `x`, `flag`, `thing`, `process`

Cursor picks up `.cursor/rules/naming-standards.mdc` automatically in this project.
