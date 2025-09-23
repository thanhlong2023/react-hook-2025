import React from "react";

export default function ShowName() {
  const [name] = React.useState<string>("Cao Thành Long");
  return (
    <div>
      <h1>Họ và tên: {name}</h1>
    </div>
  );
}
