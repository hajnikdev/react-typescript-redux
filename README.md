# React + TypeScript + Vite + Strongly Typed Redux

This repository provides a minimal **React + TypeScript + Vite** setup extended with a **strongly typed Redux architecture**.  
It is intended for **learning purposes** and can also be used as a **boilerplate for new React projects** that require scalable and type-safe state management.

The project demonstrates how to structure a **Redux-based React application with full TypeScript support**, including typed actions, reducers, selectors, and hooks.

---

# Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Redux**
- **React Redux**
- **ESLint**

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

The application will start at:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

---

# Project Goals

This project aims to demonstrate:

- Strongly typed Redux patterns
- Type-safe state management in React
- Scalable project structure
- Clean integration of Redux with TypeScript
- Best practices for React + Redux projects

---

# Project Structure (Example)

```text
src
├── app
│   └── store.ts
├── features
│   └── example
│       ├── exampleSlice.ts
│       └── ExampleComponent.tsx
├── hooks
│   ├── useAppDispatch.ts
│   └── useAppSelector.ts
├── components
├── types
└── main.tsx
```

---

# Vite React Plugins

Currently, two official plugins are available:

- **@vitejs/plugin-react**  
  Uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in rolldown-vite) for Fast Refresh.

- **@vitejs/plugin-react-swc**  
  Uses [SWC](https://swc.rs/) for Fast Refresh and faster builds.

---

# React Compiler

The React Compiler is not enabled in this template due to its impact on development and build performance.

To enable it, see the official documentation:

https://react.dev/learn/react-compiler/installation

---

# Expanding the ESLint Configuration

For production applications, it is recommended to enable **type-aware lint rules**.

Example configuration:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

# Optional React ESLint Plugins

You can also install additional React-specific lint rules:

- **eslint-plugin-react-x**
- **eslint-plugin-react-dom**

Example:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
])
```

---

# Purpose of This Repository

This project serves as:

- A **learning resource** for developers who want to understand strongly typed Redux with TypeScript
- A **starter template** for building scalable React applications
- A **reference implementation** of Redux patterns with modern tooling