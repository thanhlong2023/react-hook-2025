import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>(""); // Lưu màu được chọn

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bài 4</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Màu người dùng chọn:{" "}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>Màu hiển thị:</label>
        <div
          style={{
            marginTop: "5px",
            width: "200px",
            height: "100px",
            backgroundColor: color || "white",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}
