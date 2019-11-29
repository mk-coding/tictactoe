import React from "react";
import "./App.css";
import Board from "./components/Board";
import Grid from "./components/Grid";
import Result from "./components/Result";
import { newGrid, updateGrid } from "./gridSetupUtilies";

function App() {
  //============ STATES ============
  const player1 = "X";
  const player2 = "0";
  const [activePlayer, setActivePlayer] = React.useState(player1);
  const [gridSize, setGridSize] = React.useState(3);
  const [grid, setGrid] = React.useState([]);
  const [playedCell, setPlayedCell] = React.useState(null);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [winner, setWinner] = React.useState(false);

  const boardProps = {
    gridSize,
    newGame,
    setGridSize
  };

  React.useEffect(newGame, [gridSize]);
  React.useEffect(checkResult, [grid]);

  //============ METHODS ============
  function newGame() {
    setActivePlayer(player1);
    setGrid(newGrid(gridSize));
    setIsGameOver(false);
    setPlayedCell(null);
    setWinner(null);
  }

  function endGame(withWinner) {
    setIsGameOver(true);
    if (withWinner) setWinner(activePlayer);
  }

  function isGridFull() {
    return grid.flat().every(cell => cell.ownedBy !== null);
  }

  function checkDiagonal() {
    const { column, line } = playedCell;
    let diagonalToCheck;

    // Diagonal from Top-left to Bottom-Right
    if (column === line) {
      diagonalToCheck = grid.map((line, index) => line[index]);
      return diagonalToCheck.every(cell => cell.ownedBy === activePlayer);
    }

    // Diagonal from Bottom-left to Top-Right
    const lastLine = gridSize - 1;
    if (column === lastLine - line) {
      diagonalToCheck = grid.map(
        (currentLine, index) => currentLine[lastLine - index]
      );
      return diagonalToCheck.every(cell => cell.ownedBy === activePlayer);
    }

    // The cell does not belong to a diagonal
    return false;
  }

  function checkColumn() {
    const { column } = playedCell;
    const columnToCheck = grid.map(line => line[column]);
    return columnToCheck.every(cell => cell.ownedBy === activePlayer);
  }

  function checkLine() {
    const line = grid[playedCell.line];
    return line && line.every(cell => cell.ownedBy === activePlayer);
  }

  function checkResult() {
    if (!playedCell) return;

    if (checkLine() || checkColumn() || checkDiagonal()) {
      // The game is over with a winner
      endGame(true);
    } else if (isGridFull()) {
      // The game is over but there is no winner
      endGame(false);
    } else {
      setActivePlayer(activePlayer === player1 ? player2 : player1);
    }
  }

  function onCellPress(cell) {
    if (!isGameOver) {
      const cellUpdated = { ...cell, ownedBy: activePlayer };
      setPlayedCell(cellUpdated);
      setGrid(updateGrid(grid, cellUpdated));
    }
  }

  //============ RENDER ============
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board {...boardProps} />
      <Grid {...{ grid, onCellPress }} />
      <Result {...{ isGameOver, winner }} />
    </div>
  );
}

export default App;
