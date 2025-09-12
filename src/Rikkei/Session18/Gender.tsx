import React from "react";

export default function Gender() {
  const [gender, setGender] = React.useState<"male" | "female">("male");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as "male" | "female");
  };

  return (
    <div>
      <h1>Chọn giới tính</h1>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        <label htmlFor="male">Nam</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        <label htmlFor="female">Nữ</label>
      </div>
      <p>Giới tính đã chọn: {gender === "male" ? "Nam" : "Nữ"}</p>
    </div>
  );
}
