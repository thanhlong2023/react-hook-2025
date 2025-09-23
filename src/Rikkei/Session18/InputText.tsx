import React from "react";

export default function InputText() {
  const [text, setText] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p> {text}</p>
      <input type="text" placeholder="Nhập bất kì" onChange={handleChange} />
    </div>
  );
}
