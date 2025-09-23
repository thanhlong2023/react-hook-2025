import { NavLink, Outlet } from "react-router-dom";

export default function Session25() {
  return (
    <div>
      <h1>Session 25</h1>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <NavLink
            to=""
            end
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home25
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="register"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Register
          </NavLink>
        </li>
      </ul>

      {/* Route con sẽ hiển thị ở đây */}
      <Outlet />
    </div>
  );
}
