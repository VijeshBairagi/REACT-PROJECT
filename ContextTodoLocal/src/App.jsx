import { useState, useEffect } from "react";
import { TodoProvider } from "./context/index.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === id ? todo : t)));
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, toggleComplete, deleteTodo, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8 font-sans">
        <div className="w-full max-w-2xl mx-auto shadow-2xl bg-white/10 rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
