import React from "react";

export default function Toggle() {
  const [show, setShow] = React.useState<boolean>(true);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <button style={{ border: "1px solid red" }} onClick={handleToggle}>
        {show ? "Ẩn" : "Hiện"}
      </button>
      {show && <h1>Văn bản hiển thị</h1>}
    </div>
  );
}
