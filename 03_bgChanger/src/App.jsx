import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen bg-amber-200 duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">
          Click the buttons to change the background color
        </h1>
      </div>
      <div
        className="fixed flex content-center flex-wrap justify-center bottom-12 inset-x-0 px-2 mx-4 rounded-2xl
      "
      >
        <div className="flex flex-wrap content-center justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "pink", color: "black" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Teal")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("Brown")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
