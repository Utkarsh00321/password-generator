import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black h-screen w-full flex items-center justify-center">
        <div className="text-white">
          <h1 className="font-bold text-4xl">Password Generator</h1>
          <div className="flex flex-cols mt-10 mb-4 ">
            <input
              className="w-full rounded-t-lg rounded-b-lg rounded-l-lg mr-4"
              type="text"
            ></input>
            <button className="bg-blue-500 py-2 px-4 rounded-t-lg rounded-b-lg rounded-l-lg">
              Copy
            </button>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value="8"
            class="slider"
            id="myRange"
            className="mr-2"
          ></input>
          <input className="mr-1" type="checkbox" name="Numbers" id="Numbers" />
          <label className="mr-4" forHTML="Numbers">
            Numbers
          </label>
          <input
            className="mr-1"
            type="checkbox"
            name="Characters"
            id="Characters"
          />
          <label className="mr-4" forHTML="Characters">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
