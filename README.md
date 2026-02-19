# React-Design-System

# React Design System

A scalable, extensible **React component library** built with modern tooling — including **TypeScript**, **Nx**, **Rollup**, **Storybook**, **SCSS**, and **Jest**.

This monorepo houses reusable UI primitives and components that can be shared across projects while enforcing consistent design and accessibility patterns.

---

## 📦 Packages

| Package | Description |
|---------|-------------|
| `@react.ds/foundation` | Design tokens, spacing, typography, and foundational utilities |
| `@react.ds/react` | Core React components built on top of the foundation |
| `@react.ds/scss` | Global styles, variables, and SCSS utilities |
| `@playgrounds/react`| App used to test and consume the design system in a real React env |

You can explore these in the `packages/` folder.

---

## 🚀 Features

- **TypeScript first** — fully typed for safety and DX
- **Monorepo structure** — scalable and maintainable
- **Builds with Rollup** — optimized UMD/ES builds
- **Storybook documentation** — interactive component previews
- **Jest + ts-jest tests** — unit testing with type-safe tooling
- **Nx task orchestration** — build/test affected parts efficiently
- **Linting and formatting** with ESLint and Stylelint
- **Deployment Automation CI/CD Pipeline** with Github Action

---

## 🌐 Live Preview

🎨 Our design system is documented and showcased online:

👉 **Deployed Storybook:** https://react-dse.netlify.app/

This deployment reflects the latest version of the component library published from the `main` branch. It provides live previews, props knobs, accessibility checks, and visual examples — perfect for design teams, developers, and reviewers.


## 🧩 Getting Started

### Install dependencies

```bash
yarn install
