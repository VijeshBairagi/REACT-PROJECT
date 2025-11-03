import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="bg-white border border-slate-100 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <label className="block">
          <span className="text-sm text-slate-700">Username</span>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-700">Password</span>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </label>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
