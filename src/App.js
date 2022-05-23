import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { useTodoLayerValue } from "./context/TodoContext";

function App() {
  const [{ todos }, dispacth] = useTodoLayerValue();
  const [content , setContent] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random()*4636434363),
      content,
      isCompleted: false,
    };
    dispacth({
      type:"ADD_TODO",
      payload: newTodo,
    });
    setContent('');
  };
  console.log(todos);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input autoFocus type="text" className="todo-input" onChange={(e) => setContent(e.target.value)} value={content.trimStart()} />
        <button className="todo-button">Ekle</button>
      </form>
      {/* Todo Listesi */}
        <TodoList todos={todos} />
    </div>

  )
}

export default App;
