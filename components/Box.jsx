import { useState } from "react";

const board = Array(9).fill("");

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = () => {
  return winningCombos.some(([a, b, c]) => {
    return board[a] !== "" && board[b] === board[c] && board[a] === board[b];
  });
};

const Box = (props) => {
  const [boxValue, setBoxValue] = useState("");

  const handleClick = () => {
    if (boxValue !== "") return;
    setBoxValue(props.turn);
    board[props.index] = props.turn;
    if (checkWin()) {
      console.log("win");
      props.setWinner(props.turn);
    }
    props.setTurn(props.turn == "X" ? "O" : "X");
  };
  return (
    <button
      className="w-20 h-20 bg-blue-200 m-2 transition duration-150 ease-in-out active:scale-95 font-bold"
      onClick={handleClick}
    >
      {boxValue}
    </button>
  );
};
export default Box;
