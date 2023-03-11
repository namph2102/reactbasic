import React, { useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [job, setJob] = useState("");
  const handleSubmit = () => {
    setTodo([...todo, job]);
    setJob("");
  };
  const deleIdTodo = (id) => {
    setTodo((preTodo) => {
      console.log(preTodo);
      preTodo.splice(id, 1);
      console.log("re-render todo");
      console.log(preTodo);
      return [...preTodo];
    });
  };
  return (
    <div className="todo-container">
      <input
        placeholder="Nhập todo ... "
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
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
