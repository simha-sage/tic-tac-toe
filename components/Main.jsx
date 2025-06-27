import { useState } from "react";

const Box = () => {
  const [boxValue, setBoxValue] = useState("");
  return (
    <button
      className="w-20 h-20 bg-blue-200 m-2 transition duration-150 ease-in-out active:scale-95"
      onClick={() => setBoxValue("X")}
    >
      {boxValue}
    </button>
  );
};
const Main = () => {
  return (
    <div className="place-self-center ">
      <div className="flex">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};
export default Main;
