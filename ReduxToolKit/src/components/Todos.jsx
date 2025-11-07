import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo, toggleTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [updateText, setUpdateText] = useState("");
  const dispatch = useDispatch();

  const handleUpdateTodo = (e, id) => {
    e.preventDefault();
    if (updateText.trim()) {
      dispatch(updateTodo({ id: id, text: updateText }));
      setEditableTodoId(null);
      setUpdateText("");
    }
  };

  const startEdit = (todo) => {
    setEditableTodoId(todo.id);
    setUpdateText(todo.text);
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Your Todos:</h2>
      <ul className="list-none">
        {[...todos].reverse().map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded-lg transition-all duration-300 ${
              todo.completed ? "bg-green-800/50 text-gray-400" : "bg-zinc-800"
            }`}
            key={todo.id}
          >
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                className="cursor-pointer h-4 w-4"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {editableTodoId === todo.id ? (
                <form
                  onSubmit={(e) => handleUpdateTodo(e, todo.id)}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    className="border-black/10 bg-transparent rounded-lg text-white px-2 py-1 mx-2 outline-none w-full"
                    value={updateText}
                    onChange={(e) => setUpdateText(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="text-green-500 hover:text-green-400 transition-colors"
                  >
                    📁
                  </button>
                </form>
              ) : (
                <span
                  className={`flex-grow mx-4 transition-all duration-300 ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => startEdit(todo)}
                className="text-yellow-500 hover:text-yellow-400 transition-colors disabled:opacity-50"
                disabled={editableTodoId === todo.id || todo.completed}
              >
                ✏️
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
