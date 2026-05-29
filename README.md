# Next-Gen Learning Dashboard

A modern learning analytics dashboard built with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

* Learning Command Center
* Course Progress Tracking
* XP Progress System
* Learning Activity Timeline
* Glassmorphism UI
* Responsive Dashboard Layout
* Supabase Integration
* Animated User Experience using Framer Motion
* Error Boundaries and Loading States

## Tech Stack

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React

## Architecture

The application follows a component-driven architecture:

components/

* dashboard/

  * command-center.tsx
  * course-card.tsx
  * xp-tile.tsx
  * insights-tile.tsx
  * timeline-tile.tsx
  * dashboard-grid.tsx

* layout/

  * sidebar.tsx

* effects/

  * glow-card.tsx
  * grid-background.tsx

lib/

* supabase/
* animations.ts

types/

* course.ts

## Server / Client Component Split

### Server Components

* app/page.tsx
* Supabase data fetching utilities

Responsibilities:

* Fetch course data from Supabase
* Pass data to client components
* Reduce client-side bundle size

### Client Components

* Sidebar
* CourseCard
* DashboardGrid
* XP Tile
* Insights Tile

Responsibilities:

* User interaction
* Framer Motion animations
* UI state management

## Data Flow

1. Server Component requests course data from Supabase.
2. Data is fetched using Supabase SDK.
3. Results are passed into dashboard components.
4. Client components render interactive visualizations.

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

A sample template is provided in `.env.example`.

## Challenges Faced

### 1. Server and Client Component Separation

Careful separation was required to keep Supabase fetching on the server while maintaining interactive animations on the client.

### 2. Dynamic Dashboard Layout

The dashboard layout was redesigned to create a modern SaaS-style learning experience while maintaining responsiveness.

### 3. Environment Management

Supabase credentials were managed through environment variables to ensure secure deployment to Vercel.

## Deployment

Production deployment is hosted on Vercel.

## Author

Sampath Malleboina

