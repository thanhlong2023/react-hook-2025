import React from "react";

export default function ChangeColor() {
  const [color, setColor] = React.useState<string>("black");
  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };
  return (
    <>
      <h1 style={{ color }}>Tiêu đề văn bản</h1>
      <button style={{ border: "1px solid red" }} onClick={handleChangeColor}>
        Thay đổi màu
      </button>
    </>
  );
}
