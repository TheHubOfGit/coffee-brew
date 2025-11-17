# Coffee Brewing Guide

A comprehensive web application for learning and mastering manual coffee brewing techniques. This guide provides step-by-step instructions, interactive timers, and detailed recipes for three popular brewing methods.

## Features

- **Three Brewing Methods:**
  - **V60 Pour-Over** - Single cup precision brewing with James Hoffmann's technique
  - **Flair Espresso** - Manual lever espresso with precise pressure control
  - **Moka Pot** - Classic stovetop brewing for rich, bold coffee

- **Interactive Tools:**
  - Step-by-step brewing guides with detailed instructions
  - Built-in timers for each brewing phase
  - Coffee-to-water ratio calculator
  - Difficulty ratings and time estimates

- **Comprehensive Information:**
  - Equipment lists for each method
  - Detailed recipes with precise measurements
  - Tips and troubleshooting advice
  - Flavor profiles and best use cases

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Motion** (Framer Motion) for animations
- **Font Awesome** for icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheHubOfGit/coffee-brew.git
cd coffee-brew
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
coffee-brewing-guide/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── DifficultyBadge.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout.tsx
│   │   ├── MethodCard.tsx
│   │   ├── RatioCalculator.tsx
│   │   ├── SidebarNav.tsx
│   │   ├── StepGuide.tsx
│   │   └── Timer.tsx
│   ├── data/            # Brewing method data
│   │   └── brewingMethods.ts
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── V60.tsx
│   │   ├── FlairEspresso.tsx
│   │   └── MokaPot.tsx
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── dist/                # Build output
```

## Deployment

This project is configured for deployment on Cloudflare Pages (see `wrangler.toml`). The build process generates static files that can be deployed to any static hosting service.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available for personal and educational use.
