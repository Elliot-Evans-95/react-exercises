import { useState } from 'react';

interface BoardProps {
  xIsNext: boolean;
  squares: any[];
}

function Board({ xIsNext, squares }: BoardProps) {
  const [winner] = useState("");
  const [status, setStatus] = useState("");

  function handleClick(i: number) {
    return;
  }

  if (winner) {
    setStatus('Winner: ' + winner)
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <button className="square" onClick={() => handleClick(0)}>
          {squares[0]}
        </button>
        <button className="square" onClick={() => handleClick(1)}>
          {squares[1]}
        </button>
        <button className="square" onClick={() => handleClick(2)}>
          {squares[2]}
        </button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => handleClick(3)}>
          {squares[3]}
        </button>
        <button className="square" onClick={() => handleClick(4)}>
          {squares[4]}
        </button>
        <button className="square" onClick={() => handleClick(5)}>
          {squares[5]}
        </button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => handleClick(6)}>
          {squares[6]}
        </button>
        <button className="square" onClick={() => handleClick(7)}>
          {squares[7]}
        </button>
        <button className="square" onClick={() => handleClick(8)}>
          {squares[8]}
        </button>
      </div>
    </>
  );
}

export default function Game() {
  const [squares] = useState([Array(9).fill(null)]);

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={true} squares={squares} />
      </div>
    </div>
  );
}
