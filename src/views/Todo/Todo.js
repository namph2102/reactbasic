import React from "react";
const Todo = ({ todo, deleIdTodo }) => {
  return (
    <div className="todo-container">
      {todo.map((t, i) => (
        <li key={i}>
          {t} <button onClick={() => deleIdTodo(i)}>x</button>{" "}
        </li>
      ))}
      <hr />
    </div>
  );
};
export default Todo;
