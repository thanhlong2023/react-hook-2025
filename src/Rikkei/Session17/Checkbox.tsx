import React from "react";

export default function Checkbox() {
  const [hobby, setHobby] = React.useState<string[]>([]);

  // Xử lý khi thay đổi checkbox
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobby((prev) => [...prev, value]);
    } else {
      setHobby((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h1>Sở thích: [{hobby.join(", ")}]</h1>
      <div>
        <input
          type="checkbox"
          id="play"
          value="Đi chơi"
          checked={hobby.includes("Đi chơi")}
          onChange={handleChange}
        />
        <label htmlFor="play">Đi chơi</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="swim"
          value="Đi bơi"
          checked={hobby.includes("Đi bơi")}
          onChange={handleChange}
        />
        <label htmlFor="swim">Đi bơi</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="sleep"
          value="Đi ngủ"
          checked={hobby.includes("Đi ngủ")}
          onChange={handleChange}
        />
        <label htmlFor="sleep">Đi ngủ</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="fly"
          value="Đi bay"
          checked={hobby.includes("Đi bay")}
          onChange={handleChange}
        />
        <label htmlFor="fly">Đi bay</label>
      </div>
    </div>
  );
}
