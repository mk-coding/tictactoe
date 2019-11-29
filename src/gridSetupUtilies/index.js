function setCellData(line, column) {
  return {
    line,
    column,
    ownedBy: null
  };
}

function populateLine(line, columnsNumber) {
  const newLine = [];
  let count = 0;
  while (count < columnsNumber) {
    newLine.push(setCellData(line, count));
    count++;
  }
  return newLine;
}

export function newGrid(gridSize) {
  const grid = [];
  let count = 0;
  while (count < gridSize) {
    grid.push(populateLine(count, gridSize));
    count++;
  }

  return grid;
}

export function updateGrid(grid, playedCell) {
  const { line, column } = playedCell;
  return [
    ...grid.slice(0, line),
    [
      ...grid[line].slice(0, column),
      playedCell,
      ...grid[line].slice(column + 1)
    ],
    ...grid.slice(line + 1)
  ];
}
