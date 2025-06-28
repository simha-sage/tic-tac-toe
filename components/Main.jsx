import { useState } from "react";
import Box from "./Box";

const Main = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [count, setCount] = useState(0);
  if (count === 9) {
    console.log("tie");
  }

  return (
    <div className="place-self-center ">
      <p className="text-center">
        {winner !== ""
          ? `winner:${winner}`
          : count === 9
          ? `tie`
          : `player:${turn}`}
      </p>
      {[0, 3, 6].map((i) => (
        <div key={i} className="flex">
          {[0, 1, 2].map((j) => (
            <Box
              key={i + j}
              turn={turn}
              setTurn={setTurn}
              index={i + j}
              setWinner={setWinner}
              winner={winner}
              count={count}
              setCount={setCount}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Main;
