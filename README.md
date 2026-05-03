#  Product Listing App
A simple e-commerce product listing built with Next.js App Router, focusing on performance, clean architecture, and user experience.

## Features

- Product listing fetched from API
- Responsive grid layout
- Product card with:
  - optimized images (Next/Image)
  - brand, title, description
  - price with promotion handling
- Cart functionality with shared state
- Header with cart indicator

## Tech Stack

- Next.js (App Router)
- TypeScript
- CSS Modules
- React Context (state management)

## Getting Started
- Add Environment Variables to your .env.local
  - API_URL=your_api_url
  - API_KEY=your_api_key

- Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Key Decisions
- Server vs Client Components
  - Server Components used for data fetching
  - Client Components used only where interaction is needed (cart)
This keeps the client bundle small and improves performance.

- State Management
  - Used React Context for cart state
  - Chosen for simplicity and sufficient scope
Avoided external libraries (e.g. Zustand) to prevent overengineering

- Image Handling
  - Used next/image for:
    - automatic optimization
    - lazy loading
    - responsive images (sizes)
  - Added fallback handling for broken image URLs

- Data Handling
  - API response differed from provided schema
  - Types were adjusted based on actual response (treated API as source of truth)

## Possible Improvements
- Add filtering and sorting
- Introduce runtime validation (e.g. Zod)
- Improve UI with skeleton loaders

