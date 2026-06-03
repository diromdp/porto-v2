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

Source of truth: 
   - Text styles: <FIGMA_URL>
   - Colors: <FIGMA_URL>
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

---

# Global Components Prompt

Run this **after** the design-system prompt above has been merged and verified. It translates the global / shared component library from Figma (button, link, input, select, checkbox, radio, switch, form, dropdown, modal, drawer, tabs, accordion, tooltip, toast, badge, avatar, card, breadcrumb, pagination, skeleton, etc.) into PascalCase React components under `src/app/components/`, reusing the tokens and `@utility` classes created during init.

## Before you paste

Fill in the four placeholders below:

| Placeholder | Example | What it controls |
|-------------|---------|------------------|
| `<FIGMA_COMPONENTS_URL>` | `https://figma.com/design/AbCd1234/Project?node-id=42-100` | The Figma page / frame containing the global component library |
| `<BRAND_PREFIX>` | `khg`, `acme`, `nova` | Same prefix used during init — must match existing tokens |
| `<COMPONENT_SCOPE>` | `button, link, input, textarea, select, checkbox, radio, switch, form, dropdown, modal, drawer, tabs, accordion, tooltip, toast, badge, avatar, card, breadcrumb, pagination, skeleton` | Comma-separated list of components to build in this run. Keep small batches (5–8) for reviewable diffs |
| `<INCLUDE_TESTS>` | `yes` / `no` | Whether to generate colocated Vitest + React Testing Library tests per `general.mdc` §7 |

## The prompt

Paste the entire block below into a fresh chat at the **root of the repo**. Safe to re-run in batches — just change `<COMPONENT_SCOPE>` each time.

```markdown
You are operating on a Next.js 16 + React 19 + Tailwind v4 boilerplate. Translate the Figma global component library into reusable React components. Do **not** build any pages, layouts, or screens — only the shared component library.

Source of truth: <FIGMA_COMPONENTS_URL>
Brand prefix: <BRAND_PREFIX>
Components to build this run: <COMPONENT_SCOPE>
Generate tests: <INCLUDE_TESTS>

## Read first

1. `FIRST-INIT.md` (this file) — to know which tokens and `@utility` classes already exist.
2. `AGENTS.md`, `NAMING-STANDARDS.md`, `.cursor/rules/general.mdc`, `.cursor/rules/naming-standards.mdc`, `README.md`.
3. `src/app/globals.css` and everything under `public/styles/tailwind-customs/utilities/` — the inventory of available tokens and utility classes.
4. Existing components under `src/app/components/` (`Header`, `Footer`, `LocaleSwitcher`, `maps/Controls`) — match their file structure, import style, and Intlayer usage.
5. `package.json` — confirm available deps. You may use `clsx`, `tailwind-merge`, `lucide-react`, `intlayer`, `next-intlayer`. Do **not** add new dependencies.

## Discover (Figma)

Load `figma-use` before any write call. For each component in `<COMPONENT_SCOPE>`:

1. `get_metadata` on the supplied URL — locate the component set and its variants.
2. `search_design_system` — confirm the component is a published library component and resolve any nested instances.
3. `get_code_connect_map` / `list_code_components` — if a Code Connect mapping already exists, prefer the mapped snippet over generating fresh code.
4. `get_design_context` on the component frame — collect variant axes, default values, prop documentation, and the design tokens / utility classes it should bind to.
5. `get_screenshot` of the variant matrix — visual reference for hover/active/focus/disabled states.

Before writing any code, post a **component plan** for the whole batch in this shape:

| Component | Variants | Props | Client/Server | Needs new utility? |
|-----------|----------|-------|---------------|---------------------|
| Button | primary, secondary, outline, ghost, destructive · sm/md/lg | `variant`, `size`, `isLoading`, `isDisabled`, `iconLeft`, `iconRight`, `asChild`, `onClick` | Server (unless `onClick` is passed) | No — uses `btn`, `btn-primary`, etc. |
| Dropdown | menu, select | `items`, `value`, `defaultValue`, `placeholder`, `isDisabled`, `onChange` | Client | Maybe `dropdown-panel` |

Proceed without waiting for approval once the plan is logged.

## Write the components

For every component in scope:

### File layout

- Folder: `src/app/components/<PascalCase>/index.jsx`.
- Colocated Intlayer copy (only when the component ships with default user-facing text such as placeholders, helper text, error messages): `<pascal-case>.content.js` consumed via `useIntlayer("<kebab-case-key>")`.
- Colocated test (if `<INCLUDE_TESTS>` is `yes`): `index.test.jsx`.
- If multiple subcomponents are needed (e.g. `Dropdown.Item`, `Tabs.Trigger`), export them as named exports from the same `index.jsx`. Do not create sibling files unless a subcomponent exceeds ~100 lines.

### Implementation rules

- **Server Component by default.** Add `"use client"` only for components that need state, effects, refs, event handlers, or browser APIs (modal, drawer, dropdown, tabs, accordion, tooltip, toast, form inputs, switch).
- **Styling**: compose existing `@utility` classes from `public/styles/tailwind-customs/utilities/` and brand-prefixed tokens (`text-<BRAND_PREFIX>-…`, `bg-<BRAND_PREFIX>-…`). **Never hardcode hex values or pixel font sizes.** If a needed utility does not exist, add it to the matching file in `tailwind-customs/utilities/` (and register it in `utilities/index.css` if it's a new file) following the same pattern as `buttons.css` / `headings.css`.
- **Class composition**: use `clsx` + `twMerge` (`tailwind-merge`) for variant/conditional classes. Define a `variants` map at the top of the file — do not inline long ternaries in JSX.
- **Props naming**: follow `naming-standards.mdc`. Booleans use `is*` / `has*` / `can*` / `should*` (`isDisabled`, `isLoading`, `hasError`). Handlers passed as props use `on*` (`onChange`, `onSubmit`, `onOpenChange`). Internal handlers are `handle*`.
- **Defaults**: every variant prop has a sensible default (`variant = "primary"`, `size = "md"`). Required props are documented in JSDoc above the component.
- **Forwarding**: forward `className`, `...rest` (HTML attributes), and `ref` (via React 19 `ref` prop, not `forwardRef`) on the root element so consumers can extend behavior.
- **Polymorphism**: where the design supports it (Button-as-link, Card-as-anchor), accept an `as` prop or an `asChild` pattern; do not duplicate components.

### Accessibility (non-negotiable)

- Use semantic HTML first (`<button>`, `<a>`, `<label>`, `<dialog>`, `<details>`, `<nav>`).
- Generate stable ids with `useId()` and wire `aria-labelledby` / `aria-describedby` / `aria-invalid` / `aria-controls` / `aria-expanded` / `aria-selected` as appropriate.
- Keyboard support: Tab order, Enter/Space activation, Esc to close overlays, arrow-key navigation for `Tabs` / `Dropdown` / `Select` / `Menu`, focus trap inside `Modal` / `Drawer`, return focus to the trigger on close.
- Provide `aria-label` props for icon-only controls and never rely on color alone for state.

### Forms (Input, Textarea, Select, Checkbox, Radio, Switch, Form)

- Support both controlled (`value` + `onChange`) and uncontrolled (`defaultValue`) modes.
- Surface `label`, `description`, `errorMessage` props; render them with the correct ARIA wiring.
- `Form` wraps `<form>`, handles `onSubmit`, and renders an error summary region. Validation is delegated to the consumer — do not import a form library.

### Overlays (Modal, Drawer, Dropdown, Tooltip, Toast)

- Render via React 19 portals (`createPortal` from `react-dom`) into a stable container (`document.body`).
- Manage open/close with controlled (`isOpen` + `onOpenChange`) and uncontrolled (`defaultOpen`) modes.
- Close on Esc, click-outside (where appropriate), and route changes (`usePathname` from `next/navigation`).
- Lock body scroll while a `Modal` / `Drawer` is open; restore on close.

### Icons

- Use `lucide-react` for any icon referenced in the Figma component. Match the Figma icon name where it exists; otherwise pick the closest semantic match and note it under "Open questions".

### Tests (when `<INCLUDE_TESTS>` is `yes`)

Follow `.cursor/rules/general.mdc` §7 exactly:

- Vitest + React Testing Library + `@testing-library/user-event`.
- Accessibility-first queries (`getByRole`, `getByLabelText`).
- For every component, cover: default render, each variant prop, disabled state, error state (forms), keyboard interaction (overlays), and `onChange` / `onClick` callbacks fire.
- Mock at boundaries only. No snapshot tests.

## Do not

- Do not build pages, routes, or layouts.
- Do not introduce new dependencies. The stack is fixed.
- Do not hardcode hex, rgb, or px values — always go through `--<BRAND_PREFIX>-*` tokens or existing utilities.
- Do not duplicate variants by copy-pasting JSX — drive variants from a single `variants` map per component.
- Do not write to Figma. No `use_figma` / `figma-generate-design` calls. This is design → code only.
- Do not re-run the design-system prompt at the top of this file. If a token is missing, list it under "Open questions" and stop.

## Deliverables (post in chat when done)

1. **Component plan table** (the one you posted before writing code), updated with the final status of each row.
2. **Files added/modified**: full list, grouped by `src/app/components/`, `public/styles/tailwind-customs/utilities/`, tests.
3. **New utilities**: every new `@utility` added, the file it lives in, and the Figma component that triggered it.
4. **Localization keys**: every Intlayer key added with its `en` / `id` defaults.
5. **Verification**:
   - `npm run lint` — clean.
   - `npm test` — passes (only if tests were generated).
   - `npm run dev` — boots; visit `/` and `/map` to confirm nothing regressed.
6. **Open questions**: any Figma variant, prop, or icon that could not be mapped 1:1.
```

## After the run

1. Check the component plan table against the Figma component library — flag any variant or prop the agent skipped.
2. Spot-check 2–3 components in `/` or a temporary route, exercising every variant, focus ring, and keyboard interaction.
3. If overlays were added, verify body scroll lock, focus trap, and Esc-to-close manually.
4. Commit one component per commit (or one tight batch per commit) so review stays manageable:
   - `feat(components): add Button + variants`
   - `feat(components): add Form primitives (Input, Textarea, Select, …)`
   - `feat(components): add overlays (Modal, Drawer, Dropdown, Tooltip)`
5. Re-run the prompt with a new `<COMPONENT_SCOPE>` to add the next batch. **Do not** widen scope mid-run — finish the batch, commit, then start the next.
