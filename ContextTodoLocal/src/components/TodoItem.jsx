import  { useState } from "react";
import { useTodo } from "../context/context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    if (todoMsg.trim() === "") {
      alert("Todo cannot be empty");
      setTodoMsg(todo.todo);
      return;
    }
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-white/20 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-white ${
        todo.completed ? "bg-zinc-800" : "bg-zinc-700"
      } w-full`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg transition-all duration-200 ${
          isTodoEditable ? "border-gray-400 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/30 justify-center items-center bg-gray-50/20 hover:bg-gray-50/40 shrink-0 disabled:opacity-50 transition-colors duration-200"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/30 justify-center items-center bg-red-500/30 hover:bg-red-500/50 shrink-0 transition-colors duration-200"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;