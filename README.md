# Tic Tac Toe

A modern, interactive Tic Tac Toe game built with React and Tailwind CSS. Play against a friend or challenge an AI opponent!

![Tic Tac Toe Screenshot](/public/game.png)

## Features

- 🎮 **Two Game Modes:**  
  - **2 Players:** Classic mode for two human players.
  - **Play vs AI:** Challenge a simple AI that makes random moves.
- 🏆 **Win/Draw Detection:**  
  - Automatic detection of wins and draws, with a stylish modal popup.
- ✨ **Beautiful UI:**  
  - Responsive design with animated backgrounds and smooth transitions.
- 🔄 **Reset Anytime:**  
  - Instantly restart the game with a single click.
- ❤️ **Built with:**  
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd tic-tac-toe--react-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

## Project Structure

```
Project 3/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Board.jsx
  │   │   └── Box.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── index.html
  ├── package.json
  └── README.md
```

## How to Play

- **Choose a mode:**  
  Use the toggle at the top to select "2 Players" or "Play vs AI".
- **Take turns:**  
  Click on a square to place your marker (X or 0).
- **Win or draw:**  
  The game will automatically detect a win or draw and show a modal.
- **Play again:**  
  Click "Play Again" or the reset button to start a new game.

## Customization

- The AI currently makes random moves. You can enhance it by implementing smarter algorithms (e.g., Minimax).
- Easily restyle the game by editing Tailwind CSS classes in the components.

## License

This project is open source and available under the [MIT License](LICENSE).

---

_Made with ❤️ by Sandip Biswal_
