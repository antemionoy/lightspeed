# Lightspeed - Ecwid Store

E-commerce store built with React + TypeScript + Vite using FSD (Feature-Sliced Design) architecture.

## Description

Application for working with Ecwid store, implementing:
- Browsing categories and products
- Product detail page
- Shopping cart with local storage
- Order placement

## Project Structure (FSD)

```
src/
├── app/          # Application initialization, routing
├── pages/        # Application pages
│   ├── products/ # Catalog page with categories and products
│   ├── product/  # Product detail page
│   ├── cart/     # Shopping cart page
│   └── notFound/ # 404 page
├── widgets/      # Widgets (compositional blocks)
│   ├── products/ # Product list widget
│   ├── categories/# Category list widget
│   ├── cart/     # Cart widgets (Icon, Item, List, Total)
│   └── layout/   # Layout widgets (AppLayout, Header, Footer)
├── features/     # Features (business logic)
│   └── cart/     # Cart features
│       ├── cartQuantityControl/  # Add/update quantity
│       ├── placeOrder/            # Order placement
│       └── removeFromCart/        # Remove items
├── entities/     # Entities (business entities)
│   ├── product/  # Product entity (API hooks, UI components, utils)
│   ├── category/ # Category entity (API hooks, UI components)
│   └── cart/     # Cart entity (storage, hooks, types)
└── shared/       # Reusable components and utilities
    ├── api/      # Ecwid API client (Axios config, endpoints)
    ├── config/   # App configuration (routes, providers, theme)
    ├── lib/      # Utilities (breadcrumbs, price, params)
    └── ui/       # UI components (Counter, Loader, Price, etc)
```

## Technologies

- **React 18** - UI library
- **TypeScript** - type safety
- **Vite** - build tool
- **React Router** - routing
- **TanStack Query** - server state management and caching
- **Axios** - HTTP client
- **Ant Design** - UI components
- **Emotion** - CSS-in-JS styling

## Installation

```bash
npm install
```

## Environment Variables Setup

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Or create `.env` manually with the following content:

```env
# Ecwid API Configuration
VITE_ECWID_STORE_ID=108362264
VITE_ECWID_TOKEN=public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs
VITE_ECWID_BASE_URL=https://app.ecwid.com/api/v3
```

## Running

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

```bash
npm run build
```

## FSD Architecture

Feature-Sliced Design is a methodology for organizing frontend code that helps create scalable and maintainable applications.

Layers (bottom to top):
1. **shared** - reusable components, utilities
2. **entities** - business entities
3. **features** - user scenarios
4. **widgets** - compositional blocks
5. **pages** - application pages
6. **app** - application initialization
