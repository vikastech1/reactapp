import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className='w-full h-screen flex flex-col justify-between h-500' style={{ backgroundColor: color }}>
      
      {/* Text aligned to the bottom center */}
      <div className="flex justify-center items-end w-full h-full">
        <p className="text-white text-3xl mb-4">Color Changer</p>
      </div>

      {/* Buttons to change color */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button className="p-2 bg-red-500 text-white rounded" onClick={() => setColor("red")}>Red</button>
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setColor("blue")}>Blue</button>
        <button className="p-2 bg-green-500 text-white rounded" onClick={() => setColor("green")}>Green</button>
        <button className="p-2 bg-yellow-500 text-white rounded" onClick={() => setColor("yellow")}>Yellow</button>
      </div>
    </div>
  );
}

export default App;
