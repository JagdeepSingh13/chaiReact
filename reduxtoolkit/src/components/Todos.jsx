import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id, currentText) => {
    const newText = prompt("Update your task:", currentText);
    if (newText) {
      dispatch(updateTodo(id, newText));
    }
  };

  // {} use these when we return smtg

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            <button onClick={() => handleUpdate(todo.id, todo.text)}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
