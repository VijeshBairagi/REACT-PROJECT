import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";



function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <form onSubmit={addTodoHandler} className="flex mb-4">
      <input
        type="text"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Add Todo</button>
    </form>
  );
}

export default AddTodo;
