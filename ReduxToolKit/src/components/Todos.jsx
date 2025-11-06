import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log("VAlUE " , todos);
  
  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>{todo.text}</div>
        </li>
      ))}
    </>
  );
}

export default Todos;
