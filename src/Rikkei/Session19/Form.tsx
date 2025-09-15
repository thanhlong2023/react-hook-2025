import React, { useState } from "react";

export default function SimpleForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validate = (field: string, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = "Trường này là bắt buộc";
    } else if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Email không hợp lệ";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kiểm tra lần cuối
    Object.entries(form).forEach(([key, value]) => validate(key, value));

    const hasError = Object.values(errors).some((err) => err !== "");
    if (!hasError && form.name && form.email) {
      alert("Gửi thành công!");
    }
  };

  const isDisabled =
    !form.name ||
    !form.email ||
    Object.values(errors).some((err) => err !== "");

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow space-y-4"
    >
      {/* Họ tên */}
      <div>
        <label className="block font-medium">Họ tên</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          placeholder="Nhập họ tên"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          placeholder="Nhập email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full p-2 rounded text-white ${
          isDisabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Gửi
      </button>
    </form>
  );
}
