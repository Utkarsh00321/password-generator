import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="bg-black h-screen w-full flex items-center justify-center">
        <div className="text-white">
          <h1 className="font-bold text-4xl">Password Generator</h1>
          <div className="flex flex-cols mt-10 mb-4 ">
            <input
              className="w-full text-black rounded-t-lg   py-1 rounded-b-lg rounded-l-lg mr-4"
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
            ></input>
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-500 py-2 px-4 rounded-t-lg rounded-b-lg rounded-l-lg"
            >
              Copy
            </button>
          </div>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="w-16 mr-4 cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length" className="mr-4">
            Length: {length}
          </label>
          <input
            className="mr-1"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number" className="mr-4">
            Numbers
          </label>
          <input
            className="mr-1"
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="charInput" className="mr-4">
            Character
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
