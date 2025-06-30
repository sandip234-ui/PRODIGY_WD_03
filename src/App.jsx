import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [resetToggle, setResetToggle] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [aiMode, setAiMode] = useState(false);

  const handleWinner = (player) => {
    setWinner(player);
    setGameOver(true);
  };

  const handleDraw = () => {
    setIsDraw(true);
    setGameOver(true);
  };

  const resetGame = () => {
    setWinner(null);
    setIsDraw(false);
    setGameOver(false);
    setResetToggle(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-40 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
          TIC TAC TOE
        </h1>
        <p className="text-slate-400 text-lg font-medium tracking-wide">
          Challenge your mind • Test your strategy
        </p>
        {/* Game Mode Toggle */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${!aiMode ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-200'}`}
            onClick={() => setAiMode(false)}
            disabled={!gameOver && !aiMode}
          >
            2 Players
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${aiMode ? 'bg-pink-500 text-white' : 'bg-slate-700 text-slate-200'}`}
            onClick={() => setAiMode(true)}
            disabled={!gameOver && aiMode}
          >
            Play vs AI
          </button>
        </div>
      </div>

      {/* Winner / Draw Modal */}
      {gameOver && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-500">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full mx-4 border border-white/10 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              {/* Trophy Icon for Winner */}
              {winner && (
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 16V8h4v8H8z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {winner ? `Player ${winner} Wins!` : "It's a Draw!"}
              </h2>

              <p className="text-slate-300 mb-8 text-lg">
                {winner
                  ? "🎉 Congratulations on your victory!"
                  : "🤝 Great game! No winner this time."}
              </p>

              <button
                onClick={resetGame}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                🎮 Play Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Board Container */}
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl z-10">
        <Board
          onWin={handleWinner}
          onDraw={handleDraw}
          resetToggle={resetToggle}
          isGameOver={gameOver}
          aiMode={aiMode}
        />
      </div>

      {/* Reset Button (always visible) */}
      {!gameOver && (
        <button
          onClick={resetGame}
          className="mt-8 group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-2xl font-semibold text-lg border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 shadow-lg z-10"
        >
          <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset Game</span>
        </button>
      )}

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 text-slate-600 text-sm font-medium">
        Made with ❤️
      </div>
    </div>
  );
}

export default App;