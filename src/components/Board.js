import React from "react";

const Board = ({ gridSize, newGame, setGridSize }) => {
  function decreaseGridSize() {
    if (gridSize > 3) setGridSize(gridSize - 1);
  }
  function increaseGridSize() {
    setGridSize(gridSize + 1);
  }
  return (
    <div className="board">
      <button onClick={newGame}>New game</button>
      <p>
        {gridSize} x {gridSize}
        <span className="setGridButtons" onClick={decreaseGridSize}>
          -
        </span>
        <span className="setGridButtons" onClick={increaseGridSize}>
          +
        </span>
      </p>
    </div>
  );
};

export default Board;
