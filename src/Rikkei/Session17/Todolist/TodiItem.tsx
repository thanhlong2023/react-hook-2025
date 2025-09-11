import React from "react";
import type { Todo } from "./Todolist";

type TodiItemProps = {
  todo: Todo;

  onCheck: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function TodiItem({
  todo,

  onCheck,
  onEdit,
  onDelete,
}: TodiItemProps) {
  return (
    <li
      className="todo-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 8,
      }}
    >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={onCheck}
        placeholder="check"
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.checked ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <button className="btn-edit" onClick={onEdit} style={{ marginRight: 6 }}>
        Sửa
      </button>
      <button
        className="btn-delete"
        onClick={onDelete}
        style={{ color: "#ef4444" }}
      >
        Xóa
      </button>
    </li>
  );
}
