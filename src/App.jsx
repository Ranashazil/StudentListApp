import { useState } from 'react';
import Data from './components/Data';
import './App.css';
import List from './components/List';

function App() {
  const [hey, setHey] = useState(Data);

  return (
    <>
      <div className="min-h-96 flex justify-center items-center flex-col bg-gray-100 p-8 rounded-lg shadow-xl">
        <h3 className="text-4xl font-extrabold text-blue-600 mb-6 underline tracking-wide">
          {hey.length} Students
        </h3>
        <List people={hey} />
      </div>
      <button
        onClick={() => setHey([])}
        className="bg-red-500 text-white px-8 py-4 mt-8 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
      >
        Delete All
      </button>
    </>
  );
}

export default App;
