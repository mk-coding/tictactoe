import React from "react";
import Cell from "./Cell";

const Line = ({ line, onCellPress }) => {
  return (
    <div className="line">
      {line.map((cell, index) => (
        <Cell
          cell={cell}
          key={`cell${cell.line}${cell.column}`}
          onCellPress={onCellPress}
        />
      ))}
    </div>
  );
};

export default Line;
