import React from "react";
type InfoUser = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const [infoUser, setInforUser] = React.useState<InfoUser>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInforUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(infoUser);
  };
  return (
    <>
      <h1>Bài 3</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button title="Submit">Submit</button>
      </form>
    </>
  );
}
