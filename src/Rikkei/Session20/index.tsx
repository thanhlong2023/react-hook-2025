import React, { useEffect, useState } from "react";

// Bài 1
const InputLengthChecker: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h2 className="font-bold mb-2">Bài 1</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập chuỗi..."
        className="border p-2 rounded w-full"
      />
      {text.length > 5 && (
        <p className="text-green-600 mt-2">✅ Chuỗi dài hơn 5 ký tự!</p>
      )}
    </div>
  );
};

// Bài 2
const UserProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h2 className="font-bold mb-2">Bài 2</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên"
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Gửi
        </button>
      </form>
      {submitted && (
        <div className="mt-3">
          <p>👤 Tên: {name}</p>
          <p>📧 Email: {email}</p>
        </div>
      )}
    </div>
  );
};

// Bài 3
const Welcome: React.FC = () => {
  useEffect(() => {
    console.log("👋 Welcome component được render lần đầu!");
  }, []);

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h2 className="font-bold mb-2">Bài 3</h2>
      <p>Xin chào! Chào mừng bạn đến với ứng dụng 🎉</p>
    </div>
  );
};

// Bài 4
const PageTitle: React.FC = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username) {
      document.title = `Xin chào, ${username}`;
    } else {
      document.title = "React App";
    }
  }, [username]);

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h2 className="font-bold mb-2">Bài 4</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nhập tên để đổi title..."
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

// App gộp 4 bài
const App: React.FC = () => {
  return (
    <div className="p-5 space-y-5">
      <InputLengthChecker />
      <UserProfile />
      <Welcome />
      <PageTitle />
    </div>
  );
};

export default App;
