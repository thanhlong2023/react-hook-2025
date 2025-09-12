import Increase from "./Increase";
import LoginForm from "./LoginForm";
import UserList from "./UserList";
import ColorPicker from "./ColorPicker";
import InputText from "./InputText";
import Gender from "./Gender";

export default function index() {
  return (
    <div>
      <hr />
      <h1>Session 18</h1>
      <Increase />
      <br />
      <UserList />
      <br />
      <LoginForm />
      <br />
      <ColorPicker />
      <br />
      <InputText />
      <br />
      <Gender />
    </div>
  );
}
