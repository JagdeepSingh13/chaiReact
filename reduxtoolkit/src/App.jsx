import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>RTK</h1>
      <Todos />
    </>
  );
}

export default App;
