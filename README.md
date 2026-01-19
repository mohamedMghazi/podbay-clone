# Podbay Clone

A modern podcast search application built with Next.js 14, featuring bilingual support (English/Arabic) with RTL layout and real-time search capabilities powered by the iTunes API.

## Features

- Real-time podcast and episode search
- Bilingual support (English & Arabic)
- Server-side rendering for optimal SEO
- Dark theme UI with custom Tailwind design (Cloning Podbay styles)
- Responsive design with mobile support
- Loading states and error handling with retry mechanism

## Tech Stack

- **Framework**: Next.js 14 (Server & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: iTunes Search API
- **Fonts**: IBM Plex Sans Arabic

## Getting Started

### Prerequisites

- Node.js >= 20
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd podbay-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/                    # Next.js app directory
├── components/             # React components
├── hooks/                  # Custom React hooks
├── lib/                    # API layer and utilities
├── utilities/              # Server-side services
├── types.ts                # TypeScript type definitions
└── tailwind.config.js      # Tailwind configuration
```