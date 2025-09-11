import ShowName from "./ShowName";
import ShowProduct from "./ShowProduct";
import ChangeColor from "./ChangeColor";
import Toggle from "./Toggle";
import Form from "./Form";
import CounText from "./CounText";
import City from "./City";
import Checkbox from "./Checkbox";
import Todolist from "./Todolist/Todolist";

export default function index() {
  return (
    <>
      <h2>Bài 1</h2>
      <ShowName />
      <br />
      <h2>Bài 2</h2>
      <ShowProduct />
      <br />
      <h2>Bài 3</h2>
      <ChangeColor />
      <br />
      <h2>Bài 4</h2>
      <Toggle />
      <br />
      <h2>Bài 5</h2>
      <Form />
      <br />
      <h2>Bài 6</h2>
      <CounText />
      <br />
      <h2>Bài 7</h2>
      <City />
      <br />
      <h2>Bài 8</h2>
      <Checkbox />
      <br />
      <h2>Bài 9</h2>
      <Todolist />
      <br />
    </>
  );
}
