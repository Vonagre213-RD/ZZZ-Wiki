# ZZZ Wiki

A wiki-style single-page application for browsing Zenless Zone Zero characters, built with React and TypeScript. Uses the [Zenless-Zone-Zero API](https://github.com/Vonagre213-RD/Zenless-Zone-Zero_Api) for it's backend.

## Features

- Browse all agents with filtering by faction, attribute, and specialty
- Search characters by name
- View detailed agent profiles (stats, intel, images)
- User authentication (register/login/logout)
- Comment on agent profiles
- Favorite agents and view them in a dedicated section
- Responsive layout for desktop and mobile

## Tech Stack

- **Framework:** Vite with React as library + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js
- npm or pnpm

### Installation

```bash
git clone https://github.com/Vonagre213-RD/ZZZ-Wiki-main.git
cd ZZZ-Wiki-main
npm install
```

### Configuration

Edit `src/Types/globals.ts` and set `BASE_URL` to your API instance:

```ts
export const BASE_URL = "https://your-api-url.com";
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`. (if not just add +1 to the port, since it may be occupied)



## Project Structure

```
src/
├── Types/              # TypeScript types and utilities
├── context/            # React contexts (auth, filters, favorites)
├── providers/          # Context providers with useReducer
├── utils/hooks/        # Custom hooks (data fetching, context access)
├── components/
│   ├── atoms/          # Small reusable UI components (squeletons)
│   ├── molecules/      # Mid-level components (modals, nav)
│   ├── organisms/      # Page-level components (header)
│   └── pages/          # Route-level components
└── assets/             # Fonts, SVGs


```
> note: this project it's actually more than a year old, but the old commit history got deleted due a push --force :(
