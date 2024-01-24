import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // here we use the useRef hook to take the reference of the passowod
  const passwordRef = useRef(null);

  // here we also use the useCallback to optimize our method
  const generatePassword = useCallback(() => {
    let password = "";
    let passwordStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) passwordStr += "0123456789";
    if (isCharAllowed) passwordStr += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * passwordStr.length + 1);
      password += passwordStr.charAt(randIndex);
    }

    setPassword(password);
    // here in the dependecy array we also take the setpassword because something related to optimzation
  }, [length, isCharAllowed, isCharAllowed, setPassword]);

  // here we also use the useCallback to optimize our method
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // here we use the useEffect to run the method whenever the any of the dependecy value changes
  useEffect(() => {
    generatePassword();
  }, [length, isCharAllowed, isNumberAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          className="outline-none w-full py-1 px-3"
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 ">
        <div>
          <input
            type="range"
            min={8}
            max={100}
            id="chracterInput"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="chracterInput">lenght({length})</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={() => {
              // remember the method to update the state also give the previous value to update the state based on previous

              // if we do this then the variable will also be true
              // setNumberAllowed(true);
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

// usecallback is meomized when dependency values changes otherwise the the function meomized on every re-render of the component

// useEffect also takes the dependecy array and given funcion will be called if the any of the depency value changes

// if any of the dependecy value change in useCallback then the callback function in the will optimized not run and in the useEffect the if any of the dependecy value chanes then then given callback will be called not optimized

// useRef is used whenever we want to take the refernce of an element like we take referenc in the vanilla js using .querySelector
