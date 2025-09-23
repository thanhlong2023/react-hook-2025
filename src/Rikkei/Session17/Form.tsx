import React from "react";

export default function Form() {
  const [value, setValue] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="Nhập bất kì"
        type="text"
        value={value}
        onChange={handleChange}
      />
      {value && <p>{value}</p>}
    </div>
  );
}
