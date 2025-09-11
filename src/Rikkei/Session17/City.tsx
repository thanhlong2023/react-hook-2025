import React from "react";

export default function City() {
  const [city, setCity] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setCity(e.target.value);
    // Lấy text của option được chọn
    const selectedText = e.target.selectedOptions[0].text;
    setCity(selectedText);
  };
  return (
    <div>
      <p>
        Thành phố: <span>{city}</span>
      </p>
      <select title="Chọn thành phố" name="" id="" onChange={handleChange}>
        <option value="HN">Hà Nội</option>
        <option value="HCM">Hồ Chí Minh</option>
        <option value="DN">Đà Nẵng</option>
      </select>
    </div>
  );
}
