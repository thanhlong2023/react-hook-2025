import React from "react";
import ShoppingCart from "./ShoppingCart";
import { ThemeProvider } from "../../context/ThemeContext";
import RenderCounter from "./RenderCounter";
import Form from "./Form";

export default function index() {
  return (
    <div>
      <h1>Session 19</h1>
      <h2>Bài 1 - Bài 2</h2>
      <ThemeProvider>
        <ShoppingCart />
      </ThemeProvider>
      <hr />
      <h2>Bài 3</h2>
      <RenderCounter />
      <h2>Bài 4</h2>
      <Form />
    </div>
  );
}
