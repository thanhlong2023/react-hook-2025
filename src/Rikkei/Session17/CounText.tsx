import React from "react";

export default function CounText() {
  const [text, setText] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount =
    text.trim() === "" ? 0 : text.trim().replace(/\s/g, "").length;
  return (
    <div>
      <textarea
        placeholder="Nhập văn bản"
        value={text}
        onChange={handleChange}
      ></textarea>
      <p>Số từ: {wordCount}</p>
      <p>Số ký tự: {charCount}</p>
    </div>
  );
}
