import React from "react";

const Cell = ({ cell, onCellPress }) => {
  const { ownedBy } = cell;

  function handleOnCellPress() {
    if (!ownedBy) onCellPress(cell);
  }

  return (
    <div className="cell" onClick={handleOnCellPress}>
      {ownedBy && <p>{ownedBy}</p>}
    </div>
  );
};

export default Cell;
