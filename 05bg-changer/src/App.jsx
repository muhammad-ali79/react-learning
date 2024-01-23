import React from "react";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="flex gap-4 items-center justify-center w-full h-full">
        <button className="" onClick={() => setColor("red")}>
          RED
        </button>
        <button className="" onClick={() => setColor("green")}>
          GREEN
        </button>
        <button className="" onClick={() => setColor("blue")}>
          BLUE
        </button>
      </div>
    </div>
  );
}
