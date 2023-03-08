import { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./Nav";
import Todo from "./Todo/Todo";
function App() {
  let [name, setName] = useState("");
  const [todo, setTodo] = useState([]);
  const handleEvent = () => {
    setTodo([...todo, name]);
  };
  const deleIdTodo = (i) => {
    console.log(i);
    setTodo((todo) => [...todo.filter((item, index) => index !== i)]);
  };
  useEffect(() => {
    console.log("re-render");
  }, [todo]);
  return (
    <div className="App">
      <Nav />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Todo todo={todo} deleIdTodo={deleIdTodo} />
      <Todo todo={todo.filter((i) => !i.includes("a"))} />
      <button onClick={handleEvent}>Sub</button>
    </div>
  );
}

export default App;
