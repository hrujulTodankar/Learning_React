# React State Classes

A React project demonstrating state management concepts with functional components and hooks, featuring interactive Todo List and Ludo Board applications.

## Features

### Todo List
- Add new tasks with unique IDs
- Delete existing tasks
- Real-time state updates using React hooks
- Clean and simple interface

### Ludo Board
- Track moves for different colored players (Blue, Green, Red, Yellow)
- Interactive move counters
- State management for multiple player moves

## Technologies Used

- **React 19** - Latest React version with hooks
- **Vite** - Fast build tool and development server
- **UUID** - For generating unique task identifiers
- **ESLint** - Code linting and formatting

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-state-classes.git
cd react-state-classes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Todo List
- Enter a task in the input field
- Click "Add Task" to add it to the list
- Use the "delete" button next to any task to remove it

### Ludo Board
- Click the "+1" button to increment the blue player's moves
- Additional player move tracking can be expanded

## Project Structure

```
src/
├── App.jsx          # Main application component
├── TodoList.jsx     # Todo list functionality
├── Ludo_board.jsx   # Ludo game board component
├── App.css          # Application styles
└── index.css        # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Learning Objectives

This project demonstrates:
- React functional components with hooks
- State management using `useState`
- Event handling in React
- Component composition
- Unique ID generation with UUID

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
