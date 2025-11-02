import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#3b82f6');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg border-2 border-gray-200 shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Color Changer
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Color
            </label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="e.g., red, #ff0000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div 
            style={{ backgroundColor: color }}
            className="w-full h-48 rounded-xl shadow-2xl border-2 flex items-center justify-center"
          >
            <p className="text-white text-lg font-semibold mix-blend-difference">
              Preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}