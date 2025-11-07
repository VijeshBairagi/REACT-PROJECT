import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-[#172842] min-h-screen py-8 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto shadow-2xl bg-white/10 rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
