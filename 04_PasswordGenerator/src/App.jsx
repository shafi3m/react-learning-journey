import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [pass, setPass] = useState("");
  //useRef hook
  const passRef = useRef(null);
  const btnTextRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*-_+=[]{}~`";

    let allChars = letters;

    if (isNum) allChars += numbers;
    if (isChar) allChars += symbols;

    // Force include at least one number if selected
    if (isNum) {
      pass += numbers[Math.floor(Math.random() * numbers.length)];
    }

    // Force include at least one symbol if selected
    if (isChar) {
      pass += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Fill the remaining length
    for (let i = pass.length; i < length; i++) {
      pass += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the final password so forced characters aren't always at the beginning
    pass = pass
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    setPass(pass);
  }, [length, isNum, isChar, setPass]);

  const copyToCB = useCallback(() => {
    // selection copy to clipboard
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);

    // Immediately update button text
    if (btnTextRef.current) {
      btnTextRef.current.innerText = "Copied!";
    }

    // Revert text after 2 seconds
    setTimeout(() => {
      if (btnTextRef.current) {
        btnTextRef.current.innerText = "Copy";
      }
    }, 2000);
  }, [pass]);

  useEffect(() => {
    passGenerator();
  }, [length, isNum, isChar, passGenerator]);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
          <h1 className="text-white text-2xl text-center my-3">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 text-white bg-gray-600">
            <input
              type="text"
              value={pass}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <button
              onClick={copyToCB}
              ref={btnTextRef}
              className="outline-none px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2 text-white ">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer "
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isNum}
                id="numberInput"
                onChange={() => {
                  setIsNum((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isChar}
                id="characterInput"
                onChange={() => {
                  setIsChar((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
