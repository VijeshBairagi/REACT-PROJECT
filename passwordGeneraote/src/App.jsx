import { useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    return setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (<>
   <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
  <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      🔐 Password Generator
    </h1>

    <div className="space-y-4">
      <label className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <span className="text-gray-700 font-medium">Length:</span>
        <input
          type="number"
          value={length}
          min="4"
          max="32"
          onChange={(e) => setLength(e.target.value)}
          className="w-20 p-2 border rounded-lg textt-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </label>

      <label className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <span className="text-gray-700 font-medium">Include Numbers:</span>
        <input
          type="checkbox"
          checked={number}
          onChange={(e) => setNumber(e.target.checked)}
          className="w-5 h-5 accent-indigo-600"
        />
      </label>

      <label className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <span className="text-gray-700 font-medium">
          Include Special Characters:
        </span>
        <input
          type="checkbox"
          checked={character}
          onChange={(e) => setCharacter(e.target.checked)}
          className="w-5 h-5 accent-indigo-600"
        />
      </label>
    </div>

    <button
      onClick={generatePassword}
      className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
    >
      Generate Password
    </button>

    <div className="mt-6 text-center">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Generated Password:
      </h2>
      <div className="bg-gray-100 p-3 rounded-lg text-indigo-700 font-mono text-lg break-all select-all">
        {password || "••••••••••••••"}
      </div>
    </div>
  </div>
</div>

  </>);
}

export default App;
