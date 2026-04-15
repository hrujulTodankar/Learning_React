# Learning React

A collection of hands-on React mini-projects built with Vite, covering core React concepts from the ground up.

## Projects

### 1. `react-functions`
Introduction to React functional components and event handling.
- Button with an `onClick` handler that logs to the console
- Covers: JSX, functional components, basic event handling

### 2. `React-Props`
Demonstrates passing data between components using props.
- Job listing board displaying cards for companies (Google, Meta, Amazon, etc.)
- Renders a list of `Card` components dynamically using `.map()`
- Covers: props, component reuse, list rendering, `lucide-react` icons

### 3. `react-states`
Introduction to the `useState` hook with two interactive components.
- **Counter** — increments a number on button click
- **Like Button** — toggles between a filled/outlined heart icon (Font Awesome)
- Covers: `useState`, conditional rendering, toggle state

### 4. `React-State-Classes`
Stateful class-style patterns using functional components and hooks.
- **Todo List** — add and delete tasks with unique IDs (`uuid`)
- Covers: `useState` with arrays, controlled inputs, list mutation, `uuid`

### 5. `React-UI`
A multi-section UI layout built with reusable components.
- **Section 1** — dynamic user cards with images, subtext, and action buttons passed via props
- **Section 2** — static secondary section
- Covers: component composition, props drilling, multi-section layouts

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Lucide React](https://lucide.dev/) — icons
- [UUID](https://www.npmjs.com/package/uuid) — unique IDs
- Font Awesome — icon library (CDN)

## Getting Started

Each project is independent. To run any of them:

```bash
cd <project-folder>   # e.g. cd React-Props
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Project Structure

```
Learning_React/
├── react-functions/       # Event handling basics
├── React-Props/           # Props & component reuse
├── react-states/          # useState hook
├── React-State-Classes/   # useState with arrays & forms
└── React-UI/              # Multi-section UI layout
```
