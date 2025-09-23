import React from "react";

export default function Increase() {
  const [number, setNumber] = React.useState(0);
  const handleIncrease = () => {
    setNumber((prev) => prev + 1);
  };
  const style = {
    padding: "10px 20px",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div>
      <h1>Bài 1</h1>
      <br />
      <p>{number}</p>
      <button style={style} onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
}
