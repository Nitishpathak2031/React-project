import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("Crimson");

  return (
    <>
      <div className="w-full h-screen duration-200 flex items-center justify-center"
        style={{ backgroundColor: color }}>
        
        {/* Button container */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 w-full">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>

            <button
              onClick={() => setColor('orange')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >Orange</button>

            <button
              onClick={() => setColor('green')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >green</button>

            <button
              onClick={() => setColor('pink')}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >pink</button>

            <button
              onClick={() => setColor('gray')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >gray</button>

            <button
              onClick={() => setColor('tan')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "tan" }}
            >Tan</button>

            <button
              onClick={() => setColor('maroon')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "maroon" }}
            >maroon</button>

            <button
              onClick={() => setColor('gold')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gold" }}
            >Gold</button>

            <button
              onClick={() => setColor('silver')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "silver" }}
            >silver</button>

            <button
              onClick={() => setColor('brown')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
            >brown</button>

          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
