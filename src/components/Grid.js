import React from "react";
import Line from "./Line";

const Grid = ({ grid, onCellPress }) => {
  return (
    <div className="grid">
      {grid.map(line => (
        <Line
          line={line}
          key={`line${line[0].line}`}
          onCellPress={onCellPress}
        />
      ))}
    </div>
  );
};

export default Grid;
