import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="min-h-screen bg-indigo-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">ToolForge is Running!</h1>
        <p className="text-gray-600 mb-4">If you see this, React is working correctly.</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Click me: {count}
        </button>
      </div>
    </div>
  );
}

export default App;