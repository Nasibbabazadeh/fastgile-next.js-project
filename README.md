# 🚀 Next.js Project

This is a modern web application built with **Next.js 15** and fully powered by a lean and modular stack including **Zustand**, **React Query**, **React Hook Form**, and **Zod**.

## 🧰 Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest) with native `fetch`
-   **Forms**: [React Hook Form](https://react-hook-form.com/)
-   **Validation**: [Zod](https://zod.dev/)
-   **Styling**: Pure CSS using [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
-   **Toaster**: Lightweight, customizable toast notifications [react-hot-toast](https://react-hot-toast.com/docs)
-   **Icons**: [Lucide](https://lucide.dev/)
-   **Linting & Formatting**: ESLint + Prettier
-   **Module Resolution**: Path aliases via `tsconfig.json`

## 📛 Folder & File Naming Conventions

To maintain clarity and consistency across the codebase, follow these naming conventions:

### 📂 Folder Names

-   Use **kebab-case** for all folder names (e.g., `user-profile`, `exam-utils`)
-   Organize by **feature** or **domain** where appropriate (e.g., `exam/`, `auth/`, `dashboard/`)
-   Co-locate components, styles, and types when possible

### 📄 File Names

-   Use **kebab-case** for file names
-   Use `index.ts` or `index.tsx` as the entry point for folders
-   Prefix custom hooks with `use-` (e.g., `use-auth.ts`)
-   Utility/helper files: `verb-noun.ts` or `noun-helper.ts` (e.g., `format-date.ts`)
-   Component files: `component-name.tsx` (e.g., `user-card.tsx`)
-   Type definitions: `types.ts` or `feature-name.types.ts` (e.g., `user-details.types.ts`)
-   Style modules: `component-name.module.css` (e.g., `header.module.css`)

## 📁 Project Structure

/
├── public/ # Static assets
├── src/
│ ├── app/ # App directory (Next.js 13+)
│ ├── assets/ # Images, fonts, etc.
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── http/ # API service logic (fetch helpers)
│ ├── layout/ # Layout components and wrappers
│ ├── lib/ # Internal libraries or helpers
│ ├── models/ # Zod schemas and type models
│ ├── providers/ # React context providers
│ ├── services/ # Business logic layer
│ ├── shared/ # Shared logic/components across features
│ ├── store/ # Zustand state stores
│ └── utils/ # Utility functions
├── middleware.ts # Next.js middleware
├── .env # Environment variables
├── .eslintrc.json # ESLint configuration
└── .gitignore # Git ignore rules

## 📏 Rules & Best Practices

### 🔧 Architecture & Folder Structure

-   Use feature-based or domain-driven folder structure inside `src/` (e.g., `services`, `models`, `store`, etc.).
-   Keep global state in `store/` (Zustand) and derive data from server using `services/` and `http/`.
-   Use `providers/` to wrap and share app-wide logic (e.g., context, theme, auth).

### 🗃️ State Management (Zustand)

-   Use Zustand only for global state (e.g., auth, UI state, modals).
-   For local component state, use React `useState` or `useReducer`.
-   Store types separately inside `models/` or `types/` to avoid circular imports.

### 🔗 Data Fetching (TanStack Query + fetch)

-   Use `useQuery` and `useMutation` for all async operations.
-   Define reusable `fetcher` functions inside `http/`.
-   Always wrap server responses in Zod schemas for validation.

### 📋 Forms & Validation

-   Use **React Hook Form** to manage forms.
-   Use **Zod** to validate form data and infer types from schemas.
-   Keep schemas in `models/` and use `z.infer<typeof schema>` for form types.

### 🎨 Styling (CSS Modules + class-variance-authority)

-   Use `.module.css` files co-located with components for styling.
-   Use [class-variance-authority](https://cva.style/) (`cva()`) for conditional classNames.

### Custom Components' declaration

-   Use **interface** for props of custom component because of extend feature.

## 🌗 Dark Mode with `next-themes`

This project uses [`next-themes`](https://github.com/pacocoursey/next-themes) to enable light/dark mode support in a Next.js app.

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Lint the project
npm run lint

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
