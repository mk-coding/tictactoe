import React from "react";

const Result = ({ isGameOver, winner }) => (
  <>
    {isGameOver && !winner && <p>GAME OVER</p>}
    {isGameOver && winner && <p>THE WINNER IS {winner}</p>}
  </>
);

export default Result;
