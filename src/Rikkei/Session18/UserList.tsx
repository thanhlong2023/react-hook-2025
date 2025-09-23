import React from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function UserList() {
  const [users] = React.useState<User[]>([
    { id: 1, name: "A", age: 20 },
    { id: 2, name: "B", age: 21 },
    { id: 3, name: "C", age: 17 },
    { id: 4, name: "D", age: 16 },
    { id: 5, name: "E", age: 18 },
    { id: 6, name: "F", age: 21 },
  ]);

  // "all" | "over" | "under"
  const [filter, setFilter] = React.useState<"all" | "over" | "under">("over");

  const filteredUsers = React.useMemo(() => {
    switch (filter) {
      case "over":
        return users.filter((u) => u.age > 18);
      case "under":
        return users.filter((u) => u.age <= 18);
      default:
        return users;
    }
  }, [filter, users]);

  const style = {
    padding: "10px 20px",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>Bài 2</h1>
      <br />
      <h2>
        Danh sách người dùng (
        {filter === "over" ? "Trên" : filter === "under" ? "Dưới" : "Tất cả"})
        18 tuổi
      </h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
      <button style={style} onClick={() => setFilter("over")}>
        Trên 18 tuổi
      </button>
      <button style={style} onClick={() => setFilter("under")}>
        Dưới hoặc bằng 18 tuổi
      </button>
      <button style={style} onClick={() => setFilter("all")}>
        Tất cả
      </button>
    </div>
  );
}
