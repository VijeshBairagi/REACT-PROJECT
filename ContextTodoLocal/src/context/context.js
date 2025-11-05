import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1, title: "Sample Todo", completed: false
    },
    {
      id: 2, title: "Another Todo", completed: true
    }
  ],
  addTodo: (id) => { },
  toggleTodo: (id) => { },
  deleteTodo: (id) => { },
  updateTodo: (id, todo) => { }
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
