import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">⚡</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ToolForge</h1>
        <p className="text-gray-600 mb-4">Digital Tools Platform</p>
        <div className="bg-green-100 text-green-700 p-3 rounded-lg font-semibold">
          ✅ Tailwind CSS is working perfectly!
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Server is running on MacBook
        </p>
      </div>
    </div>
  );
}

export default App;
