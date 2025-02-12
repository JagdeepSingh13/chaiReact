import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo/todoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if it has a id then update
    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  const handleEdit = (id, text) => {
    // sets the editId and text in input bar
    setEditId(id);
    setText(text);
  };

  // const handleUpdate = (id, currentText) => {
  //   const newText = prompt("Update your task:", currentText);
  //   if (newText) {
  //     dispatch(updateTodo({ id, text: newText }));
  //   }
  // };

  // {} use these when we return smtg only

  return (
    <>
      <div>Todos</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add or update a todo..."
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
