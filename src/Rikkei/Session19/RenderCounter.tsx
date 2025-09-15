import { useEffect, useRef, useState } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState(""); // state cho input
  const renderCount = useRef(0); // ref để đếm số lần render

  // Mỗi lần render -> tăng biến đếm
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Render Counter</h1>
      <input
        type="text"
        value={value}
        placeholder="Nhập gì đó..."
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>Giá trị nhập: {value}</p>
      <p>Số lần render: {renderCount.current}</p>
    </div>
  );
}
