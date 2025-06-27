import { useState } from "react";
import Box from "./Box";

const Main = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  return (
    <div className="place-self-center ">
      <p className="text-center">
        {winner !== "" ? `winner:${winner}` : `player:${turn}`}
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
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Main;
