import React from "react";
import "./Todolist.css";
import TodiItem from "./TodiItem";
import Modal from "./Modal";

export type Todo = {
  id: number;
  title: string;
  checked: boolean;
};

export default function Todolist() {
  // Đọc dữ liệu từ localStorage khi khởi tạo
  const [todos, setTodos] = React.useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = React.useState<string>("");
  const [editId, setEditId] = React.useState<number | null>(null);
  const [todoDelete, setTodoDelete] = React.useState<Todo | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  // Mỗi khi todos thay đổi thì lưu vào localStorage
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Thêm hoặc lưu công việc
  // Thêm hoặc lưu công việc
  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed === "") {
      setError("Tên công việc không được để trống!");
      return;
    }

    const isDuplicate = todos.some(
      (todo) =>
        todo.title.toLowerCase() === trimmed.toLowerCase() && todo.id !== editId
    );
    if (isDuplicate) {
      setError("Tên công việc đã tồn tại!");
      return;
    }

    // Nếu hợp lệ thì xóa lỗi
    setError("");

    if (editId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, title: trimmed } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), title: trimmed, checked: false },
      ]);
    }
    setInput("");
  };

  // Check/uncheck công việc
  const handleCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // Sửa công việc
  const handleEdit = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setInput(todo.title);
      setEditId(id);
    }
  };

  // Xóa công việc
  const handleDelete = (todo: Todo) => {
    setTodoDelete(todo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const confirmDelete = (todo: Todo | null) => {
    if (!todo) return;
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    setIsModalOpen(false);
  };

  // Tính số công việc đã hoàn thành
  const completedCount = todos.filter((t) => t.checked).length;

  return (
    <div className="todo-container">
      <h1>Danh sách công việc</h1>
      <div className="input-todo">
        <div className="width-full">
          <input
            className="width-full"
            type="text"
            placeholder="Nhập công việc"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          {/* Hiển thị lỗi */}
          {error && <p className="error-text">{error}</p>}
        </div>

        <button className="btn-add" onClick={handleAdd}>
          {editId !== null ? "Lưu" : "Thêm công việc"}
        </button>
      </div>

      <ul className="list-todo">
        {todos.map((todo) => (
          <TodiItem
            key={todo.id}
            todo={todo}
            onCheck={() => handleCheck(todo.id)}
            onEdit={() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo)}
          />
        ))}
      </ul>
      <div className="todo-stats">
        Công việc hoàn thành: {completedCount}/{todos.length}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        todoDelete={todoDelete}
        onConfirmDelete={confirmDelete}
      />
    </div>
  );
}
