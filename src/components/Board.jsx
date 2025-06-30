import React, { useEffect, useState, useRef } from 'react';
import Box from './Box';

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function Board({ onWin, onDraw, resetToggle, isGameOver, aiMode }) {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turn0, setTurn0] = useState(true);
  const localGameOver = useRef(false); // Prevent double win/draw

  useEffect(() => {
    setBoxes(Array(9).fill(''));
    setTurn0(true);
    localGameOver.current = false;
  }, [resetToggle]);

  // Win/Draw check effect
  useEffect(() => {
    if (localGameOver.current || isGameOver) return;
    // Check for winner
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        boxes[a] &&
        boxes[a] === boxes[b] &&
        boxes[b] === boxes[c]
      ) {
        localGameOver.current = true;
        onWin(boxes[a]);
        return;
      }
    }
    // Check for draw
    if (boxes.every((val) => val !== '')) {
      localGameOver.current = true;
      onDraw();
    }
  }, [boxes, onWin, onDraw, isGameOver]);

  // AI move effect
  useEffect(() => {
    if (aiMode && turn0 && !isGameOver && !localGameOver.current) {
      // AI is '0', only play if it's AI's turn
      const emptyIndices = boxes.map((v, i) => v === '' ? i : null).filter(i => i !== null);
      if (emptyIndices.length > 0) {
        const aiMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        setTimeout(() => {
          aiHandleClick(aiMove);
        }, 500); // Delay for realism
      }
    }
    // eslint-disable-next-line
  }, [boxes, turn0, aiMode, isGameOver]);

  const handleClick = (index) => {
    if (boxes[index] || isGameOver || localGameOver.current) return;
    if (aiMode && turn0) return; // Prevent human from playing as AI
    const newBoxes = [...boxes];
    if (aiMode) {
      // Human is always 'X' in AI mode
      newBoxes[index] = 'X';
      setBoxes(newBoxes);
      setTurn0(true); // After human, AI's turn
    } else {
      // 2 players mode: alternate between 'X' and '0'
      newBoxes[index] = turn0 ? '0' : 'X';
      setBoxes(newBoxes);
      setTurn0((prev) => !prev); // Toggle turn
    }
  };

  const aiHandleClick = (index) => {
    if (boxes[index] || isGameOver || localGameOver.current) return;
    const newBoxes = [...boxes];
    newBoxes[index] = '0';
    setBoxes(newBoxes);
    setTurn0(false); // After AI, human's turn
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {boxes.map((value, index) => (
        <Box
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          index={index}
        />
      ))}
    </div>
  );
}

export default Board;