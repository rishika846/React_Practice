import { useState } from "react";

function Square({ value, handlerButton, index }) {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        border: "2px solid red",
      }}
      onClick={() => handlerButton(index)}
    >
      {value}
    </button>
  );
}

function Row({ valArr, handler, idx }) {
  return (
    <div>
      <Square value={valArr[0]} handlerButton={handler} index={idx} />
      <Square value={valArr[1]} handlerButton={handler} index={idx + 1} />
      <Square value={valArr[2]} handlerButton={handler} index={idx + 2} />
    </div>
  );
}

function Board() {
  const [val, setVal] = useState(Array(9).fill(null));
  const [isTurn, setTurn] = useState(true);

  function Reset() {
    setVal(Array(9).fill(null));
    setTurn(true);
  }

  function Winner(board) {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winCombos) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  function Draw(board) {
    if(!Winner(board))return false
    return !board.includes(null);
  }

  function onSquareClick(index) {
    // Don't allow moves if game is over
    if (Winner(val) || Draw(val)) return;

    // Don't allow clicking occupied squares
    if (val[index] !== null) return;

    const copy = [...val];

    copy[index] = isTurn ? "X" : "O";

    setVal(copy);
    setTurn((prev) => !prev);
  }

  const winner = Winner(val);

  let status;

  if (winner) {
    status = `Winner is ${winner}`;
  } else if (Draw(val)) {
    status = "It's a Draw!";
  } else {
    status = `Turn : ${isTurn ? "X" : "O"}`;
  }

  return (
    <>
      <h1>{status}</h1>

      <Row valArr={val.slice(0, 3)} handler={onSquareClick} idx={0} />
      <Row valArr={val.slice(3, 6)} handler={onSquareClick} idx={3} />
      <Row valArr={val.slice(6, 9)} handler={onSquareClick} idx={6} />

      <br />

      <button onClick={Reset}>Reset Game</button>
    </>
  );
}

function App() {
  return <Board />;
}

export default App;