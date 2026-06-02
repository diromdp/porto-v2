# First-Init Prompt

Use this document **once** at the very start of a new project to bootstrap the design system from Figma into this boilerplate. It assumes the Figma plugin / MCP server is enabled (`figma-use`, `get_design_context`, `search_design_system`, `get_libraries`, `get_metadata`, `get_screenshot`).

The goal is a **one-shot design-to-code translation** of:

1. **Design tokens** (colors, typography scale, spacing, radii, shadows, breakpoints, motion) → CSS custom properties inside the `@theme { … }` block of `src/app/globals.css`.
2. **Text styles** → reusable `@utility` classes under `public/styles/tailwind-customs/utilities/typographies/`.
3. **Component primitives** (buttons, links, inputs, badges, cards, etc.) → `@utility` classes under `public/styles/tailwind-customs/utilities/` **and/or** PascalCase React components under `src/app/components/<ComponentName>/index.jsx`.

After this is done **once**, future pages/screens should be built with `figma-generate-design` (code-to-design) or `get_design_context` (design-to-code), reusing the tokens and utilities created here.

---

## Before you paste

Fill in the three placeholders in the prompt below:

| Placeholder | Example | What it controls |
|-------------|---------|------------------|
| `<FIGMA_URL>` | `https://figma.com/design/AbCd1234/Project?node-id=12-345` | The Figma file / page containing the design system |
| `<BRAND_PREFIX>` | `acme`, `khg`, `nova` | Token prefix used for every variable and utility (kebab-case, 2–5 letters) |
| `<HAS_DARK_MODE>` | `yes` / `no` | Whether to emit `.dark { … }` overrides alongside `:root` |

---

## The prompt

Paste the entire block below into a fresh chat at the **root of the repo**. Do not run it twice.

```markdown
You are operating on a Next.js 16 + Tailwind v4 boilerplate. Translate the Figma design system into code following the conventions below. Do **not** build any pages, layouts, or screens — only the design system foundation.

Source of truth: <FIGMA_URL>
Brand prefix: <BRAND_PREFIX>
Dark mode required: <HAS_DARK_MODE>

## Read first

1. `AGENTS.md`
2. `NAMING-STANDARDS.md`
3. `.cursor/rules/general.mdc`
4. `.cursor/rules/naming-standards.mdc`
5. `README.md`
6. Current contents of `src/app/globals.css`, `public/styles/tailwind-customs/index.css`, and everything under `public/styles/tailwind-customs/utilities/` — so you understand the existing file structure before editing.

## Discover the design system (Figma)

Use the Figma MCP tools in this order. Load `figma-use` skill before any write call.

1. `get_metadata` on the supplied URL — confirm the page/file structure.
2. `get_libraries` and `search_design_system` — enumerate every published variable collection, text style, color style, effect style, and component set.
3. `get_design_context` on the design-system page — collect CSS variable mappings, typography hints, and component documentation.
4. `get_screenshot` of each foundation board (colors, type, components) — use as visual reference only.

Produce an inventory in chat **before writing any code**:

- Color collection (name → hex/oklch, light + dark if applicable)
- Typography styles (name → font-family, weight, size, line-height, letter-spacing, responsive variants)
- Spacing scale, radii, shadows, breakpoints, motion (duration/easing)
- Component primitives in scope (e.g. Button/primary, Button/outline, Link/inline, Badge, Input, Card)

Wait for nothing — proceed once the inventory is logged.

## Write the foundation (code)

### 1) Design tokens → `src/app/globals.css`

Add or extend the existing `@theme { … }` block. Every token must:

- Use **kebab-case** names with the brand prefix: `--color-<BRAND_PREFIX>-<name>`, `--font-<name>`, `--shadow-<BRAND_PREFIX>-<name>`, `--text-shadow-<BRAND_PREFIX>-<name>`, `--radius-<name>`, `--spacing-<name>`, `--breakpoint-<name>`, `--container-*`, `--animate-<name>`.
- Use the exact Figma value (hex or oklch). Do **not** round or reinterpret.
- Group tokens by category with a blank line and a short comment header.
- For dark mode (if `<HAS_DARK_MODE>` is yes), emit semantic aliases inside `:root { … }` and override them inside `.dark { … }` — mirror the existing `--background`, `--foreground`, `--primary`, etc. pattern already in the file.
- Keep all existing tokens already present in `globals.css`. Only add or replace what the Figma system defines; never silently drop a token.

### 2) Text styles → `public/styles/tailwind-customs/utilities/typographies/`

For each Figma text style:

- Create or extend the right file in `typographies/` (`headings.css`, `body.css`, `label-number.css`, `button-menu.css`). Add new files (kebab-case) only when no existing category fits, and register them in `typographies/index.css`.
- Emit one `@utility <name> { @apply … }` per text style, named after the Figma style (kebab-case, no spaces, no slashes — e.g. `display-lg`, `body-md`, `caption-1`).
- For semantic HTML tags (`h1`..`h6`, `p`), also bind defaults inside `@layer base { … }` mirroring the same `@apply` rules — keep the two in sync.
- Use `md:` responsive variants for mobile/desktop pairs (Figma usually exposes both). Reference fonts via the `--font-*` tokens you added to `@theme`.
- Never hardcode font-family strings or pixel sizes outside the `@theme` block — always go through tokens or `text-[…]/leading-[…]` arbitrary values driven by the Figma spec.

### 3) Component utilities → `public/styles/tailwind-customs/utilities/`

For each Figma component primitive that is purely visual (button, link, badge, chip, divider, scrollbar):

- Add an `@utility <name> { @apply … }` rule in the matching file (`buttons.css`, `link.css`, `scroll.css`, or a new kebab-case file registered in `utilities/index.css`).
- Compose with existing utilities and tokens. Reuse the typography utilities you just defined (e.g. `@apply cta-btn-1`) instead of repeating font rules.
- Cover every variant (primary, secondary, outline, ghost, destructive, disabled, sizes sm/md/lg) and every interactive state (`hover`, `active`, `focus`, `disabled`).
- Use the brand color tokens via `text-<BRAND_PREFIX>-…` / `bg-<BRAND_PREFIX>-…` — never raw hex.

### 4) Components → `src/app/components/<ComponentName>/index.jsx`

Only for primitives that need React behavior (forms, modals, dropdowns, tabs, accordions). For each:

- Folder `src/app/components/<PascalCase>/index.jsx`.
- Colocate Intlayer copy in `<pascal-case>.content.js` if there is any user-facing text.
- Use the `@utility` classes you just created — **no hardcoded hex, no inline pixel sizes**.
- Server Component by default; add `"use client"` only when state/effects are needed.
- Follow `.cursor/rules/naming-standards.mdc` for filenames, props, and handlers.

## Do not

- Do not create any pages, layouts, or screens.
- Do not invent tokens that are not in Figma. If something is missing, list it under "Open questions" at the end instead of guessing.
- Do not overwrite or rename existing tokens/utilities without explicitly listing the rename in your summary.
- Do not install new dependencies. The stack is fixed: Next 16, React 19, Tailwind v4, SCSS, Intlayer.
- Do not run `figma-generate-design`, `use_figma`, or any write-to-Figma tool. This is design → code only.

## Deliverables (post in chat when done)

1. **Token table**: every variable added, grouped by category (color / type / spacing / radius / shadow / motion / breakpoint), with Figma name → CSS variable name → value.
2. **Utility table**: every `@utility` added, with file path and the Figma style/component it maps to.
3. **Component list**: every React component scaffolded, with path and a one-line description.
4. **Open questions**: any Figma styles/components that could not be mapped 1:1 and need a design decision.
5. **Verification**: confirm `npm run dev` builds without errors and that `src/app/page.jsx` still renders.
```

---

## After the run

1. Skim the inventory the agent posted against the Figma source — flag anything missing.
2. Visit `/` and `/map` in `npm run dev` to confirm the tokens render correctly (the existing pages already consume `--color-khg-*` / `--font-*` so any breakage shows up immediately).
3. If `<HAS_DARK_MODE>` was `yes`, add the `dark` class to `<html>` temporarily to spot-check dark overrides.
4. Commit in two passes for reviewability:
   - Commit 1 — `chore(design-system): add Figma design tokens`
   - Commit 2 — `chore(design-system): add typography + component utilities`

From here on, build pages and features with `get_design_context` (design-to-code) and keep this file as a record of the initial bootstrap. **Do not re-run this prompt** — extend the design system incrementally instead.
