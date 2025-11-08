import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  try {
    const serializatedTodos = localStorage.getItem('todos');
    if (serializatedTodos) {
      return JSON.parse(serializatedTodos);
    }
    return [];
  } catch (err) {
     console.warn("Could not load todos from local storage", err);
    return []; 
  }
}

const setLocalStorage = (todos) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (err) {
    console.warn("Could not save todos to local storage", err);
  }
}


const initialState = {
  todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload, completed: false })
      setLocalStorage(state.todos)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      setLocalStorage(state.todos)
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        setLocalStorage(state.todos)
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
        setLocalStorage(state.todos)
      }
    }
  }
})


export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
